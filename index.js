import { AppRegistry } from 'react-native';
import { default as firebase } from 'firebase';
import App from './src/App';

console.ignoredYellowBox = [
  'Setting a timer'
  ];

AppRegistry.registerComponent('project01', () => App);
