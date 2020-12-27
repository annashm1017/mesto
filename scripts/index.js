const card = document.querySelector('.card');
const popupPhoto = document.querySelector('#photo');
const imagePopup = popupPhoto.querySelector('.popup__image');
const titlePopup = popupPhoto.querySelector('.popup__description');

//Popup редактирования профиля
const popupProfile = document.querySelector('#popup-profile');
const editingButton = document.querySelector('.profile__edit-button');
const closingPopupProfile = popupProfile.querySelector('.popup__close');
const closingAcrossOverlay = document.querySelectorAll('.popup');
const popupName = document.querySelector('#popup-name');
const popupJob = document.querySelector('#popup-job');
const nameUser = document.querySelector('.profile__name');
const jobUser = document.querySelector('.profile__info');
const submitingFormProfile = popupProfile.querySelector('.popup__container');

//Popup добавления новой карточки
const popupPlace = document.querySelector('#popup-place');
const form = document.forms.newPlace;
const additionButtonCard = document.querySelector('.profile__add-button');
const closingPopupPlace = popupPlace.querySelector('.popup__close');
const popupTitle = document.querySelector('#popup-title');
const popupLink = document.querySelector('#popup-link');
const submitingFormPlace = popupPlace.querySelector('.popup__container');

const cardTemplate = document.querySelector('template').content;

function getCardElement(cardData) {
  const template = cardTemplate.cloneNode(true);

  const imageItem = template.querySelector('.card__image');
    imageItem.setAttribute("alt", cardData.name);
    imageItem.setAttribute("src", cardData.link);

  const buttonItem = template.querySelector('.card__trash');

  const titleItem = template.querySelector('.card__name');
    titleItem.textContent = cardData.name;

  const likeItem = template.querySelector('.card__like');

  likeItem.addEventListener('click', handleLikeIcon);
  buttonItem.addEventListener('click', handleDeleteCard);
  imageItem.addEventListener('click', handlePreviewPicture);

  return template;
}

function handleLikeIcon(evt) {
  evt.target.classList.toggle('card__like_active');
}

function handleDeleteCard(evt) {
  evt.target.parentNode.remove();
}

function handlePreviewPicture(evt) {
  openPopup(popupPhoto);
  imagePopup.src = evt.target.getAttribute("src");
  imagePopup.alt = evt.target.getAttribute("alt");
  titlePopup.textContent = evt.target.getAttribute("alt");
}
  
function addCard(container, cardElement, direction) {
  if (direction) {
    container.append(cardElement);
  } else {
    container.prepend(cardElement);
  }
};

initialCards.forEach(function (item) {
  const createCard = getCardElement(item);
  addCard(card, createCard, true);
});

function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', handleEscape);
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', handleEscape);
}

//Popup редактирования профиля
function editButtonClick() {
  popupName.value = nameUser.textContent;
  popupJob.value = jobUser.textContent;
  openPopup(popupProfile);
}

editingButton.addEventListener('click', editButtonClick);

closingPopupProfile.addEventListener('click', function() {
  closePopup(popupProfile)
});

popupPhoto.addEventListener('click', function() {
  closePopup(popupPhoto);
});

function handleFormSubmitProfile (evt) {
  evt.preventDefault();

  nameUser.textContent = popupName.value;
  jobUser.textContent = popupJob.value;
  closePopup(popupProfile);
}

submitingFormProfile.addEventListener('submit', handleFormSubmitProfile);

function addButtonCardClick() {
  openPopup(popupPlace);
}

additionButtonCard.addEventListener('click', addButtonCardClick);

closingPopupPlace.addEventListener('click', function() {
  closePopup(popupPlace);
});

function handleFormSubmitPlace (evt) {
  evt.preventDefault();

  const item = {};
  item.name = popupTitle.value;
  item.link = popupLink.value;

  const createdCard = getCardElement(item);
  addCard(card, createdCard, false);
  closePopup(popupPlace);

  newPlace.reset();
}

submitingFormPlace.addEventListener('submit', handleFormSubmitPlace);

const popups = [];
popups.push(popupPlace);
popups.push(popupProfile);
popups.push(popupPhoto);

function closingPopups(){
  popups.forEach(function (elementArray){
    if (elementArray.classList.contains('popup_opened')) {
      closePopup(elementArray);
    }
  });
}

closingAcrossOverlay.forEach(function(element){
  element.addEventListener('click', function(evt){
    if (evt.target.length === undefined){
      if (!evt.target.classList.value.includes("info") && !evt.target.classList.value.includes("title") ){
        closingPopups();
      }
    }
  });
});

function handleEscape(evt){
  if (evt.key === 'Escape') {
   closingPopups();
  }
}

