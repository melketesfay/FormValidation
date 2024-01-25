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
  
       
        alertnode.appendChild(
          document.createTextNode(`Bitte ${e.name} eingeben`)
        );
        e.parentNode.insertBefore(alertnode, e);

   
      });

      return false;
    } else if (!checkAGB) {
      alert("Please Accept Terms");

      return false;
    }
  }
  document.getElementById("myForm").submit();
}




//removes the error messages on input event. Siehe form.js

function removeWarning() {
  if (this.parentNode.querySelector("p") != null) {
   let errorMsg = this.parentNode.querySelector("p");

   errorMsg.style.cssText = 
                `
                margin:0px;
                border: none;
                transition: All 0.5s;
                height:0px;
                `;
    
    setTimeout(() => {
      errorMsg.remove();
    }, 500);
  }
}
