// @flow strict

import * as React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import colors from './colors'

type Props = {
  title: string,
  subtitle: string,
  disabled: boolean,
  navigation: *,
  navigationPage?: string,
}
const MenuCard = ({
  title,
  subtitle,
  disabled,
  navigation,
  navigationPage,
}: Props) => {
  const styles = StyleSheet.create({
    container: {
      height: '15%',
      width: '100%',
      opacity: disabled ? 0.5 : 1,
    },
    upperMenuBox: {
      position: 'absolute',
      height: '100%',
      width: '100%',
      backgroundColor: colors.menuWhite,
      borderColor: colors.menuBlack,
      borderWidth: 1,
      borderRadius: 8,
      zIndex: 1,
    },
    lowerMenuBox: {
      position: 'absolute',
      height: '100%',
      width: '100%',
      backgroundColor: colors.menuBlack,
      borderColor: colors.menuBlack,
      borderWidth: 1,
      borderRadius: 8,
      zIndex: 0,
      marginTop: 6,
      marginLeft: 6,
    },
    copy: {
      display: 'flex',
      height: '100%',
      width: '92%',
      justifyContent: 'center',
      paddingLeft: '7%',
      zIndex: 3,
    },
    titleText: {
      fontSize: 22,
      letterSpacing: -1,
      color: colors.titleBlack,
      fontFamily: 'YoungSerif',
    },
    subtitleText: {
      marginTop: -1,
      fontSize: 17,
      letterSpacing: -0.5,
      color: colors.titleGrey,
    },
  })

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={
        navigationPage === '' ? null : () => navigation.navigate(navigationPage)
      }
    >
      <View style={styles.copy}>
        <Text style={styles.titleText}>{title}</Text>
        <Text style={styles.subtitleText}>{subtitle}</Text>
      </View>
      <View style={styles.upperMenuBox}></View>
      <View style={styles.lowerMenuBox}></View>
    </TouchableOpacity>
  )
}

export default MenuCard
