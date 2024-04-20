export const createCard = ({ cardData, deleteCard } = {}) => {
    const cardTemplate = document.querySelector('#card-template');
    const cardElement = cardTemplate.content.querySelector('.places__item.card').cloneNode(true);
    const cardImageElement = cardElement.querySelector('.card__image');
    const cardTitleElement = cardElement.querySelector('.card__title');
    const cardButtonDeleteElement = cardElement.querySelector('.card__delete-button');

    cardImageElement.setAttribute('src', cardData.link);
    cardImageElement.setAttribute('alt', cardData.name);

    cardTitleElement.textContent = cardData.name;

    cardButtonDeleteElement.addEventListener('click', deleteCard);

    return cardElement;
};

export const deleteCard = (event) => {
    const cardButtonDeleteElement = event.target;
    const cardElement = cardButtonDeleteElement.closest('.places__item.card');

    cardButtonDeleteElement.removeEventListener('click', deleteCard);
    cardElement.remove();
};
