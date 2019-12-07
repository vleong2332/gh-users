import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles((theme) => ({
  list: {
    listStyle: 'none',
    padding: 0,
  },
  listItem: {
    display: 'flex',
    alignItems: 'center',
    borderRadius: 3,
    padding: 8,
    cursor: 'pointer',
    transition: 'all 100ms ease-in-out',
    '&:hover': {
      backgroundColor: 'rgba(255,255,255,0.5)',
      color: theme.color.text.dark,
    }
  },
  avatar: {
    width: 48,
    height: 48,
    marginRight: theme.spacing(2),
    borderRadius: '50%',
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
      {status === 'ok' && (
        <ul className={styles.list}>
          {userList.map((user) => (
            <li key={user.id} className={styles.listItem} onClick={(e) => handleClick(e, user)}>
              <img
                className={styles.avatar}
                src={user.avatar_url}
                alt={`Avatar for user ${user.login}`}
              />
              <span>{user.login}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
  
  function handleClick(e, user) {
    onUserClick(user);
  }
}
