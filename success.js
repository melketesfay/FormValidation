function welcome() {
  let vorname = sessionStorage.getItem("vorname");
  let nachname = sessionStorage.getItem("nachname");

  document.getElementById("welcome_vorname").innerHTML = vorname.toUpperCase();
  document.getElementById("welcome_nachname").innerHTML =
    nachname.toUpperCase();
}

welcome();
