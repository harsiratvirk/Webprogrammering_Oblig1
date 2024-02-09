
// Sjekk av tomme felt og inputvalidering
function sjekkAntall() {
    const antall = document.getElementById("antall").value;
    const antfeil = document.getElementById("antfeil");
    if (antall === "") {
        antfeil.innerText = "Antall må oppgis";
    } else if (isNaN(antall)) {
        antfeil.innerText = "Skriv inn tall";
    } else {
        antfeil.innerText = "";
    }
}

function sjekkFnavn() {
    const fnavn = document.getElementById("fnavn").value;
    const fnavnfeil = document.getElementById("fnavnfeil");
    if (fnavn === "") {
        fnavnfeil.innerText = "Fornavn må oppgis";
    } else {
        fnavnfeil.innerText = "";
    }
}

function sjekkEnavn() {
    const enavn = document.getElementById("enavn").value;
    const enavnfeil = document.getElementById("enavnfeil");
    if (enavn === "") {
        enavnfeil.innerText = "Etternavn må oppgis";
    } else {
        enavnfeil.innerText = "";
    }
}

function sjekkTlf() {
    const tlf = document.getElementById("tlf").value;
    const tlffeil = document.getElementById("tlffeil");
    if (tlf === "") {
       tlffeil.innerText = "Tlfnr må oppgis";
       return;
    }
    const nrRegex = /^\d{8}$/;
    if (!nrRegex.test(tlf)) {
        tlffeil.textContent = "Oppgi et gyldig tlfnummer."
    } else {
        tlffeil.innerText = "";
    }
}

function sjekkEpost() {
    const epost = document.getElementById("epost").value;
    const epostfeil = document.getElementById("epostfeil");
    const epostRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!epostRegex.test(epost)) {
        epostfeil.innerText = "Oppgi en gyldig epost."
    } else {
        epostfeil.innerText = "";
    }
}

let billettliste = [];
function kjopBillett() {

    // Henter verdiene fra input-feltene
    const film = document.getElementById("filmer").value;
    const antall = document.getElementById("antall").value;
    const fnavn = document.getElementById("fnavn").value;
    const enavn = document.getElementById("enavn").value;
    const tlf = document.getElementById("tlf").value
    const epost = document.getElementById("epost").value;

    if(!sjekkValidering()) {
        return;
    }

    // Oppretter objekt og legger det inn i arrayet
    const billett = {film, antall, fnavn, enavn, tlf, epost};
    billettliste.push(billett);

    function sjekkValidering () {
        sjekkAntall();
        sjekkFnavn();
        sjekkEnavn();
        sjekkTlf();
        sjekkEpost();

        if (document.getElementById("antfeil").innerText ||
            document.getElementById("fnavnfeil").innerText ||
            document.getElementById("enavnfeil").innerText ||
            document.getElementById("tlffeil").innerText ||
            document.getElementById("epostfeil").innerText) {
            return false; // Validering mislyktes
        }

        // Skriver ut billetter
        let ut = "<table><tr>" +
            "<th>Film</th><th>Antall</th><th>Navn</th><th>Telefonnr</th><th>Epost</th></tr>";
        for (let pers of billettliste) {
            ut += "<tr><td>" + pers.film + "</td>" +
                "<td>" + pers.antall + "</td>" +
                "<td>" + pers.fnavn + " " + pers.enavn + "</td>" +
                "<td>" + pers.tlf + "</td>" +
                "<td>" + pers.epost + "</td>" +
                "</tr>";
        }
        ut += "</table>";
        document.getElementById("allebiletter").innerHTML = ut;

        // nullstiller inputfeltene
        document.getElementById("filmer").value = "";
        document.getElementById("antall").value = "";
        document.getElementById("fnavn").value = "";
        document.getElementById("enavn").value = "";
        document.getElementById("tlf").value = "";
        document.getElementById("epost").value = "";
    }
}

function slettBilletter() {
    billettliste = [];
    document.getElementById("alleBiletter").innerHTML = "";
}