// @flow strict

import React from 'react'
import { View, StyleSheet, Button } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import realm from '../components/realm'

export default function DBClear() {
  const navigation = useNavigation()

  return (
    <View style={styles.view}>
      <Button
        title="Remove DB"
        onPress={() => {
          realm.beginTransaction()
          realm.deleteAll()
          realm.commitTransaction()
        }}
      />
      <Button title="Go home" onPress={() => navigation.popToTop()} />
    </View>
  )
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
