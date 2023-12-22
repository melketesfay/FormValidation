let inputFields = document.querySelectorAll("input");

inputFields.forEach((e) => e.addEventListener("input", removeWarning));

let cover = document.querySelector(".coverInput");
let agb = document.querySelector("#agb");
cover.addEventListener("click", function () {
  if (agb.checked == false) {
    agb.checked = true;
  } else {
    agb.checked = false;
  }
});
