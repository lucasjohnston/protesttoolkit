// @flow strict

import 'react-native-gesture-handler'
import { AppRegistry } from 'react-native'
import App from './App'
import { name as appName } from './app.json'
import { typography } from './components/typography'

typography()

AppRegistry.registerComponent(appName, () => App)
