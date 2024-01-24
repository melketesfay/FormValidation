function checkInput() {
  event.preventDefault();
  let data = document.querySelectorAll(".inputGroup input");
  let arrData = Array.from(data);
  let checkAGB = document.getElementById("agb").checked;
  // console.log(!checkAGB);
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
  //   data.forEach((e) => (e.style.border = "none"));

  document.querySelectorAll("p").forEach((e) => e.remove());

  document.querySelectorAll("p").forEach((e) => (e.id = "alert"));

  if (wrongData.length > 0 || !checkAGB.checked) {
    if (wrongData.length > 0) {
      wrongData.forEach((e) => {
        let alertnode = document.createElement("p");

        alertnode.style.cssText = 
                `
                margin-bottom: 5px;
                margin-top:0px;
                padding-left:5px;
                color:#bb0000;
                font-weight:500;
                display:block;
                border: 2px solid red;
                border-radius:5px;
                height:25px;
                `;
        // alertnode.style.marginBottom = "5px";
        // alertnode.style.paddingLeft = "5px";
        // alertnode.style.marginTop = "0px";
        // alertnode.style.color = "#bb0000";
        // alertnode.style.fontWeight = "500";
        // alertnode.style.display = "block";
        // alertnode.style.overflow= "hidden";
        // alertnode.style.borderRadius = "5px";
        // alertnode.style.height = "20px";
        // alertnode.style.border = "2px solid #ff0000";
        // alertnode.classList.add("alert");
       
        alertnode.appendChild(
          document.createTextNode(`Bitte ${e.name} eingeben`)
        );
        e.parentNode.insertBefore(alertnode, e);

        // e.style.border = "3px solid red";
      });

      return false;
    } else if (!checkAGB) {
      alert("Please Accept Terms");
      // console.log(data);
      return false;
    }
  }
  document.getElementById("myForm").submit();
}

//p elemets are added above if a false input is detected

function removeWarning() {
  if (this.parentNode.querySelector("p") != null) {
    // this.parentNode.style.display = "flex";
    // this.parentNode.style.gridTemplateRows = "1fr 1fr 1fr";
    // this.parentNode.style.overflow = "hidden";
    // this.parentNode.style.transition = "gridTemplateRows 1s";
    // this.parentNode.style.gridTemplateRows = "1fr 0fr 1fr";
    this.parentNode.querySelector("p").style.border = "none";
    this.parentNode.querySelector("p").style.margin = "0px";
    this.parentNode.querySelector("p").style.transition = "All 0.5s";
    this.parentNode.querySelector("p").style.height = "0px";
    
    setTimeout(() => {
      this.parentNode.querySelector("p").style.display = "none";
    }, 500);
  }
}
