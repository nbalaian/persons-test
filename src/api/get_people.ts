import http from './http.common';
import { GetPeopleParams, GetPeopleApiParams } from './interfaces';
import { AUTH_TOKEN } from '../utils.ts/constants';
import { AxiosResponse } from 'axios';

export const getPeopleApi = async ({
  start,
  limit,
  term,
}: GetPeopleParams): Promise<AxiosResponse> => {
  const params: GetPeopleApiParams = {
    start: start ?? 0,
    limit: limit ?? 10,
    api_token: AUTH_TOKEN,
  };

  const url = term ? `/persons/search?term=${term}` : '/persons';

  return http.get(url, { params });
};
