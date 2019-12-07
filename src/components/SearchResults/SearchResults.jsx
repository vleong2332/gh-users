import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles((theme) => ({
  list: {
    listStyle: 'none',
  },
  listItem: {
    display: 'flex',
    cursor: 'pointer',
  },
  avatar: {
    width: 48,
    height: 48,
  }
}));

export function SearchResults(props) {
  const { userList = [], onUserClick = () => {}, status } = props;
  const styles = useStyles(props);
  const isEmpty = userList.length === 0;

  return (
    <div>
      <h2>Results</h2>
      {status === 'idle' && <p>Start by searching for a user above.</p>}
      {status === 'busy' && <p>Loading...</p>}
      {status === 'fail' && <p>Something went wrong. Please try another search.</p>}
      {status === 'ok' && isEmpty && <p>No results. Search for another user.</p>}
      {status === 'ok' && !isEmpty && (
        <ul className={styles.list}>
          {userList.map((user) => (
            <li key={user.id} className={styles.listItem} onClick={(e) => handleClick(e, user)}>
              <img src={user.avatar_url} alt={`Avatar for user ${user.login}`} className={styles.avatar} />
              <span>{user.login}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
  
  function handleClick(e, user) {
    console.log('result is clicked', user);
    onUserClick(user);
  }
}
