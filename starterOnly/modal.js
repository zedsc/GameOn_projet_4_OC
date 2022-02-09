function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalCross = document.querySelector(".close");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// close modal event
modalCross.addEventListener("click", closeModal);

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal form
function closeModal() {
  modalbg.style.display = "none";
}

// Error messages
  // Creation + naming
  for (let formIt of formData){
    const errText = document.createElement("p");
    errText.className = "wrong-input";
    formIt.appendChild(errText);
  }

  // Styling
  const wrongInput = document.querySelectorAll(".wrong-input");
  for (let errTextStyle of wrongInput){
    errTextStyle.style.display = "none";
    errTextStyle.style.color = "#ff4e60";
    errTextStyle.style.fontSize = "12px";
  }


