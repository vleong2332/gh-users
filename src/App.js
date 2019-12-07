import React, { useState } from 'react';
import { createUseStyles } from 'react-jss';

import 'normalize.css';
import './App.css';

// TODO: Maybe there's a way to add aliases for absolute path imports to webpack without ejecting.
import { SearchForm } from './components/SearchForm';
import { SearchResults } from './components/SearchResults';
import { UserView } from './components/UserView';
import { useUserSearch } from './hooks/useUserSearch';

const useGlobalStyles = createUseStyles((theme) => ({
  '@global': {
    html: {
      fontSize: theme.typography.rootFontSize,
      backgroundColor: theme.color.background.base,
      color: theme.color.text.onBackground,
      ...theme.scrollbar(),
    },
    h1: {
      margin: 0,
    },
    a: {
      color: theme.color.text.onBackground,
    },
  },
}));

const useStyles = createUseStyles((theme) => ({
  app: {
    minWidth: 320,
    maxWidth: 540,
    margin: `0 auto`,
    padding: theme.spacing(3),
  },
}));

function App(props) {
  useGlobalStyles();
  const { userList, status, search } = useUserSearch();
  const [selectedUser, setSelectedUser] = useState(undefined);
  const [showUserView, setShowUserView] = useState(false);
  const styles = useStyles(props);

  return (
    <div className={styles.app}>
      <main>
        <SearchForm onSearch={search} />
        <SearchResults userList={userList} onUserClick={handleUserClick} status={status} />
        <UserView hid={!showUserView} user={selectedUser} onDismiss={handleViewDismiss} />
      </main>
    </div>
  );

  function handleUserClick(user) {
    setSelectedUser(user);
    setShowUserView(true);
  }

  function handleViewDismiss() {
    setShowUserView(false);
  }
}

export default App;
