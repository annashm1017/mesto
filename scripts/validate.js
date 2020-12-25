const inputError = function(formSelector, inputSelector, errorMessage) {
    const errorElement = formSelector.querySelector(`.${inputSelector.id}-error`);
    inputSelector.classList.add('popup__info_type_error');
    errorElement.textContent = errorMessage;
    errorElement.classList.add('popup__info-error_active');
  };
  
  const inputWithoutError = function(formSelector, inputSelector) {
    const errorElement = formSelector.querySelector(`.${inputSelector.id}-error`);
    inputSelector.classList.remove('popup__info_type_error');
    errorElement.classList.remove('popup__info-error_active');
    errorElement.textContent = '';
  };
  
  const inputValid = function(formSelector, inputSelector) {
    if (!inputSelector.validity.valid) {
      inputError(formSelector, inputSelector, inputSelector.validationMessage);
    } else {
      inputWithoutError(formSelector, inputSelector);
    }
  };
  
  const setEventListeners = function(formSelector) {
    const inputList = Array.from(formSelector.querySelectorAll('.popup__info'));
    const buttonElement = formSelector.querySelector('.popup__submit');
  
    switchButton(inputList, buttonElement);
  
    inputList.forEach(function(inputSelector) {
      inputSelector.addEventListener('input', function() {
        inputValid(formSelector, inputSelector);
  
        switchButton(inputList, buttonElement);
      });
    });
  }; 
  
  function enableValidation () {
    const formList = Array.from(document.querySelectorAll('form.popup__container'));
  
    formList.forEach(function(formSelector) {
        formSelector.addEventListener('submit', function(evt) {
        evt.preventDefault();
      });
  
      setEventListeners(formSelector);
    });
  };
  
  enableValidation(); 
  
  function invalidInput(inputList) {
    return inputList.some(function(inputSelector) {
      return !inputSelector.validity.valid;
    })
  };
  
  function switchButton (inputList, buttonElement) {
    if (invalidInput(inputList)) {
      buttonElement.classList.add('popup__submit_inactive');
      buttonElement.disabled = true;
    } else {
      buttonElement.classList.remove('popup__submit_inactive');
      buttonElement.disabled = false;
    }
  };