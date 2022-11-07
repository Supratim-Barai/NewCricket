/* eslint-disable prettier/prettier */
import React from 'react';
import {LogBox} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import Routes from './routes';
import RNBootSplash from "react-native-bootsplash";
import { Provider } from 'react-redux';
import { store } from './store';
import {Theme} from './theme';

LogBox.ignoreLogs(["warning"]);

function App() {
  
  React.useEffect(() => {
    RNBootSplash.hide();
  }, [])

  return (
    <NavigationContainer>
      <Provider store={store}>
        <Theme>
          <Routes />
        </Theme>
      </Provider>
    </NavigationContainer>
  );
}

export default App;