// @flow strict

import * as React from 'react'
import { StyleSheet, View } from 'react-native'
import MenuCard from './menuCards'
import colors from './colors'

const menuItems = [
  {
    title: 'image scrubber',
    subtitle: 'remove image metadata + blur faces',
    disabled: false,
    navigationPage: 'ImageScrubber',
  },
  {
    title: 'at a protest?',
    subtitle: 'protest-specific help + resources',
    disabled: true,
    navigationPage: '',
  },
  {
    title: 'your virtual bustcard',
    subtitle: 'info to remember in case of arrest',
    disabled: true,
    navigationPage: '',
  },
  {
    title: 'know your rights!',
    subtitle: 'read before you go protesting',
    disabled: true,
    navigationPage: '',
  },
  {
    title: 'educate yourself',
    subtitle: 'movement-suggested resources',
    disabled: true,
    navigationPage: '',
  },
]

const styles = StyleSheet.create({
  padding: {
    height: '4%',
  },
  disabledCopyContainer: {
    height: '100%',
    width: '20%',
    backgroundColor: colors.bodyBlue,
  },
  disabledMenuItems: {
    height: '100%',
    width: '100%',
  },
  container: {
    flexDirection: 'row',
    flex: 1,
  },
})

export default function Menu({ navigation }: *) {
  const components = []
  const disabledComponents = []

  menuItems.forEach((obj, i) => {
    if (obj.disabled) {
      disabledComponents.push(
        <MenuCard
          key={Math.random()}
          title={obj.title}
          subtitle={obj.subtitle}
          disabled={obj.disabled}
          navigationPage={obj.navigationPage}
          navigation={navigation}
        />,
      )
      if (i !== menuItems.length - 1) {
        disabledComponents.push(
          <View key={Math.random()} style={styles.padding} />,
        )
      }
    } else {
      components.push(
        <MenuCard
          key={Math.random()}
          title={obj.title}
          subtitle={obj.subtitle}
          disabled={obj.disabled}
          navigationPage={obj.navigationPage}
          navigation={navigation}
        />,
      )
      if (i !== menuItems.length - 1) {
        components.push(<View key={Math.random()} style={styles.padding} />)
      }
    }
  })

  return (
    <>
      {components}
      <View style={styles.disabledMenuItems}>{disabledComponents}</View>
    </>
  )
}
