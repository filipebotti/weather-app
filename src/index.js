import React from 'react';
import {
  StatusBar,
  SafeAreaView
} from 'react-native';

import Themes from './utils/themes'
import { ThemeProvider } from 'styled-components'
import StoryBook from '../storybook'
import WeatherPage from './pages/Weather'

export default () => {
  return (
    <>
      <ThemeProvider theme={Themes.light}>
        <SafeAreaView style={{flex: 0, backgroundColor: Themes.light.colors.primaryColor}}/>
        <SafeAreaView style={{ flex: 1, backgroundColor: Themes.light.colors.backgroundColor}}>
          <StatusBar barStyle="light-content" />
          {/* <StoryBook/> */}
          <WeatherPage/>
        </SafeAreaView>
      </ThemeProvider>
    </>
  );
};
