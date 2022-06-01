import { useState, useEffect } from 'react';

interface UsePersonHookProps {
  id: number;
}

interface UsePersonHookResult {
  details: any;
}

export const usePersonHook = ({
  id,
}: UsePersonHookProps): UsePersonHookResult => {
  const [details, setDetails] = useState();

  return {
    details,
  };
};
