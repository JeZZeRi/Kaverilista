let kaverit = [];

function lisaaKaveri() {
    const nimiKentta = document.getElementById("kaveriNimi");
    const nimi = nimiKentta.value.trim();
    if (nimi !== "") {
        kaverit.push(nimi);
        paivitaKaveriLista();
        nimiKentta.value = "";
    }
}

function poistaKaveri() {
    const poistoKentta = document.getElementById("kaveriNimi");
    const poistettavaNimi = poistoKentta.value.trim();
    const indeksi = kaverit.indexOf(poistettavaNimi);
    if (indeksi !== -1) {
        kaverit.splice(indeksi, 1);
        paivitaKaveriLista();
        poistoKentta.value = "";
    } else {
        alert("Kaveria ei löytynyt!");
    }
}

function jarjestaKaverit() {
    kaverit.sort();
    paivitaKaveriLista();
}

function paivitaKaveriLista() {
    const kaveriListaElementti = document.getElementById("kaveriLista");
    kaveriListaElementti.innerHTML = "";
    kaverit.forEach(function(kaveri) {
        const listItem = document.createElement("li");
        const textNode = document.createTextNode(kaveri);
        listItem.appendChild(textNode);
        kaveriListaElementti.appendChild(listItem);
    });
}