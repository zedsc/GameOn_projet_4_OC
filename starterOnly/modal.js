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
const modalCloseBtn = document.querySelector(".btn-close");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal event
modalCross.addEventListener("click", closeModal); 
  // close modal event after submission
  modalCloseBtn.addEventListener("click", closeModal);

// close modal form
function closeModal() {
  modalbg.style.display = "none";
}

// form validation
  // error messages
    // creation + naming
    for (let formIt of formData){
      const errText = document.createElement("p");
      errText.className = "wrong-input";
      formIt.appendChild(errText);
    }

    // styling
    const wrongInput = document.querySelectorAll(".wrong-input");
    for (let errTextStyle of wrongInput){
      errTextStyle.style.display = "none";
      errTextStyle.style.color = "#ff4e60";
      errTextStyle.style.fontSize = "12px";
    }

  
