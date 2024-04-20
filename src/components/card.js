const cardTemplate = document.querySelector('#card-template');

export const createCard = ({ cardData, deleteCard, handleImageClick, likeCard } = {}) => {
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
        handleImageClick(cardData);
    });

    return cardElement;
};

export const deleteCard = (event) => {
    const cardButtonDeleteElement = event.target;
    const cardElement = cardButtonDeleteElement.closest('.places__item.card');

    cardElement.remove();
};

export const likeCard = ({ currentTarget }) => {
    currentTarget.classList.toggle('card__like-button_is-active');
};
