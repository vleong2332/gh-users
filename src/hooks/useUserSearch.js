import { useState } from 'react';
import axios from 'axios';

import { STATUS } from '../consts/dataStatus';

export function useUserSearch() {
  const [userList, setUserList] = useState([]);
  const [status, setStatus] = useState(STATUS.IDLE);

  function search(options) {
    setStatus(STATUS.BUSY);
    
    axios
      .get(`https://api.github.com/search/users?q=${options.query || ''}&sort=${options.sortBy || ''}&order=${options.orderBy || ''}&page=1&per_page=20`)
      .then(resp => {
        setStatus(STATUS.OK);
        setUserList(resp.data.items);
      })
      .catch(err => {
        setStatus(STATUS.FAIL);
        console.error('failed to search for users', err);
      });
  };

  return { userList, status, search };
}
