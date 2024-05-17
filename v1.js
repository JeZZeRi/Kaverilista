var Kaverit = [];


for (var i = 0; i < 10; i++) {
    var KaverinNimi = prompt("Anna kaverin nimi:" + (i + 1));
    Kaverit.push(KaverinNimi);
}


document.write("<h2>Kaveri lista:</h2>");
document.write("<ul>");
Kaverit.forEach(function (Kaveri) {
    document.write("<li>" + Kaveri + "</li>");
});
document.write("</ul>");