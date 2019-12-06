import React, { useState } from 'react';
import { createUseStyles } from 'react-jss';

export const ORDER_BY = {
  DEFAULT: 'desc',
  ASCENDING: 'asc',
  DESCENDING: 'desc',
};

const useStyles = createUseStyles((theme) => ({
  // input: {
  //   marginLeft: theme.spacing(2),
  //   padding: `${theme.spacing(2)}px ${theme.spacing(1)}px`,
  //   backgroundColor: 'transparent',
  //   border: 'none',
  //   borderBottom: '2px solid orange',
  //   color: theme.color.lightText.base,
  //   caretColor: theme.color.lightText.base,
  //   outline: 'none',
  //   transition: 'border-bottom 300ms ease-in-out',
  //   '&:focus': {
  //     borderBottomColor: 'darkorange',
  //   }
  // },
}));

export function OrderOptions(props) {
  // TODO: Maybe accept initial value. Use-case: copy-pasted URL
  const { onChange = () => {} } = props;
  const [selected, setSelected] = useState(ORDER_BY.DEFAULT);
  // const styles = useStyles();

  // TODO: Styling. Focus state, hover state, disabled state.
  // TODO: Accessibility. Label, and aria-*
  // TODO: A button to clear value.
  return (
    <div>
      <label>Order by:</label>
      <label>
        <input type="radio" name="orderBy" value={ORDER_BY.ASCENDING} checked={selected === ORDER_BY.ASCENDING} onChange={handleChange} />
        <span>A -> Z</span>
      </label>
      <label>
        <input type="radio" name="orderBy" value={ORDER_BY.DESCENDING} checked={selected === ORDER_BY.DESCENDING} onChange={handleChange} />
        <span>Z -> A</span>
      </label>
    </div>
  );

  function handleChange(e) {
    setSelected(e.target.value);
    onChange(e.target.value);
  }
};
