import React, { useState, useMemo } from 'react';
import { createUseStyles } from 'react-jss';
import debounce from 'lodash/debounce';

const useStyles = createUseStyles((theme) => ({
  input: {
    border: 'none',
    borderRadius: 3,
    padding: `${theme.spacing(2)}px ${theme.spacing(1)}px`,
    backgroundColor: 'rgba(255,255,255,0.1)',
    transition: 'all 150ms ease-in-out',
    width: 300,
    color: theme.color.text.light,
    '&:focus': {
      backgroundColor: 'rgba(255,255,255,0.95)',
      outline: 'none',
      color: theme.color.text.dark,
    }
  },
}));

export function QueryBox(props) {
  // TODO: Maybe accept initial value. Use-case: copy-pasted URL
  const { onChange = () => {}, bounceRate = 0 } = props;
  const [value, setValue] = useState('');
  const styles = useStyles();
  const debouncedOnChange = useMemo(() => debounce(onChange, bounceRate), [onChange, bounceRate]);

  // TODO: Styling. Focus state, hover state, disabled state.
  // TODO: Accessibility. Label, and aria-*
  // TODO: A button to clear value.
  return (
    <input type='text' value={value} onChange={handleChange} className={styles.input} placeholder='Search users...' />
  );

  function handleChange(e) {
    setValue(e.target.value);
    debouncedOnChange(e.target.value);
  }
}
