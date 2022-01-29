import { LogBox } from 'react-native';
import Reactotron, { asyncStorage }  from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';

if (__DEV__) {
  Reactotron
    .useReactNative() // add all built-in react native plugins
    .use(reactotronRedux())
    .use(asyncStorage()) 
    .connect() // l

  Reactotron.clear();
  console.warn = Reactotron.log;
  console.log = Reactotron.log;
  LogBox.ignoreAllLogs();
}