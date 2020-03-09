import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Pages from './pages';
import FlashMessage from 'react-native-flash-message';

export default function App() {
  return (
    <Provider store={store}>
      <Pages />
      <FlashMessage position="top"></FlashMessage>
    </Provider>
  );
}
