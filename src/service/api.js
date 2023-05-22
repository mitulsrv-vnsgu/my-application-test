import { apis } from "service";

const COMMON_URL = `https://nodedemo.dhiwise.co/device/api/v1/user/`;

const API_URLS = { LIST_USER: `${COMMON_URL}list` };

export const listUser = (payload) => apis.post(API_URLS.LIST_USER, payload);
