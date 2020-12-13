let callPopup = document.querySelector('.popup');
let editButton = document.querySelector('.profile__edit-button');
let closePopup = document.querySelector('.popup__close');
let popupName = document.querySelector('#popup-name');
let popupJob = document.querySelector('#popup-job');

editButton.addEventListener('click', function() {
  let nameUser = document.querySelector('.profile__name').textContent;
  let jobUser = document.querySelector('.profile__info').textContent;
  popupName.value = nameUser;
  popupJob.value = jobUser;
  callPopup.classList.remove('popup');
  callPopup.classList.add('popup_opened');
});

closePopup.addEventListener('click', function() {
  callPopup.classList.remove('popup_opened');
  callPopup.classList.add('popup');
});

let submitButton = document.querySelector('.popup__submit');

function handleFormSubmit (evt) {
  evt.preventDefault();

  let nameUser = document.querySelector('.profile__name');
  let jobUser = document.querySelector('.profile__info');
  nameUser.textContent = popupName.value;
  jobUser.textContent = popupJob.value;
  callPopup.classList.remove('popup_opened');
  callPopup.classList.add('popup');
};

submitButton.addEventListener('click', handleFormSubmit); //'submit' работает некорректно, evt.preventDefault() - не отменяет его действие

