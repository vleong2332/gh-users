import React, { useState } from 'react';
import { createUseStyles } from 'react-jss';

import { QueryBox } from './QueryBox';
import { SortOptions } from './SortOptions';
import { OrderOptions } from './OrderOptions';

const useStyles = createUseStyles((theme) => ({
  searchForm: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    borderBottom: `1px dotted rgba(0,0,0,0.12)`,
    paddingBottom: theme.spacing(3),
  },
  sortOptions: {
    marginTop: theme.spacing(3),
  },
  orderOptions: {
    marginTop: theme.spacing(1),
  },
}));

export function SearchForm(props) {
  const { onSearch } = props;
  const [query, setQuery] = useState('');
  const [sortBy, setSortBy] = useState('');
  const [orderBy, setOrderBy] = useState('');
  const styles = useStyles(props);

  // One second may be too slow for some, but we're trying to be conservative due lower request
  // limit. Could be tweaked later.
  return (
    <div className={styles.searchForm}>
      <div>
        <QueryBox onChange={handleQueryChange} bounceRate={1000} />
      </div>
      <div className={styles.sortOptions}>
        <SortOptions onChange={handleSortChange} />
      </div>
      <div className={styles.orderOptions}>
        <OrderOptions onChange={handleOrderChange} />
      </div>
    </div>
  );

  function handleQueryChange(val) {
    setQuery(val);
    if (Boolean(val)) onSearch({ query: val, sortBy, orderBy });
  }

  function handleSortChange(val) {
    setSortBy(val);
    if (Boolean(query)) onSearch({ query, sortBy: val, orderBy });
  }

  function handleOrderChange(val) {
    setOrderBy(val);
    if (Boolean(query)) onSearch({ query, sortBy, orderBy: val });
  }
}
