import React, { useState } from 'react';
import { createUseStyles } from 'react-jss';
import clsx from 'clsx';

export const ORDER_BY = {
  DEFAULT: 'desc',
  ASCENDING: 'asc',
  DESCENDING: 'desc',
};

const useStyles = createUseStyles((theme) => ({
  label: {
    textAlign: 'center',
    marginBottom: theme.spacing(1),
  },
  option: {
    display: 'inline-block',
    padding: theme.spacing(1),
    border: `1px solid rgba(255,255,255,0.25)`,
    cursor: 'pointer',
    backgroundColor: 'rgba(255,255,255,0)',
    transition: 'all 150ms ease-in-out',
    fontSize: theme.typography.body2,
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

export function OrderOptions(props) {
  // TODO: Maybe accept initial value. Use-case: copy-pasted URL
  const { onChange = () => {} } = props;
  const [selected, setSelected] = useState(ORDER_BY.DEFAULT);
  const styles = useStyles();
  const ascIsSelected = selected === ORDER_BY.ASCENDING;
  const descIsSelected = selected === ORDER_BY.DESCENDING;

  return (
    <div>
      <div className={styles.label}>Order</div>
      
      <label className={clsx(styles.option, ascIsSelected && styles.selected)}>
        <input
          type="radio"
          name="orderBy"
          value={ORDER_BY.ASCENDING}
          checked={ascIsSelected}
          onChange={handleChange}
        />
        <span>A &rarr; Z</span>
      </label>
      <label className={clsx(styles.option, descIsSelected && styles.selected)}>
        <input
          type="radio"
          name="orderBy"
          value={ORDER_BY.DESCENDING}
          checked={descIsSelected}
          onChange={handleChange}
        />
        <span>Z &rarr; A</span>
      </label>
    </div>
  );

  function handleChange(e) {
    setSelected(e.target.value);
    onChange(e.target.value);
  }
};
