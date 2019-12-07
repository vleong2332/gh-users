import { useState, useEffect } from 'react';
import axios from 'axios';

import { STATUS } from '../consts/dataStatus';

export function useRepos(user) {
  const [repoList, setRepoList] = useState([]);
  const [status, setStatus] = useState(STATUS.IDLE);

  useEffect(() => {
    if (user.repos_url === undefined) return;

    setStatus(STATUS.BUSY);

    axios
      .get(`${user.repos_url}?type=owner&per_page=5&sort=updated`)
      .then(resp => {
        setStatus(STATUS.OK);
        setRepoList(resp.data);
      })
      .catch(err => {
        setStatus(STATUS.FAIL);
        console.error('failed to search for users', err);
      });
  }, [setStatus, user]);

  return { repoList, status };
}
