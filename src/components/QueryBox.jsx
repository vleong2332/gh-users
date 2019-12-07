import React, { useState, useMemo } from 'react';
import { createUseStyles } from 'react-jss';
import debounce from 'lodash/debounce';

const useStyles = createUseStyles((theme) => ({
  input: {
    width: 300,
    border: 'none',
    borderRadius: 3,
    padding: `${theme.spacing(2)}px ${theme.spacing(1)}px`,
    backgroundColor: 'rgba(255,255,255,0.1)',
    color: theme.color.text.light,
    transition: 'all 150ms ease-in-out',
    '&:focus': {
      outline: 'none',
      backgroundColor: 'rgba(255,255,255,0.95)',
      color: theme.color.text.dark,
      ...theme.boxShadow(),
    }
  },
}));

export function QueryBox(props) {
  const { onChange = () => {}, bounceRate = 0 } = props;
  const [value, setValue] = useState('');
  const styles = useStyles();
  const debouncedOnChange = useMemo(() => debounce(onChange, bounceRate), [onChange, bounceRate]);

  return (
    <input
      type='text'
      value={value}
      onChange={handleChange}
      className={styles.input}
      placeholder='Search users...'
    />
  );

  function handleChange(e) {
    setValue(e.target.value);
    debouncedOnChange(e.target.value);
  }
}
