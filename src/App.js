import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './Redux/store';
import CakeContainer from './component/CakeContainer';
import HooksCakeContainer from './component/HooksCakeContainer';
import IceCreamContainer from './component/IceCreamContainer';
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeContainer />
        <HooksCakeContainer />
        <IceCreamContainer/>
      </div>
    </Provider>

  );
}

export default App;
