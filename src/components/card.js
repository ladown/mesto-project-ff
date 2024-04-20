import modals from '../scripts/modals.js';
import { openModal } from './modal.js';

const modalImage = modals.find((modal) => modal.modalElement.classList.contains('popup_type_image'));

export const createCard = ({ cardData, deleteCard, likeCard } = {}) => {
    const cardTemplate = document.querySelector('#card-template');
    const cardElement = cardTemplate.content.querySelector('.places__item.card').cloneNode(true);
    const cardImageElement = cardElement.querySelector('.card__image');
    const cardTitleElement = cardElement.querySelector('.card__title');
    const cardButtonDeleteElement = cardElement.querySelector('.card__delete-button');
    const cardButtonLikeElement = cardElement.querySelector('.card__like-button');

    cardImageElement.setAttribute('src', cardData.link);
    cardImageElement.setAttribute('alt', cardData.name);

    cardTitleElement.textContent = cardData.name;

    cardButtonDeleteElement.addEventListener('click', deleteCard);
    cardButtonLikeElement.addEventListener('click', likeCard);
    cardImageElement.addEventListener('click', () => {
        const modalImageElement = modalImage.modalElement.querySelector('.popup__image');
        const modalCaptionElement = modalImage.modalElement.querySelector('.popup__caption');

        modalImageElement.setAttribute('src', cardData.link);
        modalImageElement.setAttribute('alt', cardData.name);

        modalCaptionElement.textContent = cardData.name;

        openModal({ modalElement: modalImage.modalElement });
    });

    return cardElement;
};

export const deleteCard = (event) => {
    const cardButtonDeleteElement = event.target;
    const cardElement = cardButtonDeleteElement.closest('.places__item.card');

    cardButtonDeleteElement.removeEventListener('click', deleteCard);
    cardElement.remove();
};

export const likeCard = ({ currentTarget }) => {
    currentTarget.classList.toggle('card__like-button_is-active');
};
