
// oppretter array
let billettliste = [];

function kjopbillett() {

    // henter alle verdiene fra input-feltene
    const film = document.getElementById("velgfilm").value;
    const antall = document.getElementById("antall").value;
    const fnavn = document.getElementById("fnavn").value;
    const enavn = document.getElementById("enavn").value;
    const tlf = document.getElementById("tlf").value;
    const epost = document.getElementById("epost").value;

    // oppretter objekt og legger det inn i arrayet
    const billett = {film, antall, fnavn, enavn, tlf, epost};
    billettliste.push(billett);

    // nullstiller inputfeltene
    document.getElementById("velgfilm").value = "";
    document.getElementById("antall").value = "";
    document.getElementById("fnavn").value = "";
    document.getElementById("enavn").value = "";
    document.getElementById("tlf").value = "";
    document.getElementById("epost").value = "";

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
}

function slettbilletter() {
    billettliste = [];
    document.getElementById("allebiletter").innerHTML = "";

}