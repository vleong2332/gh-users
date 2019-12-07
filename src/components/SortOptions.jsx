import React, { useState } from 'react';
import { createUseStyles } from 'react-jss';
import clsx from 'clsx';

export const SORT_BY = {
  DEFAULT: 'best_match',
  FOLLOWERS: 'followers',
  REPOS: 'repositories',
  JOINED: 'joined',
};

const useStyles = createUseStyles((theme) => ({
  label: {
    marginBottom: theme.spacing(1),
    textAlign: 'center',
  },
  option: {
    display: 'inline-block',
    border: `1px solid rgba(255,255,255,0.25)`,
    padding: theme.spacing(1),
    backgroundColor: 'rgba(255,255,255,0)',
    fontSize: theme.typography.body2,
    transition: 'all 150ms ease-in-out',
    cursor: 'pointer',
    '&:first-of-type': {
      borderTopLeftRadius: 8,
      borderBottomLeftRadius: 8,
    },
    '&:last-of-type': {
      borderTopRightRadius: 8,
      borderBottomRightRadius: 8,
    },
    '&:hover': {
      backgroundColor: 'rgba(255,255,255,0.1)',
    },
    '& > input': {
      '-webkit-appearance': 'none',
    }
  },
  selected: {
    backgroundColor: 'rgba(255,255,255,0.2)',
    '&:hover': {
      backgroundColor: 'rgba(255,255,255,0.2)',
    }
  }
}));

export function SortOptions(props) {
  const { onChange = () => {} } = props;
  const [selected, setSelected] = useState(SORT_BY.DEFAULT);
  const styles = useStyles();
  const defaultIsSelected = selected === SORT_BY.DEFAULT;
  const followersIsSelected = selected === SORT_BY.FOLLOWERS;
  const reposIsSelected = selected === SORT_BY.REPOS;
  const joinedIsSelected = selected === SORT_BY.JOINED;

  return (
    <div>
      <div className={styles.label}>Sort</div>
      
      <label className={clsx(styles.option, defaultIsSelected && styles.selected)}>
        <input
          type="radio"
          name="sortBy"
          value={SORT_BY.DEFAULT}
          checked={defaultIsSelected}
          onChange={handleChange}
        />
        <span>Best match</span>
      </label>
      <label className={clsx(styles.option, followersIsSelected && styles.selected)}>
        <input
          type="radio"
          name="sortBy"
          value={SORT_BY.FOLLOWERS}
          checked={followersIsSelected}
          onChange={handleChange}
        />
        <span>Followers</span>
      </label>
      <label className={clsx(styles.option, reposIsSelected && styles.selected)}>
        <input
          type="radio"
          name="sortBy"
          value={SORT_BY.REPOS}
          checked={reposIsSelected}
          onChange={handleChange}
        />
        <span>Repositories</span>
      </label>
      <label className={clsx(styles.option, joinedIsSelected && styles.selected)}>
        <input
          type="radio"
          name="sortBy"
          value={SORT_BY.JOINED}
          checked={joinedIsSelected}
          onChange={handleChange}
        />
        <span>Date joined</span>
      </label>
    </div>
  );

  function handleChange(e) {
    setSelected(e.target.value);
    onChange(e.target.value);
  }
};
