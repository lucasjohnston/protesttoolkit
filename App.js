// @flow strict

import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Home from './routes/Home'
import DBClear from './routes/DBClear'
import ImageScrubber from './routes/ImageScrubber'

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="DBClear" component={DBClear} />
        <Stack.Screen name="ImageScrubber" component={ImageScrubber} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
