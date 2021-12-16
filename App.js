import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { View } from 'react-native';
import StackNavigation from './src/navigations/StackNavigation';
import ForgotPass from './src/pages/ForgotPass';
import LoginPage from './src/pages/Login';
import RegisterPage from './src/pages/Register';
import { Provider } from 'react-redux';
import rootReducers from './src/reducers'
import { applyMiddleware, createStore } from 'redux';
import ReduxThunk from 'redux-thunk'

const globalStore = createStore(rootReducers, {}, applyMiddleware(ReduxThunk))

const App = (props) => {

  return (
    <Provider store={globalStore}>
      <NavigationContainer>
        <StackNavigation />
      </NavigationContainer>
    </Provider>
  )
}

export default App;
