
// Input validation and check for empty fields
function validateMovies() {
    const movies = document.getElementById("movies").value;
    const moviesErr = document.getElementById("moviesErr");

    if (movies === "" || movies === "default") {
        moviesErr.innerText = "Movie is required";
    } else {
        moviesErr.innerText = ""; // Resets field
    }
}

function validateNumber() {
    const number = document.getElementById("number").value;
    const numberErr = document.getElementById("numberErr");

    if (number === "") {
        numberErr.innerText = "Quantity is required";
    }
    else if (isNaN(number) || number < 1) {
        numberErr.innerText = "Enter numbers";
    } else {
        numberErr.innerText = "";
    }
}

function validateFname() {
    const fname = document.getElementById("fname").value;
    const fnameErr = document.getElementById("fnameErr");

    if (fname === "") {
        fnameErr.innerText = "Name is required";
    } else {
        fnameErr.innerText = "";
    }
}

function validateSname() {
    const sname = document.getElementById("sname").value;
    const snameErr = document.getElementById("snameErr");

    if (sname === "") {
        snameErr.innerText = "Surname is required";
    } else {
        snameErr.innerText = "";
    }
}

function validateTel() {
    const tel = document.getElementById("tel").value;
    const telErr = document.getElementById("telErr");
    const telRegex = /^[0-9]{8}$/;

    if (tel === "") {
       telErr.innerText = "Phone number is required";
    }
    else if (!telRegex.test(tel)) {
        telErr.innerText = "Enter a valid phone number"
    } else {
        telErr.innerText = "";
    }
}

function validateEmail() {
    const email = document.getElementById("email").value;
    const emailErr = document.getElementById("emailErr");
    const emailRegex = /^[a-zA-Z0-9._%&+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (email === "") {
        emailErr.innerText = "Email adress is required";
    }
    else if (!emailRegex.test(email)) {
        emailErr.innerText = "Enter a valid email adress"
    } else {
        emailErr.innerText = "";
    }
}

function checkValidation() {
    validateMovies()
    validateNumber();
    validateFname();
    validateSname();
    validateTel();
    validateEmail();

    // Returns true if no validation error, false otherwise.
    const validationError = document.getElementById("moviesErr").innerText ||
        document.getElementById("numberErr").innerText ||
        document.getElementById("fnameErr").innerText ||
        document.getElementById("snameErr").innerText ||
        document.getElementById("telErr").innerText ||
        document.getElementById("emailErr").innerText;
    return !validationError;
}

let ticketList = [];
function buyTicket() {
    // Prevents the rest of the code from running if the validation returns false.
    if(!checkValidation()) {
        return;
    }

// Creates the ticket object and puts it into the array
    const ticket = {
        movies: document.getElementById("movies").value,
        number: document.getElementById("number").value,
        fname: document.getElementById("fname").value,
        sname: document.getElementById("sname").value,
        tel: document.getElementById("tel").value,
        email: document.getElementById("email").value
    };
    ticketList.push(ticket);

// Prints ticket
    let out = "<table><tr>" +
        "<th>Movies</th><th>Number of tickets</th><th>Name</th><th>Phone number</th><th>Email</th></tr>";
    for (let pers of ticketList) {
        out += "<tr><td>" + pers.movies + "</td>" +
            "<td>" + pers.number + "</td>" +
            "<td>" + pers.fname + " " + pers.sname + "</td>" +
            "<td>" + pers.tel + "</td>" +
            "<td>" + pers.email + "</td>" +
            "</tr>";
    }
    out += "</table>";
    document.getElementById("allTickets").innerHTML = out;

// Resets the input fields
    document.getElementById("movies").value = "";
    document.getElementById("number").value = "";
    document.getElementById("fname").value = "";
    document.getElementById("sname").value = "";
    document.getElementById("tel").value = "";
    document.getElementById("email").value = "";
}

// Deletes all tickets
function deleteTickets() {
    ticketList = [];
    document.getElementById("allTickets").innerHTML = "";
}