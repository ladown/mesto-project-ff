import { createCard, deleteCard } from '../components/card.js';
import { closeModal, closeModalEsc, openModal } from '../components/modal.js';
import '../pages/index.css';
import initialCards from './cards.js';

const listElement = document.querySelector('.places__list');

initialCards.forEach((cardData) => listElement.append(createCard({ cardData, deleteCard })));

const modals = [
    {
        modalElement: document.querySelector('.popup_type_new-card'),
        triggerElement: document.querySelector('.profile__add-button'),
    },
    {
        modalElement: document.querySelector('.popup_type_edit'),
        triggerElement: document.querySelector('.profile__edit-button'),
    },
    {
        modalElement: document.querySelector('.popup_type_image'),
        triggerElement: document.querySelectorAll('.card__image'),
    },
];

modals.forEach((modal) => {
    if (!(modal.triggerElement instanceof NodeList)) {
        modal.triggerElement = [modal.triggerElement];
    }

    modal.triggerElement.forEach((buttonElement) => {
        buttonElement.addEventListener('click', () => {
            openModal({ closeModalEsc, modalElement: modal.modalElement });
        });
    });

    modal.modalElement.addEventListener('click', ({ target }) => {
        if (target.classList.contains('popup__close') || target.classList.contains('popup')) {
            closeModal({ closeModalEsc, modalElement: modal.modalElement });
        }
    });
});
