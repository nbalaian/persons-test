import { useState, useEffect } from 'react';
import { ListHeader } from '../components/list-header/list-header';

export function People() {
  const [peopleList, setPeopleList] = useState([]);

  useEffect(() => {
    // fetch people here
  }, []);

  return (
    <div>
      <ListHeader />
      {/* people header */}
      {/* people list */}
    </div>
  );
}
