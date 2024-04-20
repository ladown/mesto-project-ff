export const modalOpenedModifier = 'popup_is-opened';

export const openModal = ({ modalElement }) => {
    modalElement.classList.add(modalOpenedModifier);
    document.addEventListener('keydown', closeModalEsc);
};

export const closeModal = ({ modalElement }) => {
    modalElement.classList.remove(modalOpenedModifier);
    document.removeEventListener('keydown', closeModalEsc);
};

export const closeModalEsc = ({ key }) => {
    if (key === 'Escape') {
        const openedModal = document.querySelector(`.${modalOpenedModifier}`);
        closeModal({ modalElement: openedModal });
    }
};
