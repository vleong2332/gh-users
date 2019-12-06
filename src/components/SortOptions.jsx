import React, { useState } from 'react';
import { createUseStyles } from 'react-jss';

export const SORT_BY = {
  DEFAULT: 'best_match',
  FOLLOWERS: 'followers',
  REPOS: 'repositories',
  JOINED: 'joined',
};

const useStyles = createUseStyles((theme) => ({
  label: {
    marginRight: theme.spacing(2),
  },
  option: {
    '&:not(:last-of-type)': {
      marginRight: theme.spacing(2),
    },
    '& > input': {
      marginRight: theme.spacing(1),
    }
  }
}));

export function SortOptions(props) {
  // TODO: Maybe accept initial value. Use-case: copy-pasted URL
  const { onChange = () => {} } = props;
  const [selected, setSelected] = useState(SORT_BY.DEFAULT);
  const styles = useStyles();

  // TODO: Styling. Focus state, hover state, disabled state.
  // TODO: Accessibility. Label, and aria-*
  // TODO: A button to clear value.
  return (
    <div>
      <label className={styles.label}>Sort by:</label>
      <label className={styles.option}>
        <input type="radio" name="sortBy" value={SORT_BY.DEFAULT} checked={selected === SORT_BY.DEFAULT} onChange={handleChange} />
        <span>Best match</span>
      </label>
      <label className={styles.option}>
        <input type="radio" name="sortBy" value={SORT_BY.FOLLOWERS} checked={selected === SORT_BY.FOLLOWERS} onChange={handleChange} />
        <span>Followers</span>
      </label>
      <label className={styles.option}>
        <input type="radio" name="sortBy" value={SORT_BY.REPOS} checked={selected === SORT_BY.REPOS} onChange={handleChange} />
        <span>Repositories</span>
      </label>
      <label className={styles.option}>
        <input type="radio" name="sortBy" value={SORT_BY.JOINED} checked={selected === SORT_BY.JOINED} onChange={handleChange} />
        <span>Date joined</span>
      </label>
    </div>
  );

  function handleChange(e) {
    setSelected(e.target.value);
    onChange(e.target.value);
  }
};
