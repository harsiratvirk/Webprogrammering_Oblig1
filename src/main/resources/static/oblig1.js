
// Inputvalidering og sjekk av tomme felt
function sjekkFilmer() {
    const filmer = document.getElementById("filmer").value;
    const filmfeil = document.getElementById("filmfeil");

    // Sjekker om feltet er tomt
    if (filmer === "" || filmer === "default") {
        filmfeil.innerText = "Film må oppgis";
    } else {
        filmfeil.innerText = ""; // nullstiller felt
    }
}

function sjekkAntall() {
    const antall = document.getElementById("antall").value;
    const antfeil = document.getElementById("antfeil");

    if (antall === "") {
        antfeil.innerText = "Antall må oppgis";
    }
    // Sjekker om input er et tall
    else if (isNaN(antall) || antall < 1) {
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
    const nrRegex = /^[0-9]{8}$/;

    if (tlf === "") {
       tlffeil.innerText = "Tlfnr må oppgis";
    }
    else if (!nrRegex.test(tlf)) {
        tlffeil.innerText = "Oppgi et gyldig telefonnummer."
    } else {
        tlffeil.innerText = "";
    }
}

function sjekkEpost() {
    const epost = document.getElementById("epost").value;
    const epostfeil = document.getElementById("epostfeil");
    const epostRegex = /^[a-zA-Z0-9._%&+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (epost === "") {
        epostfeil.innerText = "Epost må oppgis";
    }
    else if (!epostRegex.test(epost)) {
        epostfeil.innerText = "Oppgi en gyldig epost."
    } else {
        epostfeil.innerText = "";
    }
}

function sjekkValidering() {
    sjekkFilmer()
    sjekkAntall();
    sjekkFnavn();
    sjekkEnavn();
    sjekkTlf();
    sjekkEpost();

    // Returnerer true hvis ingen valideringsfeil, ellers false.
        const valideringsFeil = document.getElementById("filmfeil").innerText ||
            document.getElementById("antfeil").innerText ||
            document.getElementById("fnavnfeil").innerText ||
            document.getElementById("enavnfeil").innerText ||
            document.getElementById("tlffeil").innerText ||
            document.getElementById("epostfeil").innerText;
        return !valideringsFeil;
}

let billettliste = [];
function kjopBillett() {
    // Forhindrer å kjøre resten av koden dersom valideringen returnerer false.
        if(!sjekkValidering()) {
            return;
        }

        // Oppretter billet-objekt og legger det inn i arrayet
        const billett = {
            film: document.getElementById("filmer").value,
            antall: document.getElementById("antall").value,
            fnavn: document.getElementById("fnavn").value,
            enavn: document.getElementById("enavn").value,
            tlf: document.getElementById("tlf").value,
            epost: document.getElementById("epost").value
        };
        billettliste.push(billett);

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
        document.getElementById("allebilletter").innerHTML = ut;

        // nullstiller inputfeltene
        document.getElementById("filmer").value = "";
        document.getElementById("antall").value = "";
        document.getElementById("fnavn").value = "";
        document.getElementById("enavn").value = "";
        document.getElementById("tlf").value = "";
        document.getElementById("epost").value = "";
}

// Sletter alle billetene
function slettBilletter() {
    billettliste = [];
    document.getElementById("allebilletter").innerHTML = "";
}