import React, { useState } from 'react';
import { ThemeProvider } from 'react-jss';
import { theme as baseTheme } from './themes/base';

import 'normalize.css';
import './App.css';

// TODO: Maybe there's a way to add aliases for absolute path imports to webpack without ejecting.
import { SearchForm } from './components/SearchForm';
import { SearchResults } from './components/SearchResults';
import { UserView } from './components/UserView';
import { useUserSearch } from './hooks/useUserSearch';

function App() {
  const { userList, status, search } = useUserSearch();
  const [selectedUser, setSelectedUser] = useState(undefined);
  const [showUserView, setShowUserView] = useState(false);

  return (
    <ThemeProvider theme={baseTheme}>
      <div className="App">
        <header>
          <h1>Github User Search</h1>
        </header>
        <main>
          <SearchForm onSearch={search} />
          <SearchResults userList={userList} onUserClick={handleUserClick} status={status} />
          <UserView hid={!showUserView} user={selectedUser} />
        </main>
      </div>
    </ThemeProvider>
  );

  function handleUserClick(user) {
    setSelectedUser(user);
    setShowUserView(true);
  }
}

export default App;
