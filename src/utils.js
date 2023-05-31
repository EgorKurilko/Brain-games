export const toYesNo = (value) => (value ? 'yes' : 'no');

export const getRandomNumber = (min, max) => Math.floor(min + Math.random() * (max + 1 - min));
