import {
    deleteCardItem,
    getCardsData,
    getUserData,
    handleRequestCatch,
    patchUserAvatar,
    patchUserData,
    postCard,
} from '../components/api.js';
import { createCard, deleteCallback, deleteCard, likeCard } from '../components/card.js';
import { closeModal, openModal } from '../components/modal.js';
import { profileElements, setProfileContent } from '../components/profile.js';
import { clearValidation, enableValidation, isValidImageUrl } from '../components/validation.js';
import '../pages/index.css';
import modals from './modals.js';
import { getObjectLength } from './utils.js';

let PERSONAL_USER_ID;

const isLoadingModifier = 'is-loading';

const listElement = document.querySelector('.places__list');

const modalImageElement = modals.cardImagePreview.modalElement.querySelector('.popup__image');
const modalCaptionElement = modals.cardImagePreview.modalElement.querySelector('.popup__caption');

const formEditProfileElement = document.querySelector('.popup__form[name="edit-profile"]');
const profileNameInputElement = formEditProfileElement.querySelector('.popup__input[name="name"]');
const profileJobInputElement = formEditProfileElement.querySelector('.popup__input[name="description"]');

const formAddCardElement = document.querySelector('.popup__form[name="new-place"]');
const cardNameInputElement = formAddCardElement.querySelector('.popup__input[name="place-name"]');
const cardImageInputElement = formAddCardElement.querySelector('.popup__input[name="link"]');

const formCardDeleteConfirmElement = document.querySelector('.popup__form[name="card-delete-confirm"]');

const formUpdateAvatarElement = document.querySelector('.popup__form[name="update-avatar"]');
const updateAvatarInputElement = formUpdateAvatarElement.querySelector('.popup__input[name="avatar-link"]');

const handleImageClick = ({ link, name }) => {
    modalImageElement.setAttribute('src', link);
    modalImageElement.setAttribute('alt', name);

    modalCaptionElement.textContent = name;

    openModal(modals.cardImagePreview.modalElement);
};

const renderCard = ({ cardData, method = 'append' }) => {
    const cardElement = createCard({ cardData, deleteCallback, handleImageClick, likeCard, openModal, PERSONAL_USER_ID });
    listElement[method](cardElement);
};

const handleFormEditProfileSubmit = (event) => {
    event.preventDefault();

    event.submitter.classList.add(isLoadingModifier);

    patchUserData({ about: profileJobInputElement.value, name: profileNameInputElement.value })
        .then((userData) => {
            setProfileContent(userData);

            event.submitter.classList.remove(isLoadingModifier);

            closeModal(modals.editProfile.modalElement);
        })
        .catch(handleRequestCatch);
};

formEditProfileElement.addEventListener('submit', handleFormEditProfileSubmit);

modals.editProfile.data = [
    [profileElements.name, profileNameInputElement],
    [profileElements.about, profileJobInputElement],
];

const handleFormAddCardSubmit = (event) => {
    event.preventDefault();

    event.submitter.classList.add(isLoadingModifier);

    isValidImageUrl({ formElement: formAddCardElement, inputElement: cardImageInputElement }).then((isValidImage) => {
        if (isValidImage) {
            postCard({ link: cardImageInputElement.value, name: cardNameInputElement.value })
                .then((cardData) => {
                    renderCard({ cardData, method: 'prepend' });

                    event.submitter.classList.remove(isLoadingModifier);

                    closeModal(modals.addCard.modalElement);

                    formAddCardElement.reset();

                    clearValidation(formAddCardElement);
                })
                .catch(handleRequestCatch);
        }
    });
};

formAddCardElement.addEventListener('submit', handleFormAddCardSubmit);

const handleFormCardDeleteConfirmSubmit = (event) => {
    event.preventDefault();

    event.submitter.classList.add(isLoadingModifier);

    deleteCardItem(modals.cardDeleteConfirm.modalInputCardId.value)
        .then(({ message } = {}) => {
            if (message === 'Пост удалён') {
                event.submitter.classList.remove(isLoadingModifier);

                closeModal(modals.cardDeleteConfirm.modalElement);

                deleteCard({
                    target: document.querySelector(`.card[data-card-id="${modals.cardDeleteConfirm.modalInputCardId.value}"]`),
                });

                modals.cardDeleteConfirm.modalInputCardId.value = '';
            }
        })
        .catch(handleRequestCatch);
};

formCardDeleteConfirmElement.addEventListener('submit', handleFormCardDeleteConfirmSubmit);

const handleFormUpdateAvatarSubmit = (event) => {
    event.preventDefault();

    event.submitter.classList.add(isLoadingModifier);

    isValidImageUrl({ formElement: formUpdateAvatarElement, inputElement: updateAvatarInputElement }).then((isValidImage) => {
        if (isValidImage) {
            patchUserAvatar({ avatar: updateAvatarInputElement.value })
                .then((data) => {
                    event.submitter.classList.remove(isLoadingModifier);

                    setProfileContent({ avatar: data.avatar });

                    closeModal(modals.updateAvatar.modalElement);

                    formUpdateAvatarElement.reset();

                    clearValidation(formUpdateAvatarElement);
                })
                .catch(handleRequestCatch);
        }
    });
};

formUpdateAvatarElement.addEventListener('submit', handleFormUpdateAvatarSubmit);

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

enableValidation();

Promise.all([getUserData(), getCardsData()])
    .then(([userData, cardsData]) => {
        if (getObjectLength(userData)) {
            if (userData._id) {
                PERSONAL_USER_ID = userData._id;
            }
            setProfileContent(userData);
        }

        if (cardsData?.length) {
            cardsData.forEach((cardData) => renderCard({ cardData }));
        }
    })
    .catch(handleRequestCatch);
