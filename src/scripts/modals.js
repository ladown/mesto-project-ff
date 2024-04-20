const handleModalEditProfileOpen = (data) => {
    data.forEach(([textElement, inputElement]) => {
        inputElement.value = textElement.textContent;
    });
};

export default {
    addCard: {
        modalElement: document.querySelector('.popup_type_new-card'),
        triggerElement: document.querySelector('.profile__add-button'),
    },

    cardImagePreview: {
        modalElement: document.querySelector('.popup_type_image'),
    },

    editProfile: {
        modalElement: document.querySelector('.popup_type_edit'),
        openCallback: handleModalEditProfileOpen,
        triggerElement: document.querySelector('.profile__edit-button'),
    },
};
