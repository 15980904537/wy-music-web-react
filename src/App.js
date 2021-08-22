import React from 'react'
import Main from '@/pages/main'
import { Provider } from 'react-redux'
import store from './store/index'
function App() {
  return (
    <Provider store={store}>
      <Main></Main>
    </Provider>
  );
}

export default App;
