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
    // adding attributes to all .formData classes
    for (let dataError of formData){
      dataError.setAttribute("data-error", "");
      dataError.setAttribute("data-error-visible", "false");
    }

  // inputs validation
    // firstname input
    let firstNameVar = false;
    document
      .getElementById("firstName")
      .addEventListener("input", function(event) {
        if (event.target.value.length > 0 && /^(?=.{2,30}$)[A-z]+(?:['-.\s][A-z]+)*$/.test(event.target.value)) {
          formData[0].setAttribute("data-error-visible", "false");
          formData[0].removeAttribute("data-error");
          firstNameVar = true;
          return true;
        } else {
          formData[0].setAttribute("data-error-visible", "true");
          formData[0].setAttribute("data-error", "Veuillez entrer 2 caractères ou plus pour le champ du nom au format indiqué.");
          firstNameVar = false;
          return false;
        }
      })

    // lastname input
    let lastNameVar = false;
    document
      .getElementById("lastName")
      .addEventListener("input", function(event) {
        if (event.target.value.length > 0 && /^(?=.{2,50}$)[A-z]+(?:['-.\s][A-z]+)*$/.test(event.target.value)) {
          formData[1].setAttribute("data-error-visible", "false");
          formData[1].removeAttribute("data-error");
          lastNameVar = true;
          return true;
        } else {
          formData[1].setAttribute("data-error-visible", "true");
          formData[1].setAttribute("data-error", "Veuillez entrer 2 caractères ou plus pour le champ du nom au format indiqué.");
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
          formData[2].setAttribute("data-error-visible", "false");
          formData[2].removeAttribute("data-error");
          emailVar = true;
          return true;
        } else {
          formData[2].setAttribute("data-error-visible", "true");
          formData[2].setAttribute("data-error", "Vous devez entrer une adresse e-mail valide.");
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
          formData[3].setAttribute("data-error-visible", "false");
          formData[3].removeAttribute("data-error");
          birthdateVar = true;
          return true;
        } else {
          formData[3].setAttribute("data-error-visible", "true");
          formData[3].setAttribute("data-error", "Vous devez entrer votre date de naissance au format indiqué.");
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
          formData[4].setAttribute("data-error-visible", "false");
          formData[4].removeAttribute("data-error");
          quantityTournament = true;
          return true;
        } else {
          formData[4].setAttribute("data-error-visible", "true");
          formData[4].setAttribute("data-error", "Vous devez saisir au moins un chiffre, y compris 0.");
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
        formData[5].setAttribute("data-error-visible", "false");
        formData[5].removeAttribute("data-error");
      } else {
        formData[5].setAttribute("data-error-visible", "true");
        formData[5].setAttribute("data-error", "Vous devez choisir une option.");
      }
    }

    // terms checkbox 
    let checkTerms = true;
    function checkTermsFunc() {
    if (document.getElementById("checkbox1").checked) {
      formData[6].setAttribute("data-error-visible", "false");
      formData[6].removeAttribute("data-error");
      checkTerms = true;
      return true;
    } else {
      formData[6].setAttribute("data-error-visible", "true");
      formData[6].setAttribute("data-error", "Vous devez accepter les termes et conditions.");
      checkTerms = false;
      return false;
    }}

  // check no empty input
  const inputs = document.querySelectorAll(".text-control");
  function checkEmptyInput() {
    for (const textField of inputs) {
      if (textField.value === "") {
        textField.setAttribute("data-error-visible", "true");
      } else {
        textField.setAttribute("data-error-visible", "false");
      }
    }
  }

  // submit form
  function validateForm() {
    checkEmptyInput();
    checkLocation();
    if (firstNameVar && lastNameVar && emailVar && birthdateVar && quantityTournament && locationVar && checkTerms) {
      document.querySelector(".bg-form-send").style.visibility = "visible";
      return true;
    } else {
      return false;
    }
  }
