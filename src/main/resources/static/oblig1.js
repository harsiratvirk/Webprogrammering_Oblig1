// Input validation and check for empty fields
function validateMovies(input) {
    if (input === "" || input === "default") {
        $("#moviesErr").text("Movie is required");
        return false;
    } else {
        $("#moviesErr").text("");
        return true;
    }
}

function validateNumber(input) {
    if (input === "") {
        $("#numberErr").text("Quantity is required");
        return false;
    } else if (isNaN(input) || input < 1) {
        $("#numberErr").text("Enter numbers");
        return false;
    } else {
        $("#numberErr").text("");
        return true;
    }
}

function validateFname(input) {
    if (input === "") {
        $("#fnameErr").text("Name is required");
        return false;
    } else {
        $("#fnameErr").text("");
        return true;
    }
}
function validateSname(input) {
    if (input === "") {
        $("#snameErr").text("Surname is required");
        return false;
    } else {
        $("#snameErr").text("");
        return true;
    }
}

function validateTel(input) {
    const telRegex = /^[0-9]{8}$/;
    const ok = telRegex.test(input);
    if(input === "") {
        $("#telErr").text("Phone number is required");
        return false;
    } else if (!ok) {
        $("#telErr").text("Enter a valid phone number");
        return false;
    } else {
        $("#telErr").text("");
        return true;
    }
}

function validateEmail(input) {
    const emailRegex = /^[a-zA-Z0-9._%&+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const ok = emailRegex.test(input);
    if(input === "") {
        $("#emailErr").text("Email number is required");
        return false;
    } else if (!ok) {
        $("#emailErr").text("Enter a valid email");
        return false;
    } else {
        $("#emailErr").text("");
        return true;
    }
}

function validateandsave(){
    const movieOK = validateMovies($("#movies").val());
    const numberOK = validateNumber($("#number").val());
    const fnameOK = validateFname($("#fname").val());
    const snameOK = validateSname($("#sname").val());
    const telOK = validateTel($("#tel").val());
    const emailOK = validateEmail($("#email").val());
    if (movieOK && numberOK && fnameOK && snameOK && telOK && emailOK) {
        buyTicket();
    }
}

let ticketList = [];
function buyTicket() {
// Creates the ticket object and puts it into the array
    const ticket = {
        movies: $("#movies").val(),
        number: $("#number").val(),
        fname: $("#fname").val(),
        sname: $("#sname").val(),
        tel: $("#tel").val(),
        email: $("#email").val(),
    };
    ticketList.push(ticket);

// Prints ticket
    let out= "<table><tr><th>Movies</th><th>Number of tickets</th><th>Name</th>" +
        "<th>Surname</th><th>Phone number</th><th>Email</th></tr>";
    for (let pers of ticketList) {
        out += "<tr><td>" + pers.movies + "</td><td>" + pers.number + "</td>" +
            "<td>" + pers.fname + "</td><td>" + pers.sname + "</td>" +
            "<td>" + pers.tel + "</td><td>" + pers.email + "</td></tr>";
    }
    out += "</table>";
    $("#allTickets").html(out);
    $("#movies").val("default"); // reset inputs
    $("#number").val("");
    $("#fname").val("");
    $("#sname").val("");
    $("#tel").val("");
    $("#email").val("");
}

// Deletes all tickets
function deleteTickets() {
    document.getElementById("allTickets").innerHTML = "";
}