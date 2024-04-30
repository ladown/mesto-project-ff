export const getObjectLength = (object) => {
    return object !== null && object !== undefined && typeof object === 'object' ? Object.values(object)?.length : 0;
};
