import { getObjectLength } from '../scripts/utils.js';

export const profileElements = {
    about: document.querySelector('.profile__description'),
    avatar: document.querySelector('.profile__image'),
    name: document.querySelector('.profile__title'),
};

export const setProfileContent = (data) => {
    if (getObjectLength(data)) {
        Object.keys(data).forEach((key) => {
            const value = data[key];

            if (value && profileElements[key]) {
                if (key === 'avatar') {
                    profileElements[key].style.backgroundImage = `url("${value}")`;
                } else {
                    profileElements[key].textContent = value;
                }
            }
        });
    }
};
