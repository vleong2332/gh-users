import React, { useEffect } from 'react';
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
    padding: theme.spacing(2),
    boxSizing: 'border-box',
    minWidth: 320,
    maxWidth: 768,
    maxHeight: `calc(100% - ${theme.spacing(4) * 2}px)`,
    overflow: 'auto',
    backgroundColor: 'white',
    color: theme.color.text.dark,
    borderRadius: 6,
  },
  modalNav: {
    paddingBottom: theme.spacing(2),
  },
  back: {
    border: 'none',
    '&:hover': {
      backgroundColor: 'rgba(0,0,0,0.1)',
    }
  },
  userProfile: {
    display: 'flex',
    alignItems: 'center',
  },
  profilePic: {
    width: 96,
    height: 96,
    borderRadius: '50%',
    marginRight: theme.spacing(2),
  },
  row: {
    display: 'flex',
  },
  twoColumns: {
    flex: '0 0 50%',
    maxHeight: 200,
    display: 'flex',
    flexDirection: 'column',
  },
  scrollingContainer: {
    overflowY: 'auto',
  },
  listHeader: {
    margin: `${theme.spacing(3)}px 0 ${theme.spacing(1)}px`,
  },
  list: {
    padding: 0,
    margin: 0,
    listStyleType: 'none',
  },
  listItem: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0.25),
  },
  avatar: {
    width: 24,
    height: 24,
    borderRadius: 4,
    marginRight: theme.spacing(1),
  },
}));

const body = document.querySelector('body');

export function UserView(props) {
  // TODO: Need a way to self-close that works well with "hid" prop
  const { hid = true, user, onDismiss = () => {} } = props;
  const styles = useStyles(props);
  const { followerList, status: followersStatus } = useFollowers(user);
  const { followingList, status: followingStatus } = useFollowing(user);
  const { repoList, status: repoStatus } = useRepos(user);

  useEffect(() => {
    body.style.overflow = hid ? 'auto' : 'hidden';
  }, [hid]);

  return hid ? null : (
    <div className={styles.layover}>
      <div className={styles.modal}>
        
        <div className={styles.modalNav}>
          <button className={styles.back} onClick={handleBackClick}>&larr; Back</button>
        </div>

        <div className={styles.userProfile}>
          <img src={user.avatar_url} alt={`Avatar for user ${user.login}`} className={styles.profilePic} />
          <h1>{user.login}</h1>
        </div>

        <div className={styles.row}>
          <div className={styles.twoColumns}>
            <h4 className={styles.listHeader}>Followers</h4>
            <div className={styles.scrollingContainer}>
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
            </div>
          </div>

          <div className={styles.twoColumns}>
            <h4 className={styles.listHeader}>Following</h4>
            <div className={styles.scrollingContainer}>
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
            </div>
          </div>
        </div>

        <h4 className={styles.listHeader}>Top 5 Repositories</h4>
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

  function handleBackClick() {
    onDismiss();
  }
}
