import http from './http.common';
import { DefaultApiParam } from './interfaces';
import { AUTH_TOKEN } from '../utils.ts/constants';
import { AxiosResponse } from 'axios';

interface GetPersonDetailsParams {
  id: number;
}

export const getPersonDetailsApi = async ({
  id,
}: GetPersonDetailsParams): Promise<AxiosResponse> => {
  const params: DefaultApiParam = {
    api_token: AUTH_TOKEN,
  };

  return http.get(`persons/${id}`, { params });
};
