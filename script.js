function checkInput() {
  event.preventDefault();
  let data = document.querySelectorAll(".inputGroup input");
  let arrData = Array.from(data);
  let checkAGB = document.getElementById("agb").checked;
  console.log(!checkAGB);
  sessionStorage.setItem("vorname", data[0].value);
  sessionStorage.setItem("nachname", data[1].value);

  let wrongData = [];
  let goodData = [];

  for (let i = 0; i < data.length; i++) {
    if (data[i].value !== "") {
      goodData.push(data[i]);
    }
  }

  for (let i = 0; i < data.length; i++) {
    if (data[i].value == "") {
      wrongData.push(data[i]);
    }
  }
  data.forEach((e) => (e.style.border = "none"));

  if (wrongData.length > 0 || !checkAGB.checked) {
    if (wrongData.length > 0) {
      wrongData.forEach((e) => {
        // let alertnode = document.createElement("p");
        // alertnode.appendChild(document.createTextNode(`${e.name} is wrong`));

        // alertnode.style.marginBottom = "5px";
        // alertnode.style.marginTop = "0px";
        // alertnode.style.color = "red";
        // alertnode.style.fontWeight = "500";
        // alertnode.style.display = "block";
        // alertnode.classList.add("alert");
        // alertnode.style.border = "2px solid red";
        // e.parentElement.insertBefore(alertnode, e);
        // alertnode.innerHTML = `${e.name} is wrong`;
        // goodData.forEach((e) => e.parentNode.childNodes[1].removeChild);

        // // e.parentNode.insertBefore(alertnode, e);
        e.style.border = "none";
        e.style.border = "3px solid red";
      });

      return false;
    } else if (!checkAGB) {
      alert("Please Accept Terms");
      console.log(data);
      return false;
    }
  }
  document.getElementById("myForm").submit();
}

function welcome() {
  let vorname = sessionStorage.getItem("vorname");
  let nachname = sessionStorage.getItem("nachname");

  document.getElementById("welcome_vorname").innerHTML = vorname.toUpperCase();
  document.getElementById("welcome_nachname").innerHTML =
    nachname.toUpperCase();
}

welcome();
