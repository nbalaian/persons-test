import http from './http.common';
import { DefaultApiParam } from './interfaces';
import { AUTH_TOKEN } from '../utils.ts/constants';
import { AxiosResponse } from 'axios';

interface DeletePersonDetailsParams {
  id: number;
}

export const deletePersonApi = async ({
  id,
}: DeletePersonDetailsParams): Promise<AxiosResponse> => {
  const params: DefaultApiParam = {
    api_token: AUTH_TOKEN,
  };

  return http.delete(`persons/${id}`, { params });
};
