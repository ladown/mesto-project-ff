import { createCard, deleteCard, likeCard } from '../components/card.js';
import { closeModal, openModal } from '../components/modal.js';
import '../pages/index.css';
import initialCards from './cards.js';
import modals from './modals.js';

const modalImageElement = modals.cardImagePreview.modalElement.querySelector('.popup__image');
const modalCaptionElement = modals.cardImagePreview.modalElement.querySelector('.popup__caption');

const handleImageClick = ({ link, name }) => {
    modalImageElement.setAttribute('src', link);
    modalImageElement.setAttribute('alt', name);

    modalCaptionElement.textContent = name;

    openModal(modals.cardImagePreview.modalElement);
};

const listElement = document.querySelector('.places__list');

const renderCard = ({ cardData, method = 'append' }) => {
    const cardElement = createCard({ cardData, deleteCard, handleImageClick, likeCard, openModal });
    listElement[method](cardElement);
};

initialCards.forEach((cardData) => renderCard({ cardData }));

const formEditProfileElement = document.querySelector('.popup__form[name="edit-profile"]');
const profileNameInputElement = formEditProfileElement.querySelector('.popup__input[name="name"]');
const profileJobInputElement = formEditProfileElement.querySelector('.popup__input[name="description"]');
const profileNameElement = document.querySelector('.profile__title');
const profileJobElement = document.querySelector('.profile__description');

const handleFormEditProfileSubmit = (event) => {
    event.preventDefault();

    profileNameElement.textContent = profileNameInputElement.value;
    profileJobElement.textContent = profileJobInputElement.value;

    closeModal(modals.editProfile.modalElement);
};

formEditProfileElement.addEventListener('submit', handleFormEditProfileSubmit);

modals.editProfile.data = [
    [profileNameElement, profileNameInputElement],
    [profileJobElement, profileJobInputElement],
];

const formAddCardElement = document.querySelector('.popup__form[name="new-place"]');
const cardNameInputElement = formAddCardElement.querySelector('.popup__input[name="place-name"]');
const cardImageInputElement = formAddCardElement.querySelector('.popup__input[name="link"]');

const handleFormAddCardSubmit = (event) => {
    event.preventDefault();

    renderCard({ cardData: { link: cardImageInputElement.value, name: cardNameInputElement.value }, method: 'prepend' });

    closeModal(modals.addCard.modalElement);

    event.currentTarget.reset();
};

formAddCardElement.addEventListener('submit', handleFormAddCardSubmit);

Object.keys(modals).forEach((key) => {
    const modal = modals[key];

    if (modal.triggerElement) {
        modal.triggerElement.addEventListener('click', () => {
            if (modal.openCallback) {
                modal.openCallback(modal.data);
            }

            openModal(modal.modalElement);
        });
    }

    modal.modalElement.addEventListener('click', ({ target }) => {
        if (target.classList.contains('popup__close') || target.classList.contains('popup')) {
            closeModal(modal.modalElement);
        }
    });
});
