let inputFields = document.querySelectorAll("input");

//adds an input eventlistner with the callback function removeWarning defined in script.js
inputFields.forEach((e) => e.addEventListener("input", removeWarning));





// listenes onclick and maps the click event to the hidden checkbox input. This is done for styling purposes. The AGB checkbox is covered with A div element
// also added pointer-events:none to the cover div, this code stays just for future projects. the desired outcome will also work without this code

let cover = document.querySelector(".coverInput");
let agb = document.querySelector("#agb");
cover.addEventListener("click", function () {
  if (agb.checked == false) {
    agb.checked = true;
  } else {
    agb.checked = false;
  }
});
