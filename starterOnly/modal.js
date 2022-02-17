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

  // inputs validation
    // firstname input
    let firstNameVar = false;
    document
      .getElementById("firstName")
      .addEventListener("input", function(event) {
        if (event.target.value.length > 0 && /^(?=.{2,30}$)[a-z]+(?:['-.\s][a-z]+)*$/.test(event.target.value)) {
          document.querySelector("#firstName ~ .wrong-input").style.display = "none";
          document.getElementById("firstName").style.border = "0.8px solid #ccc";
          firstNameVar = true;
          return true;
        } else {
          document.getElementById("firstName").style.border = "2px solid #ff4e60";
          document.querySelector("#firstName ~ .wrong-input").style.display = "block";
          document.querySelector("#firstName ~ .wrong-input").innerText = "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
          firstNameVar = false;
          return false;
        }
      })

    // lastname input
    let lastNameVar = false;
    document
      .getElementById("lastName")
      .addEventListener("input", function(event) {
        if (event.target.value.length > 0 && /^(?=.{2,50}$)[a-z]+(?:['-.\s][a-z]+)*$/.test(event.target.value)) {
          document.querySelector("#lastName ~ .wrong-input").style.display = "none";
          document.getElementById("lastName").style.border = "0.8px solid #ccc";
          lastNameVar = true;
          return true;
        } else {
          document.getElementById("lastName").style.border = "2px solid #ff4e60";
          document.querySelector("#lastName ~ .wrong-input").style.display = "block";
          document.querySelector("#lastName ~ .wrong-input").innerText = "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
          lastNameVar = false;
          return false;
        }
      })
    
    // email input
    let emailVar = false;
    document
      .getElementById("email")
      .addEventListener("input", function(event) {
        if (event.target.value.length > 0 && /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(event.target.value)) {
          document.querySelector("#email ~ .wrong-input").style.display = "none";
          document.getElementById("email").style.border = "0.8px solid #ccc";
          emailVar = true;
          return true;
        } else {
          document.getElementById("email").style.border = "2px solid #ff4e60";
          document.querySelector("#email ~ .wrong-input").style.display = "block";
          document.querySelector("#email ~ .wrong-input").innerText = "Vous devez entrer une adresse e-mail valide.";
          emailVar = false;
          return false;
        }
      })

    // birthdate input
    let birthdateVar = false;
    document
      .getElementById("birthdate")
      .addEventListener("input", function(event) {
        if (event.target.value.length > 0 && /^([0-9]{4}|[0-9]{2})[-]([0]?[1-9]|[1][0-2])[-]([0]?[1-9]|[1|2][0-9]|[3][0|1])$/.test(event.target.value)) {
          document.querySelector("#birthdate ~ .wrong-input").style.display = "none";
          document.getElementById("birthdate").style.border = "0.8px solid #ccc";
          birthdateVar = true;
          return true;
        } else {
          document.getElementById("birthdate").style.border = "2px solid #ff4e60";
          document.querySelector("#birthdate ~ .wrong-input").style.display = "block";
          document.querySelector("#birthdate ~ .wrong-input").innerText = "Vous devez entrer votre date de naissance au format indiqué.";
          birthdateVar = false;
          return false;
        }
      })

    // quantity input - number of tournament
    let quantityTournament = false;
    document
      .getElementById("quantity")
      .addEventListener("input", function(event) {
        if (event.target.value.length > 0 && /^(\d?[0-9]|[1-9]0)$/.test(event.target.value)) {
          document.querySelector("#quantity ~ .wrong-input").style.display = "none";
          document.getElementById("quantity").style.border = "0.8px solid #ccc";
          quantityTournament = true;
          return true;
        } else {
          document.getElementById("quantity").style.border = "2px solid #ff4e60";
          document.querySelector("#quantity ~ .wrong-input").style.display = "block";
          document.querySelector("#quantity ~ .wrong-input").innerText = "Vous devez saisir au moins un chiffre, y compris 0.";
          quantityTournament = false;
          return false;
        }
      })

    // location checkbox (radio)
    let locationVar = false;
    function checkLocation() {
      for (var i = 0; i < document.getElementsByName("location").length; i++) {
        if (document.getElementsByName("location")[i].checked) {
          locationVar = true;
          break;
        } else {
          locationVar = false;
        }
      }

      if (locationVar) {
        document.querySelector("#location6 ~ .wrong-input").style.display = "none";
      } else {
        document.querySelector("#location6 ~ .wrong-input").style.display = "block";
        document.querySelector("#location6 ~ .wrong-input").innerText = "Vous devez choisir une option.";
      }
    }

    // terms checkbox 
    let checkTerms = true;
    function checkTermsFunc() {
    if (document.getElementById("checkbox1").checked) {
      document.querySelector("#checkbox2 ~ .wrong-input").style.display = "none";
      checkTerms = true;
      return true;
    } else {
      document.querySelector("#checkbox2 ~ .wrong-input").style.display = "block";
      document.querySelector("#checkbox2 ~ .wrong-input").innerText = "Vous devez accepter les termes et conditions.";
      checkTerms = false;
      return false;
    }}

  
