import { useState } from 'react';
import axios from 'axios';

export function useUserSearch() {
  const [userList, setUserList] = useState([]);

  function search(options) {
    console.log('searching', options)
    axios
      .get(`https://api.github.com/search/users?q=${options.query || ''}&sort=${options.sort || ''}&order=${options.order || ''}&page=1&per_page=20`)
      .then(resp => setUserList(resp.data.items))
      .catch(err => console.error('failed to search for users', err));
  };

  return { userList, search };
}
