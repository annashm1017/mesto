//Добавление карточек через js
let card = document.querySelector('.card');

function cards (name, link) {
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
};

initialCards.forEach(function (item) {
  cards(
    item.name, item.link
  );
});

//Popup редактирования профиля
let callPopupProfile = document.querySelector('#popup-profile');
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
  callPopupProfile.classList.add('popup_opened');
}

editButton.addEventListener('click', editButtonClick);

function closePopupClick() {
  callPopupProfile.classList.remove('popup_opened');
}

closePopup.addEventListener('click', closePopupClick);
//
function handleFormSubmit (evt) {
  evt.preventDefault();

  nameUser.textContent = popupName.value;
  jobUser.textContent = popupJob.value;
  closePopupClick();
}

submitForm.addEventListener('submit', handleFormSubmit);

//Popup добавления новой карточки
let callPopupPlace = document.querySelector('#popup-place');
let addButtonCard = document.querySelector('.profile__add-button');
let popupTitle = document.querySelector('#popup-title');
let popupLink = document.querySelector('#popup-link');
let titlePlace = document.querySelector('.card__name');
let linkPlace = document.querySelector('.card__image');

function addButtonCardClick() {
  popupTitle.value = titlePlace.textContent;
  popupLink.value = linkPlace.href;
  callPopupPlace.classList.add('.popup_opened');
}

addButtonCard.addEventListener('click', addButtonCardClick);


