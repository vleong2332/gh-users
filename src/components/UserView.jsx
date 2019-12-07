import React from 'react';
import { createUseStyles } from 'react-jss';

import { useFollowers } from '../hooks/useFollowers';
import { useFollowing } from '../hooks/useFollowing';
import { useRepos } from '../hooks/useRepos';

const useStyles = createUseStyles((theme) => ({
  layover: {
    position: 'fixed',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modal: {
    margin: `${theme.spacing(4)}px auto`,
    minWidth: 320,
    maxWidth: 768,
    maxHeight: `calc(100% - ${theme.spacing(4) * 2}px)`,
    overflow: 'auto',
    backgroundColor: 'white',
  },
  avatar: {
    width: 48,
    height: 48,
  }
}));

export function UserView(props) {
  const { hid = true, user } = props;
  const styles = useStyles(props);
  const { followerList, status: followersStatus } = useFollowers(user);
  const { followingList, status: followingStatus } = useFollowing(user);
  const { repoList, status: repoStatus } = useRepos(user);

  return hid ? null : (
    <div className={styles.layover}>
      <div className={styles.modal}>
        <img src={user.avatar_url} alt={`Avatar for user ${user.login}`} className={styles.avatar} />
        <span>{user.login}</span>
        <h4>Followers</h4>
        {followersStatus === 'busy' && <p>Loading...</p>}
        {followersStatus === 'ok' && (
          <ul className={styles.list}>
            {followerList.map((user) => (
              <li key={user.id} className={styles.listItem}>
                <img src={user.avatar_url} alt={`Avatar for user ${user.login}`} className={styles.avatar} />
                <span>{user.login}</span>
              </li>
            ))}
          </ul>
        )}
        <h4>Following</h4>
        {followingStatus === 'busy' && <p>Loading...</p>}
        {followingStatus === 'ok' && (
          <ul className={styles.list}>
            {followingList.map((user) => (
              <li key={user.id} className={styles.listItem}>
                <img src={user.avatar_url} alt={`Avatar for user ${user.login}`} className={styles.avatar} />
                <span>{user.login}</span>
              </li>
            ))}
          </ul>
        )}
        <h4>Top 5 Repositories</h4>
        {repoStatus === 'busy' && <p>Loading...</p>}
        {repoStatus === 'ok' && (
          <ul className={styles.list}>
            {repoList.map((repo) => (
              <li key={repo.id} className={styles.listItem}>
                <span>{repo.name}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
