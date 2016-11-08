import localforage from 'localforage';

export const set = (key, value) => localforage.setItem(key, value);
export const get = key => localforage.getItem(key);
