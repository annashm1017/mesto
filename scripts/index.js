//Добавление карточек через js + кнопка лайк + удаление карточки + открытие попапа с картинкой
let card = document.querySelector('.card');
let callPopupPhoto = document.querySelector('#photo');
let callImagePopup = callPopupPhoto.querySelector('.popup__image');
let callTitlePopup = callPopupPhoto.querySelector('.popup__description');

//Popup редактирования профиля
let callPopupProfile = document.querySelector('#popup-profile');
let editButton = document.querySelector('.profile__edit-button');
let closePopupProfile = callPopupProfile.querySelector('.popup__close');
let popupName = document.querySelector('#popup-name');
let popupJob = document.querySelector('#popup-job');
let nameUser = document.querySelector('.profile__name');
let jobUser = document.querySelector('.profile__info');
let submitFormProfile = callPopupProfile.querySelector('.popup__container');

//Popup добавления новой карточки
let callPopupPlace = document.querySelector('#popup-place');
let addButtonCard = document.querySelector('.profile__add-button');
let closePopupPlace = callPopupPlace.querySelector('.popup__close');
let popupTitle = document.querySelector('#popup-title');
let popupLink = document.querySelector('#popup-link');
let submitFormPlace = callPopupPlace.querySelector('.popup__container');

//Добавление карточек через js + кнопка лайк + удаление карточки + открытие попапа с картинкой
function cards (name, link, direction) {
  const listItem = document.createElement('li');
    listItem.classList.add('card__one');

  const imageItem = document.createElement('img');
    imageItem.classList.add('card__image');
    imageItem.setAttribute("alt", name);
    imageItem.setAttribute("src", link);

  const buttonItem = document.createElement('button');
    buttonItem.classList.add('card__trash');
    buttonItem.setAttribute("type", "button");

  const divItem = document.createElement('div');
    divItem.classList.add('card__text');

  const titleItem = document.createElement('h2');
    titleItem.classList.add('card__name');
    titleItem.textContent = name;

  const likeItem = document.createElement('button');
    likeItem.classList.add('card__like');
    likeItem.setAttribute("type", "button");

  listItem.appendChild(imageItem);
  listItem.appendChild(buttonItem);
  listItem.appendChild(divItem);
    divItem.appendChild(titleItem);
    divItem.appendChild(likeItem);
  card.append(listItem);

  if (direction === true) {
    card.append(listItem);
  } else {
    card.prepend(listItem);
  };

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
};

initialCards.forEach(function (item) {
  cards(item.name, item.link, true);
});

//Popup редактирования профиля
function editButtonClick() {
  popupName.value = nameUser.textContent;
  popupJob.value = jobUser.textContent;
  callPopupProfile.classList.add('popup_opened');
}

editButton.addEventListener('click', editButtonClick);

function closePopupClick() {
  callPopupProfile.classList.remove('popup_opened') | callPopupPlace.classList.remove('popup_opened');
}

closePopupProfile.addEventListener('click', closePopupClick);

function closePhotoClick() {
  callPopupPhoto.classList.remove('popup_opened');
}

callPopupPhoto.addEventListener('click', closePhotoClick);

function handleFormSubmitProfile (evt) {
  evt.preventDefault();

  nameUser.textContent = popupName.value;
  jobUser.textContent = popupJob.value;
  closePopupClick();
}

submitFormProfile.addEventListener('submit', handleFormSubmitProfile);

//Popup добавления новой карточки
function addButtonCardClick() {
  callPopupPlace.classList.add('popup_opened');
}

addButtonCard.addEventListener('click', addButtonCardClick);

closePopupPlace.addEventListener('click', closePopupClick);

function handleFormSubmitPlace (evt) {
  evt.preventDefault();

  cards(popupTitle.value, popupLink.value, false);
  closePopupClick();
}

submitFormPlace.addEventListener('submit', handleFormSubmitPlace);