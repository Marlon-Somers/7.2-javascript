var Budget = 100;

var productPrice = parseFloat(prompt("Hoeveel kost het product dat je wilt kopen?"));

var ResultP = document.getElementById("ResultParagraph");

if (!isNaN(productPrice)) {
    if (Budget >= productPrice) {
        ResultP.innerHTML = "U heeft genoeg geld om het product te kopen. Budget: " + Budget + " Productprijs: " + productPrice;
        ResultP.style.color = "green";
    } else {
        ResultP.innerHTML = "niet genoeg geld om het product te kopen. Budget: " + Budget + " Productprijs: " + productPrice;
        ResultP.style.color = "red";
    }
} else {
    ResultP.innerHTML = "Ongeldig getal Voer een geldig getal in voor de productprijs.";
    ResultP.style.color = "red";
}