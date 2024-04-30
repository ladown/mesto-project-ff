import { clearValidation } from '../components/validation.js';

const handleModalEditProfileOpen = (data) => {
    data.forEach(([textElement, inputElement]) => {
        inputElement.value = textElement.textContent;
    });

    clearValidation(document.forms['edit-profile']);
};

const handleModalUpdateAvatarOpen = () => {
    document.forms['update-avatar'].elements['avatar-link'].value = '';

    clearValidation(document.forms['update-avatar']);
};

export default {
    addCard: {
        modalElement: document.querySelector('.popup_type_new-card'),
        triggerElement: document.querySelector('.profile__add-button'),
    },

    cardDeleteConfirm: {
        modalElement: document.querySelector('.popup_type_card_delete_confirm'),
        modalInputCardId: document.querySelector('.popup_type_card_delete_confirm [name="card-id"]'),
    },

    cardImagePreview: {
        modalElement: document.querySelector('.popup_type_image'),
    },

    editProfile: {
        modalElement: document.querySelector('.popup_type_edit'),
        openCallback: handleModalEditProfileOpen,
        triggerElement: document.querySelector('.profile__edit-button'),
    },

    updateAvatar: {
        modalElement: document.querySelector('.popup_type_update-avatar'),
        openCallback: handleModalUpdateAvatarOpen,
        triggerElement: document.querySelector('.profile__image-edit'),
    },
};
