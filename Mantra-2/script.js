const btn = document.getElementById("reservation-submit-btn")
const inputs = document.querySelector('form')
btn.addEventListener('click', ()=> {
    Email.send({
        Host: "smtp.gmail.com",
        Username: "tambolihruday@gmail.com",
        Password: "Hrud4y6765",
        To: "tambolihruday@gmail.com",
        From: "tambolihruday@gmail.com",
        Subject: "Reservation request",
        Body: "dear manager," + "<br>" + "You have got a reservation request" + "<br>" + "<br>" + "Phone Number: " + inputs.elements["phoneNumber"].value + "<br>" + "Head Count: " + inputs.elements["headCount"].value + "<br>" + "Date: " + inputs.elements["date"].value + "<br>" + "Time: " + inputs.elements["time"].value + "<br>" + "Comments: " + inputs.elements["comments"].value
    }).then(msg=>alert("You will get a confirmation call shortly"))
})

inputs.elements["phoneNumber"].value