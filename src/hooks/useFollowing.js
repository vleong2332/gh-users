import { useState, useEffect } from 'react';
import axios from 'axios';

import { STATUS } from '../consts/dataStatus';

export function useFollowing(user) {
  const [followingList, setFollowingList] = useState([]);
  const [status, setStatus] = useState(STATUS.IDLE);

  useEffect(() => {
    if (user === undefined) return;

    const url = user.following_url.replace('{/other_user}', '');

    setStatus(STATUS.BUSY);
    
    axios
      .get(url)
      .then(resp => {
        setStatus(STATUS.OK);
        setFollowingList(resp.data);
      })
      .catch(err => {
        setStatus(STATUS.FAIL);
        console.error('failed to search for users', err);
      });
  }, [setStatus, user]);

  return { followingList, status };
}
