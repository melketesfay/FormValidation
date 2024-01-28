
// after succesfull booking gets Vorname and nachname and shows them on the success.html page

function welcome() {
  let vorname = sessionStorage.getItem("vorname");
  let nachname = sessionStorage.getItem("nachname");

  document.getElementById("welcome_vorname").innerHTML = vorname.toUpperCase();
  document.getElementById("welcome_nachname").innerHTML =
    nachname.toUpperCase();
}

welcome();
