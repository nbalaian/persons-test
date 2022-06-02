import http from './http.common';
import { DefaultApiParam } from './interfaces';
import { AUTH_TOKEN } from '../utils.ts/constants';
import { AxiosResponse } from 'axios';

export const getOrganizationsApi = async (): Promise<AxiosResponse> => {
  const params: DefaultApiParam = {
    api_token: AUTH_TOKEN,
  };

  return http.get('/organizations', { params });
};
