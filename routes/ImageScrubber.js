// @flow strict

import * as React from 'react'
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native'
import colors from '../components/colors'
import { useNavigation } from '@react-navigation/native'
import Back from '../assets/back.svg'

export default function ImageScrubber() {
  const navigation = useNavigation()

  return (
    <SafeAreaView style={styles.safeView}>
      <View style={styles.titleView}>
        <Text style={styles.titleText}>image scrubber</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('Home')}
          style={styles.backBtn}
        >
          <Back width={20} height={20} fill={colors.bodyBlack} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  backBtn: {
    paddingBottom: '5%',
  },
  safeView: {
    flex: 1,
    backgroundColor: colors.backgroundWhite,
  },
  titleView: {
    flexDirection: 'column-reverse',
    paddingHorizontal: '7%',
    flexBasis: '13%',
  },
  titleText: {
    fontSize: 30,
    letterSpacing: -1,
    color: colors.titleBlack,
    fontFamily: 'YoungSerif',
  },
})
