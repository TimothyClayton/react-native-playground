// full code here --> https://github.com/bizz84/redux-navigation-color-picker
import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import AppReducer from './src/reducers/AppReducer';
import AppWithNavigationState from './src/components/AppNavigator';

class AwesomeProjectApp extends React.Component {
  store = createStore(AppReducer);

  render() {
    return (
      <Provider store={this.store}>
        <AppWithNavigationState />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProjectApp);

export default AwesomeProjectApp;
