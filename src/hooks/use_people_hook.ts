import { useCallback, useState, useEffect } from 'react';
import { getPeopleApi } from '../api/get_people';
import { AxiosResponse } from 'axios';
import { GetPeopleResponse, Person } from '../api/interfaces';
import debounce from 'lodash.debounce';

interface usePeopleResult {
  people: Person[];
  isLoading: boolean;
}

export const usePeople = (): usePeopleResult => {
  // add / remove / show details
  const [people, setPeople] = useState<Person[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [top, setTop] = useState<number>(0);

  const getPeople = async (term?: string) => {
    // add toast
    setIsLoading(true);
    await getPeopleApi({ start: top, limit: 10, term })
      .then((data: AxiosResponse) => {
        const peopleData: GetPeopleResponse = data.data;
        if (peopleData.success) {
          setPeople(peopleData.data);
        }
      })
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  };

  const debouncedFilter = useCallback(
    debounce((query: string) => getPeople(query), 500),
    []
  );

  useEffect(() => {
    getPeople();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    people,
    isLoading,
  };
};
