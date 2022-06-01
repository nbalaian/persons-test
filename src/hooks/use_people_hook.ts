import { useState, useEffect } from 'react';
import { getPeopleApi } from '../api/get_people';
import { AxiosResponse } from 'axios';
import {
  FilterPeopleResponse,
  GetPeopleResponse,
  Person,
} from '../api/interfaces';

interface usePeopleResult {
  people: Person[];
  isLoading: boolean;
  searchPeople: (value: string) => void;
  isMoreItems: boolean;
  isPrevActive: boolean;
  fetchNext: () => void;
  fetchPrev: () => void;
  loadPeople: () => void;
}

const ITEMS_PER_PAGE = 10;

export const usePeople = (): usePeopleResult => {
  // add / remove / show details
  const [people, setPeople] = useState<Person[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [top, setTop] = useState<number>(0);
  const [isMoreItems, setIsMoreItems] = useState<boolean>(true);

  const fetchNext = () => {
    setTop(top + ITEMS_PER_PAGE);
    getPeople();
  };

  const fetchPrev = () => {
    setTop(top !== 0 ? top - ITEMS_PER_PAGE : 0);
    getPeople();
  };

  useEffect(() => {
    if (!isMoreItems) {
      setTop(top - ITEMS_PER_PAGE);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isMoreItems]);

  const getPeople = async () => {
    // add toast
    setIsLoading(true);
    await getPeopleApi({ start: top, limit: ITEMS_PER_PAGE })
      .then((data: AxiosResponse) => {
        const peopleData: GetPeopleResponse = data.data;
        setPeople(peopleData.data);
        setIsMoreItems(
          peopleData.additional_data.pagination.more_items_in_collection
        );
      })
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  };

  const filterPeopleByName = async (term: string) => {
    setIsLoading(true);
    await getPeopleApi({ start: top, limit: 10, term })
      .then((data: AxiosResponse) => {
        const peopleData: FilterPeopleResponse = data.data;
        const flattened = peopleData.data.items.flatMap(
          (item: any) => item.item
        );
        setPeople(flattened);
      })
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    getPeople();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    people,
    isLoading,
    loadPeople: getPeople,
    searchPeople: filterPeopleByName,
    isMoreItems,
    isPrevActive: top !== 0,
    fetchNext,
    fetchPrev,
  };
};
