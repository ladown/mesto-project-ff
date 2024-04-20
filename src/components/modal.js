export const modalOpenedModifier = 'popup_is-opened';

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
        const openedModal = document.querySelector('.popup_is-opened');
        closeModal({ modalElement: openedModal });
    }
};
