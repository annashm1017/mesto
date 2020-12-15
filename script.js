let callPopup = document.querySelector('.popup');
let editButton = document.querySelector('.profile__edit-button');
let closePopup = document.querySelector('.popup__close');
let popupName = document.querySelector('#popup-name');
let popupJob = document.querySelector('#popup-job');
let nameUser = document.querySelector('.profile__name');
let jobUser = document.querySelector('.profile__info');
let submitForm = document.querySelector('.popup__container');

function editButtonClick() {
  popupName.value = nameUser.textContent;
  popupJob.value = jobUser.textContent;
  callPopup.classList.add('popup_opened');
}

editButton.addEventListener('click', editButtonClick);

function closePopupClick() {
  callPopup.classList.remove('popup_opened');
}

closePopup.addEventListener('click', closePopupClick);

function handleFormSubmit (evt) {
  evt.preventDefault();

  nameUser.textContent = popupName.value;
  jobUser.textContent = popupJob.value;
  closePopupClick();
}

submitForm.addEventListener('submit', handleFormSubmit);

