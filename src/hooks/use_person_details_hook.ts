import { useState, useEffect } from 'react';
import { getPersonDetailsApi } from '../api/get_person_details';
import { PersonDetails } from '../api/interfaces';

interface UsePersonDetailsHookProps {
  personId: number;
}

interface UsePersonDetailsHookResult {
  details: PersonDetails | null;
  isLoading: boolean;
}

export const usePersonDetailsHook = ({
  personId,
}: UsePersonDetailsHookProps): UsePersonDetailsHookResult => {
  const [details, setDetails] = useState<PersonDetails | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getPersonDetails = (id: number) => {
    setIsLoading(true);
    getPersonDetailsApi({ id })
      .then((data) => {
        setDetails(data.data.data);
      })
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    getPersonDetails(personId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    details,
    isLoading,
  };
};
