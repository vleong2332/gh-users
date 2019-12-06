import React from 'react';
import { ThemeProvider } from 'react-jss';
import { theme as baseTheme } from './themes/base';

import 'normalize.css';
import './App.css';


// TODO: Maybe there's a way to add aliases for absolute path imports to webpack without ejecting.
import { SearchForm } from './components/SearchForm';
import { useUserSearch } from './hooks/useUserSearch';

function App() {
  const { userList, search } = useUserSearch();

  return (
    <ThemeProvider theme={baseTheme}>
      <div className="App">
        <header className="App-header">
          Github Users Search
        </header>
        <main>
          <SearchForm onSearch={(query) => { search(query); }} />
          {JSON.stringify(userList, null, 2)}
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
