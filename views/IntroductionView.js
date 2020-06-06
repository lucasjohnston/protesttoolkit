// @flow strict

import * as React from 'react'
import { Dimensions, StyleSheet, Text, View, Linking } from 'react-native'
import Fist from '../assets/fist.svg'
import colors from '../components/colors'

export default function IntroductionView() {
  return (
    <>
      <View style={styles.view}>
        <Text style={styles.subtitle}>welcome to your</Text>
        <Text style={styles.title}>protest toolkit</Text>
        <Text style={styles.body}>
          {`this toolkit was made to help protestors with a number of handy tools - from a virtual bustcard to image scrubber to remove faces from your protest photos!\n\n`}
          <Text style={styles.bold}>
            this app doesn’t track you or collect any of your data
          </Text>
          {` - nothing ever leaves your device, it works offline, and everyone can view its code (and help me continue building it!) at `}
          <Text
            style={styles.link}
            onPress={() => Linking.openURL('https://protesttoolkit.com')}
          >
            protesttoolkit.com
          </Text>
        </Text>
      </View>
      <View style={styles.backgroundView}>
        <Fist width={258.33} height={367.78} />
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  view: {
    height: 0.8 * Dimensions.get('window').height,
    flex: 1,
    paddingHorizontal: '7%',
    paddingTop: '10%',
    zIndex: 1,
  },
  title: {
    fontSize: 36,
    letterSpacing: -1,
    color: colors.titleBlack,
    fontFamily: 'YoungSerif',
    marginTop: -5,
  },
  subtitle: {
    fontSize: 31,
    letterSpacing: -1,
    color: colors.titleGrey,
    fontFamily: 'YoungSerif',
  },
  body: {
    width: 0.8 * Dimensions.get('window').width,
    color: colors.bodyBlack,
    fontFamily: 'Lora-Regular',
    fontSize: 20,
    letterSpacing: -0.5,
    marginTop: '15%',
  },
  link: {
    fontFamily: 'Lora-Regular',
    fontSize: 20,
    letterSpacing: -0.5,
    color: colors.bodyBlue,
  },
  bold: {
    fontFamily: 'Lora-Bold',
    fontSize: 20,
    letterSpacing: -0.5,
    color: colors.bodyBlack,
  },
  backgroundView: {
    zIndex: 0,
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 258.33,
  },
})
