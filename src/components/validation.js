const validationConfig = {
    errorClass: 'popup__error_visible',
    formSelector: '.popup__form',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input_type_error',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
};

const hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => !inputElement.checkValidity());
};

const showInputError = ({ errorClass, errorElement, errorMessage, inputElement, inputErrorClass }) => {
    inputElement.classList.add(inputErrorClass);

    if (errorElement) {
        errorElement.textContent = errorMessage;
        errorElement.classList.add(errorClass);
    }
};

const hideInputError = ({ errorClass, errorElement, inputElement, inputErrorClass }) => {
    inputElement.classList.remove(inputErrorClass);

    if (errorElement) {
        errorElement.classList.remove(errorClass);
        errorElement.textContent = '';
    }
};

const checkInputValidity = ({ errorClass, errorElement, inputElement, inputErrorClass }) => {
    if (!inputElement.validity.valid) {
        const errorMessage = inputElement.validity.patternMismatch
            ? 'Разрешены только латинские, кириллические буквы, знаки дефиса и пробелы'
            : inputElement.validationMessage;

        showInputError({ errorClass, errorElement, errorMessage, inputElement, inputErrorClass });
    } else {
        hideInputError({ errorClass, errorElement, inputElement, inputErrorClass });
    }
};

const setButtonStateDisabled = ({ buttonElement, inactiveButtonClass }) => {
    buttonElement.classList.add(inactiveButtonClass);
    buttonElement.disabled = true;
};

const removeButtonStateDisabled = ({ buttonElement, inactiveButtonClass }) => {
    buttonElement.classList.remove(inactiveButtonClass);
    buttonElement.disabled = false;
};

const toggleButtonState = ({ buttonElement, inactiveButtonClass, inputList }) => {
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
            const errorElement = formElement.querySelector(`.${inputElement.id}-error`);

            inputElement.addEventListener('input', () => {
                checkInputValidity({ errorClass, errorElement, formElement, inputElement, inputErrorClass });
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

            hideInputError({ errorClass, errorElement, inputElement, inputErrorClass });
        });

        if (buttonElement) {
            toggleButtonState({ buttonElement, inactiveButtonClass, inputList });
        }
    }
};
