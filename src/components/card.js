import modals from '../scripts/modals.js';
import { deleteCardLike, handleRequestCatch, putCardLike } from './api.js';
import { openModal } from './modal.js';

const cardTemplate = document.querySelector('#card-template');
const cardLikeActiveModifier = 'card__like-button_is-active';

export const createCard = ({ cardData, handleImageClick, likeCard, PERSONAL_USER_ID } = {}) => {
    const cardId = cardData._id;

    const cardElement = cardTemplate.content.querySelector('.places__item.card').cloneNode(true);
    const cardImageElement = cardElement.querySelector('.card__image');
    const cardTitleElement = cardElement.querySelector('.card__title');
    const cardButtonDeleteElement = cardElement.querySelector('.card__delete-button');
    const cardButtonLikeElement = cardElement.querySelector('.card__like-button');
    const cardLikeCountElement = cardElement.querySelector('.card__like-count');

    cardImageElement.setAttribute('src', cardData.link);
    cardImageElement.setAttribute('alt', cardData.name);

    cardTitleElement.textContent = cardData.name;

    cardButtonLikeElement.addEventListener('click', () => {
        likeCard({ cardButtonLikeElement, cardId, cardLikeCountElement });
    });
    cardImageElement.addEventListener('click', () => {
        handleImageClick(cardData);
    });

    if (cardData.likes) {
        cardLikeCountElement.textContent = cardData.likes.length;
    }

    if (cardData.likes?.some((person) => person._id === PERSONAL_USER_ID)) {
        cardButtonLikeElement.classList.add(cardLikeActiveModifier);
    }

    if (cardData.owner._id === PERSONAL_USER_ID) {
        cardElement.classList.add('card_personal');

        cardElement.setAttribute('data-card-id', cardId);

        cardButtonDeleteElement.addEventListener('click', () => {
            modals.cardDeleteConfirm.modalInputCardId.value = cardId;

            openModal(modals.cardDeleteConfirm.modalElement);
        });
    }

    return cardElement;
};

export const deleteCard = (event) => {
    const cardButtonDeleteElement = event.target;
    const cardElement = cardButtonDeleteElement.closest('.places__item.card');

    cardElement.remove();
};

export const likeCard = ({ cardButtonLikeElement, cardId, cardLikeCountElement }) => {
    (cardButtonLikeElement.classList.contains(cardLikeActiveModifier) ? deleteCardLike(cardId) : putCardLike(cardId))
        .then((data) => {
            cardLikeCountElement.textContent = data.likes?.length;

            if (cardButtonLikeElement.classList.contains(cardLikeActiveModifier)) {
                cardButtonLikeElement.classList.remove(cardLikeActiveModifier);
            } else {
                cardButtonLikeElement.classList.add(cardLikeActiveModifier);
            }
        })
        .catch(handleRequestCatch);
};
