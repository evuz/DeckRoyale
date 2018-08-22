import { axios } from './axiosInstance';

const BASE_PATH = 'https://api.royaleapi.com/';

export function version() {
  return axios.get(`${BASE_PATH}version`);
}

export function cards() {
  return axios.get(`${BASE_PATH}constants`).then(res => res.cards);
}
