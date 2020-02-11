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
import { connect } from 'react-redux'
import reducers from './reducers'

import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(reducers, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(rootSaga)


const ThemedApp = connect(({ theme }) => ({ theme }))(({ theme }) => {
  
  return (
    <ThemeProvider theme={Themes[theme.selectedTheme]}>
      <SafeAreaView style={{flex: 0, backgroundColor: Themes[theme.selectedTheme].colors.primaryColor}}/>
      <SafeAreaView style={{ flex: 1, backgroundColor: Themes[theme.selectedTheme].colors.backgroundColor}}>
        <StatusBar barStyle="light-content" />
        {/* <StoryBook/> */}
        <WeatherPage/>
      </SafeAreaView>
    </ThemeProvider>
  )
})



export default () => {
  return (
    <>
      <Provider store={store}>
        <ThemedApp/>
      </Provider>
    </>
  );
};
