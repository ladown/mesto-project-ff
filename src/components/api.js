const config = {
    baseUrl: 'https://nomoreparties.co/v1/cohort-magistr-2',
    headers: {
        authorization: 'c9338f54-3149-4d64-bed7-2bb40db39375',
        'Content-Type': 'application/json',
    },
};

export const handleRequestThen = (ctx) => {
    if (ctx.ok) {
        return ctx.json();
    }

    return Promise.reject(`Ошибка: ${ctx.status}`);
};

export const handleRequestCatch = (error) => {
    console.error(error);
};

export const getUserData = async () => {
    return fetch(`${config.baseUrl}/users/me`, {
        headers: {
            ...config.headers,
        },
    }).then(handleRequestThen);
};

export const getCardsData = async () => {
    return fetch(`${config.baseUrl}/cards`, {
        headers: {
            ...config.headers,
        },
    }).then(handleRequestThen);
};

export const patchUserData = async (body) => {
    return fetch(`${config.baseUrl}/users/me`, {
        body: JSON.stringify(body),
        headers: {
            ...config.headers,
        },
        method: 'PATCH',
    }).then(handleRequestThen);
};

export const postCard = async (body) => {
    return fetch(`${config.baseUrl}/cards`, {
        body: JSON.stringify(body),
        headers: {
            ...config.headers,
        },
        method: 'POST',
    }).then(handleRequestThen);
};

export const deleteCardItem = async (cardId) => {
    return fetch(`${config.baseUrl}/cards/${cardId}`, {
        headers: {
            ...config.headers,
        },
        method: 'DELETE',
    }).then(handleRequestThen);
};

export const putCardLike = async (cardId) => {
    return fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
        headers: {
            ...config.headers,
        },
        method: 'PUT',
    }).then(handleRequestThen);
};

export const deleteCardLike = async (cardId) => {
    return fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
        headers: {
            ...config.headers,
        },
        method: 'DELETE',
    }).then(handleRequestThen);
};

export const patchUserAvatar = async (body) => {
    return fetch(`${config.baseUrl}/users/me/avatar`, {
        body: JSON.stringify(body),
        headers: {
            ...config.headers,
        },
        method: 'PATCH',
    }).then(handleRequestThen);
};
