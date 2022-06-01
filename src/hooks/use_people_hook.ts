import { useState, useEffect, useRef } from 'react';
import { getPeopleApi } from '../api/get_people';
import { AxiosResponse } from 'axios';
import {
  FilterPeopleResponse,
  GetPeopleResponse,
  Person,
} from '../api/interfaces';
import debounce from 'lodash.debounce';

interface usePeopleResult {
  people: Person[];
  isLoading: boolean;
  searchTerm: string;
  searchPeople: (value: string) => void;
  isMoreItems: boolean;
  isPrevActive: boolean;
  fetchNext: () => void;
  fetchPrev: () => void;
}

const ITEMS_PER_PAGE = 10;

export const usePeople = (): usePeopleResult => {
  // add / remove / show details
  const firstUpdate = useRef(true);
  const [people, setPeople] = useState<Person[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [top, setTop] = useState<number>(0);
  const [isMoreItems, setIsMoreItems] = useState<boolean>(true);
  const [searchTerm, setSearchTerm] = useState<string>('');

  const searchPeople = (value: string) => {
    setSearchTerm(value);
    console.log(value);
  };

  const fetchNext = () => {
    setTop(top + ITEMS_PER_PAGE);
    getPeople(top + ITEMS_PER_PAGE);
  };

  const fetchPrev = () => {
    setTop(top !== 0 ? top - ITEMS_PER_PAGE : 0);
    getPeople(top - ITEMS_PER_PAGE);
  };

  useEffect(() => {
    if (!isMoreItems) {
      setTop(top - ITEMS_PER_PAGE);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isMoreItems]);

  const getPeople = async (start?: number) => {
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
        if (searchTerm.length > 1 && peopleData.data.items) {
          const flattened = peopleData.data.items.flatMap(
            (item: any) => item.item
          );
          setPeople(flattened);
        }
      })
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  };

  const debouncedFetchData = debounce((term) => {
    filterPeopleByName(term);
  }, 500);

  useEffect(() => {
    if (!firstUpdate.current && searchTerm === '') {
      getPeople();
    }
    debouncedFetchData(searchTerm);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchTerm]);

  useEffect(() => {
    getPeople();

    // set flag to detect first load
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }

    return () => {
      debouncedFetchData.cancel();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    people,
    isLoading,
    searchTerm,
    searchPeople,
    isMoreItems,
    isPrevActive: top !== 0,
    fetchNext,
    fetchPrev,
  };
};
