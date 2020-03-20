/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import 'react-native-gesture-handler';
import SplashScreen from 'react-native-splash-screen';
import React, {useEffect} from 'react';

import RootNavigation from './navigation/RootNavigation';
import AppHOC from './AppHOC';

const App: React.FC = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return <RootNavigation />;
};

export default AppHOC(App);
