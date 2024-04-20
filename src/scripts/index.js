import { createCard, deleteCard, likeCard } from '../components/card.js';
import { closeModal, closeModalEsc, openModal } from '../components/modal.js';
import '../pages/index.css';
import initialCards from './cards.js';
import modals from './modals.js';

const listElement = document.querySelector('.places__list');

initialCards.forEach((cardData) => listElement.append(createCard({ cardData, deleteCard, likeCard, openModal })));

modals.forEach((modal) => {
    if (modal.triggerElement) {
        modal.triggerElement.addEventListener('click', () => {
            openModal({ closeModalEsc, modalElement: modal.modalElement });
        });
    }

    modal.modalElement.addEventListener('click', ({ target }) => {
        if (target.classList.contains('popup__close') || target.classList.contains('popup')) {
            closeModal({ closeModalEsc, modalElement: modal.modalElement });
        }
    });
});

const formEditProfileElement = document.querySelector('.popup__form[name="edit-profile"]');
const profileNameInputElement = formEditProfileElement.querySelector('.popup__input[name="name"]');
const profileJobInputElement = formEditProfileElement.querySelector('.popup__input[name="description"]');
const profileNameElement = document.querySelector('.profile__title');
const profileJobElement = document.querySelector('.profile__description');

profileNameInputElement.value = profileNameElement.textContent;
profileJobInputElement.value = profileJobElement.textContent;

const handleFormEditProfileSubmit = (event) => {
    event.preventDefault();

    const modalElement = event.target.closest('.popup');

    profileNameElement.textContent = profileNameInputElement.value;
    profileJobElement.textContent = profileJobInputElement.value;

    closeModal({ modalElement });
};

formEditProfileElement.addEventListener('submit', handleFormEditProfileSubmit);

const formAddCardElement = document.querySelector('.popup__form[name="new-place"]');
const cardNameInputElement = formAddCardElement.querySelector('.popup__input[name="place-name"]');
const cardImageInputElement = formAddCardElement.querySelector('.popup__input[name="link"]');

const handleFormAddCardSubmit = (event) => {
    event.preventDefault();

    const modalElement = event.target.closest('.popup');

    listElement.prepend(
        createCard({ cardData: { link: cardImageInputElement.value, name: cardNameInputElement.value }, deleteCard }),
    );

    closeModal({ modalElement });

    event.currentTarget.reset();
};

formAddCardElement.addEventListener('submit', handleFormAddCardSubmit);
