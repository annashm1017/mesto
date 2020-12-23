const card = document.querySelector('.card');
const callPopupPhoto = document.querySelector('#photo');
const callImagePopup = callPopupPhoto.querySelector('.popup__image');
const callTitlePopup = callPopupPhoto.querySelector('.popup__description');

//Popup редактирования профиля
const callPopupProfile = document.querySelector('#popup-profile');
const editButton = document.querySelector('.profile__edit-button');
const closePopupProfile = callPopupProfile.querySelector('.popup__close');
const popupName = document.querySelector('#popup-name');
const popupJob = document.querySelector('#popup-job');
const nameUser = document.querySelector('.profile__name');
const jobUser = document.querySelector('.profile__info');
const submitFormProfile = callPopupProfile.querySelector('.popup__container');

//Popup добавления новой карточки
const callPopupPlace = document.querySelector('#popup-place');
const addButtonCard = document.querySelector('.profile__add-button');
const closePopupPlace = callPopupPlace.querySelector('.popup__close');
const popupTitle = document.querySelector('#popup-title');
const popupLink = document.querySelector('#popup-link');
const submitFormPlace = callPopupPlace.querySelector('.popup__container');

const template1 = document.querySelector('template').content;

function createCard(cardData) {
  
  let temp = template1.cloneNode(true);

  const imageItem = temp.querySelector('.card__image');
    imageItem.setAttribute("alt", cardData.name);
    imageItem.setAttribute("src", cardData.link);

  const buttonItem = temp.querySelector('.card__trash');

  const titleItem = temp.querySelector('.card__name');
    titleItem.textContent = cardData.name;

   const likeItem = temp.querySelector('.card__like');

  likeItem.addEventListener('click', function (evt) {
    evt.target.classList.toggle('card__like_active');
  });

  buttonItem.addEventListener('click', function (evt) {
    evt.target.parentNode.remove();
  });


  imageItem.addEventListener('click', function (evt) {
    callPopupPhoto.classList.add('popup_opened');
    callImagePopup.setAttribute("src", evt.target.getAttribute("src"));
    callImagePopup.setAttribute("alt", evt.target.getAttribute("alt"));
    callTitlePopup.textContent = evt.target.getAttribute("alt");
  });

  return temp;
  };
  
function addCard(container, cardElement, direction) {
  if (direction === true) {
    container.append(cardElement);
  } else {
    container.prepend(cardElement);
  }
};

initialCards.forEach(function (item) {
  let createdCard = createCard(item);
  addCard(card, createdCard, true);
});

function openPopup(popup) {
  popup.classList.add('popup_opened');
}
function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

//Popup редактирования профиля
function editButtonClick() {
  popupName.value = nameUser.textContent;
  popupJob.value = jobUser.textContent;
  openPopup(callPopupProfile);
}

editButton.addEventListener('click', editButtonClick);

function closePopupClick() {
  closePopup(callPopupProfile) | closePopup(callPopupPlace);
}

closePopupProfile.addEventListener('click', closePopupClick);

function closePhotoClick() {
  closePopup(callPopupPhoto);
}

callPopupPhoto.addEventListener('click', closePhotoClick);

function handleFormSubmitProfile (evt) {
  evt.preventDefault();

  nameUser.textContent = popupName.value;
  jobUser.textContent = popupJob.value;
  closePopupClick();
}

submitFormProfile.addEventListener('submit', handleFormSubmitProfile);

function addButtonCardClick() {
  openPopup(callPopupPlace);
}

addButtonCard.addEventListener('click', addButtonCardClick);

closePopupPlace.addEventListener('click', closePopupClick);

function handleFormSubmitPlace (evt) {
  evt.preventDefault();

  const item = [];
  item.name = popupTitle.value;
  item.link = popupLink.value;

  const createdCard = createCard(item);
  addCard(card, createdCard, false);
  closePopupClick();

  popupTitle.value = '';
  popupLink.value = '';
}

submitFormPlace.addEventListener('submit', handleFormSubmitPlace);