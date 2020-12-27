const config = {
  formSelector: 'form.popup__container',
  inputSelector: '.popup__info',
  submitButtonSelector: '.popup__submit',
  inactiveButtonClass: 'popup__submit_inactive',
  inputErrorClass: 'popup__info_type_error',
  errorClass: 'popup__info-error_active'
};

const showInputError = function(formSelector, inputSelector, errorMessage, config) {
    const errorElement = formSelector.querySelector(`.${inputSelector.id}-error`);
    inputSelector.classList.add(config.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(config.errorClass);
  };
  
  const showInputWithoutError = function(formSelector, inputSelector, config) {
    const errorElement = formSelector.querySelector(`.${inputSelector.id}-error`);
    inputSelector.classList.remove(config.inputErrorClass);
    errorElement.classList.remove(config.errorClass);
    errorElement.textContent = '';
  };
  
  const isInputValid = function(formSelector, inputSelector, config) {
    if (!inputSelector.validity.valid) {
      showInputError(formSelector, inputSelector, inputSelector.validationMessage);
    } else {
      showInputWithoutError(formSelector, inputSelector);
    }
  };
  
  const setEventListeners = function(formSelector, config) {
    const inputList = Array.from(formSelector.querySelectorAll(config.inputSelector));
    const buttonElement = formSelector.querySelector(config.submitButtonSelector);
  
    switchButton(inputList, buttonElement);
  
    inputList.forEach(function(inputSelector) {
      inputSelector.addEventListener('input', function() {
        isInputValid(formSelector, inputSelector);
  
        switchButton(inputList, buttonElement);
      });
    });
  }; 
  
  function enableValidation (config) {
    const formList = Array.from(document.querySelectorAll(config.formSelector));
  
    formList.forEach(function(formSelector) {
        formSelector.addEventListener('submit', function(evt) {
        evt.preventDefault();
      });
  
      setEventListeners(formSelector, config);
    });
  };
  
  function isInvalidInput(inputList) {
    return inputList.some(function(inputSelector) {
      return !inputSelector.validity.valid;
    })
  };
  
  function switchButton (inputList, buttonElement, config) {
    if (isInvalidInput(inputList)) {
      buttonElement.classList.add(config.inactiveButtonClass);
      buttonElement.disabled = true;
    } else {
      buttonElement.classList.remove(config.inactiveButtonClass);
      buttonElement.disabled = false;
    }
  };

  enableValidation(config);