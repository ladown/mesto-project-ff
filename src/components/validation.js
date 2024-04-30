export const validationConfig = {
    errorClass: 'popup__error_visible',
    formSelector: '.popup__form',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input_type_error',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
};

export const isValidImageUrl = async ({ formElement, inputElement }) => {
    return fetch(inputElement.value, {
        method: 'HEAD',
    })
        .then((ctx) => {
            const contentType = ctx.headers.get('Content-Type');
            if (
                ctx.ok &&
                !(
                    contentType === 'image/apng' ||
                    contentType === 'image/avif' ||
                    contentType === 'image/gif' ||
                    contentType === 'image/jpeg' ||
                    contentType === 'image/jpg' ||
                    contentType === 'image/png' ||
                    contentType === 'image/svg+xml' ||
                    contentType === 'image/webp'
                )
            ) {
                return Promise.reject();
            }

            return true;
        })
        .catch(() => {
            inputElement.setCustomValidity(inputElement.dataset.errorMessage);
            showInputError({
                ...validationConfig,
                errorMessage: inputElement.validationMessage,
                formElement,
                inputElement,
            });
            toggleButtonState({
                ...validationConfig,
                buttonElement: formElement.elements.submit,
                inputList: [inputElement],
            });
        });
};

const hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => !inputElement.checkValidity());
};

export const showInputError = ({ errorClass, errorMessage, formElement, inputElement, inputErrorClass }) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);

    inputElement.classList.add(inputErrorClass);

    if (errorElement) {
        errorElement.textContent = errorMessage;
        errorElement.classList.add(errorClass);
    }
};

export const hideInputError = ({ errorClass, formElement, inputElement, inputErrorClass }) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);

    inputElement.classList.remove(inputErrorClass);

    if (errorElement) {
        errorElement.classList.remove(errorClass);
        errorElement.textContent = '';
    }
};

const checkInputValidity = ({ errorClass, formElement, inputElement, inputErrorClass }) => {
    if (!inputElement.validity.valid) {
        if (inputElement.validity.patternMismatch) {
            inputElement.setCustomValidity(inputElement.dataset.errorMessage);
        } else {
            inputElement.setCustomValidity('');
        }

        showInputError({ errorClass, errorMessage: inputElement.validationMessage, formElement, inputElement, inputErrorClass });
    } else {
        hideInputError({ errorClass, formElement, inputElement, inputErrorClass });
    }
};

const setButtonStateDisabled = ({ buttonElement, inactiveButtonClass }) => {
    buttonElement.classList.remove('is-loading');
    buttonElement.classList.add(inactiveButtonClass);
    buttonElement.disabled = true;
};

const removeButtonStateDisabled = ({ buttonElement, inactiveButtonClass }) => {
    buttonElement.classList.remove(inactiveButtonClass);
    buttonElement.disabled = false;
};

export const toggleButtonState = ({ buttonElement, inactiveButtonClass, inputList }) => {
    if (buttonElement) {
        if (hasInvalidInput(inputList)) {
            setButtonStateDisabled({ buttonElement, inactiveButtonClass });
        } else {
            removeButtonStateDisabled({ buttonElement, inactiveButtonClass });
        }
    }
};

const setInputListener = ({
    errorClass,
    formElement,
    inactiveButtonClass,
    inputErrorClass,
    inputSelector,
    submitButtonSelector,
}) => {
    const buttonElement = formElement.querySelector(submitButtonSelector);
    const inputList = Array.from(formElement.querySelectorAll(inputSelector));
    if (inputList?.length) {
        toggleButtonState({ buttonElement, inactiveButtonClass, inputList });

        inputList.forEach((inputElement) => {
            inputElement.addEventListener('input', () => {
                checkInputValidity({ errorClass, formElement, inputElement, inputErrorClass });
                toggleButtonState({ buttonElement, inactiveButtonClass, inputList });
            });
        });
    }
};

export const enableValidation = ({
    errorClass,
    formSelector,
    inactiveButtonClass,
    inputErrorClass,
    inputSelector,
    submitButtonSelector,
} = validationConfig) => {
    const formList = Array.from(document.querySelectorAll(formSelector));

    if (formList.length) {
        formList.forEach((formElement) => {
            formElement.addEventListener('submit', (event) => {
                event.preventDefault();
            });

            setInputListener({
                errorClass,
                formElement,
                inactiveButtonClass,
                inputErrorClass,
                inputSelector,
                submitButtonSelector,
            });
        });
    }
};

export const clearValidation = (
    formElement,
    { errorClass, inactiveButtonClass, inputErrorClass, inputSelector, submitButtonSelector } = validationConfig,
) => {
    const inputList = Array.from(formElement.querySelectorAll(inputSelector));
    const buttonElement = formElement.querySelector(submitButtonSelector);

    if (inputList?.length) {
        inputList.forEach((inputElement) => {
            const errorElement = formElement.querySelector(`.${inputElement.id}-error`);

            hideInputError({ errorClass, errorElement, formElement, inputElement, inputErrorClass });
        });

        if (buttonElement) {
            toggleButtonState({ buttonElement, inactiveButtonClass, inputList });
        }
    }
};
