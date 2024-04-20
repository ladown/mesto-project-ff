export const modalOpenedModifier = 'popup_is-opened';

export const modals = [
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
    },
];

export const openModal = ({ closeModalEsc, modalElement }) => {
    modalElement.classList.add(modalOpenedModifier);
    document.addEventListener('keydown', closeModalEsc);
};

export const closeModal = ({ closeModalEsc, modalElement }) => {
    modalElement.classList.remove(modalOpenedModifier);
    document.removeEventListener('keydown', closeModalEsc);
};

export const closeModalEsc = ({ key }) => {
    if (key === 'Escape') {
        const openedModal = document.querySelector(`.${modalOpenedModifier}`);
        closeModal({ modalElement: openedModal });
    }
};
