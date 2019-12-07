import { useState, useEffect } from 'react';
import axios from 'axios';

import { STATUS } from '../consts/dataStatus';

export function useFollowers(user) {
  const [followerList, setFollowerList] = useState([]);
  const [status, setStatus] = useState(STATUS.IDLE);

  useEffect(() => {
    if (user === undefined) return;

    setStatus(STATUS.BUSY);
    
    axios
      .get(user.followers_url)
      .then(resp => {
        setStatus(STATUS.OK);
        setFollowerList(resp.data);
      })
      .catch(err => {
        setStatus(STATUS.FAIL);
        console.error('failed to search for users', err);
      });
  }, [setStatus, user]);

  return { followerList, status };
}
