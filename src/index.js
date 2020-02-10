import React from 'react';
import {
  StatusBar,
} from 'react-native';

import Themes from './utils/themes'
import { ThemeProvider } from 'styled-components'
import StoryBook from '../storybook'

export default () => {
  return (
    <>
      <ThemeProvider theme={Themes.light}>
        <StatusBar barStyle="dark-content" />
        <StoryBook/>
      </ThemeProvider>
    </>
  );
};
