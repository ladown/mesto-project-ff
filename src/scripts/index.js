import { createCard, deleteCard, likeCard } from '../components/card.js';
import { closeModal, closeModalEsc, openModal } from '../components/modal.js';
import '../pages/index.css';
import initialCards from './cards.js';
import modals from './modals.js';

const listElement = document.querySelector('.places__list');

const renderCard = ({ cardData, method = 'append' }) => {
    const cardElement = createCard({ cardData, deleteCard, likeCard, openModal });
    listElement[method](cardElement);
};

initialCards.forEach((cardData) => renderCard({ cardData, method: 'append' }));

const formEditProfileElement = document.querySelector('.popup__form[name="edit-profile"]');
const profileNameInputElement = formEditProfileElement.querySelector('.popup__input[name="name"]');
const profileJobInputElement = formEditProfileElement.querySelector('.popup__input[name="description"]');
const profileNameElement = document.querySelector('.profile__title');
const profileJobElement = document.querySelector('.profile__description');

const handleModalEditProfileOpen = () => {
    profileNameInputElement.value = profileNameElement.textContent;
    profileJobInputElement.value = profileJobElement.textContent;
};

handleModalEditProfileOpen();

const handleFormEditProfileSubmit = (event) => {
    event.preventDefault();

    profileNameElement.textContent = profileNameInputElement.value;
    profileJobElement.textContent = profileJobInputElement.value;

    closeModal({ modalElement: modals.editProfile.modalElement });
};

formEditProfileElement.addEventListener('submit', handleFormEditProfileSubmit);

const formAddCardElement = document.querySelector('.popup__form[name="new-place"]');
const cardNameInputElement = formAddCardElement.querySelector('.popup__input[name="place-name"]');
const cardImageInputElement = formAddCardElement.querySelector('.popup__input[name="link"]');

const handleFormAddCardSubmit = (event) => {
    event.preventDefault();

    renderCard({ cardData: { link: cardImageInputElement.value, name: cardNameInputElement.value }, method: 'prepend' });

    closeModal({ modalElement: modals.addCard.modalElement });

    event.currentTarget.reset();
};

formAddCardElement.addEventListener('submit', handleFormAddCardSubmit);

Object.keys(modals).forEach((key) => {
    const modal = modals[key];

    if (modal.triggerElement) {
        modal.triggerElement.addEventListener('click', () => {
            if (key === 'editProfile') {
                handleModalEditProfileOpen();
            }

            openModal({ closeModalEsc, modalElement: modal.modalElement });
        });
    }

    modal.modalElement.addEventListener('click', ({ target }) => {
        if (target.classList.contains('popup__close') || target.classList.contains('popup')) {
            closeModal({ closeModalEsc, modalElement: modal.modalElement });
        }
    });
});
