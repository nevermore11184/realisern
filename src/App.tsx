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
import {NativeModules, Platform} from 'react-native';

import RootNavigation from './navigation/RootNavigation';
import AppHOC from './AppHOC';

const App: React.FC = () => {
  useEffect(() => {
    SplashScreen.hide();
    if (Platform.OS === 'ios') {
      NativeModules.Counter.getCount((value: string) => {
        console.log(value);
      });
    }
  }, []);

  return <RootNavigation />;
};

export default AppHOC(App);
