import React from 'react';
import {
  StatusBar,
  SafeAreaView
} from 'react-native';

import Themes from './utils/themes'
import { ThemeProvider } from 'styled-components'

import StoryBook from '../storybook'
import WeatherPage from './pages/Weather'

import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reducers from './reducers'

import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(reducers, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(rootSaga)

export default () => {
  return (
    <>
      <Provider store={store}>
        <ThemeProvider theme={Themes.light}>
          <SafeAreaView style={{flex: 0, backgroundColor: Themes.light.colors.primaryColor}}/>
          <SafeAreaView style={{ flex: 1, backgroundColor: Themes.light.colors.backgroundColor}}>
            <StatusBar barStyle="light-content" />
            {/* <StoryBook/> */}
            <WeatherPage/>
          </SafeAreaView>
        </ThemeProvider>
      </Provider>
    </>
  );
};
