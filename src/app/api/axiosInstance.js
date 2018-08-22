import _axios from 'axios';
import { clashRoyaleKey } from '../../../config';

const axiosConfig = {
  headers: { auth: clashRoyaleKey },
};

const axiosInstance = _axios.create(axiosConfig);
axiosInstance.interceptors.response.use(res => res.data);

export const axios = axiosInstance;
