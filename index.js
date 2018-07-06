import { AppRegistry } from 'react-native';
import App from './src/App';

export { default as firebase } from 'firebase';

console.ignoredYellowBox = [
  'Setting a timer'
  ];

AppRegistry.registerComponent('project01', () => App);
