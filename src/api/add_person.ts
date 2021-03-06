import http from './http.common';
import { DefaultApiParam, NewPerson } from './interfaces';
import { AUTH_TOKEN } from '../utils.ts/constants';
import { AxiosResponse } from 'axios';

export const addPersonApi = async (data: NewPerson): Promise<AxiosResponse> => {
  const params: DefaultApiParam = {
    api_token: AUTH_TOKEN,
  };

  return http.post('persons', data, { params });
};
