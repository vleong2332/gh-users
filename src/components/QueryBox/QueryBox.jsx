import React, { useState, useMemo } from 'react';
import { createUseStyles } from 'react-jss';
import debounce from 'lodash/debounce';

const useStyles = createUseStyles((theme) => ({
  input: {
    marginLeft: theme.spacing(2),
    padding: `${theme.spacing(2)}px ${theme.spacing(1)}px`,
    backgroundColor: 'transparent',
    border: 'none',
    borderBottom: '2px solid orange',
    color: theme.color.lightText.base,
    caretColor: theme.color.lightText.base,
    outline: 'none',
    transition: 'border-bottom 300ms ease-in-out',
    '&:focus': {
      borderBottomColor: 'darkorange',
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
    <label>
      <span>Search</span>
      <input type='text' value={value} onChange={handleChange} className={styles.input} placeholder='Users' />
    </label>
  );

  function handleChange(e) {
    setValue(e.target.value);
    debouncedOnChange(e.target.value);
  }
}
