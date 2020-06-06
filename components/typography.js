// @flow strict

import React from 'react'
import { Text, StyleSheet } from 'react-native'

export const typography = () => {
  // eslint-disable-next-line flowtype-errors/show-errors
  const oldTextRender = Text.render
  // eslint-disable-next-line flowtype-errors/show-errors
  Text.render = function (...args) {
    const origin = oldTextRender.call(this, ...args)
    return React.cloneElement(origin, {
      style: [styles.defaultText, origin.props.style],
    })
  }
}

const styles = StyleSheet.create({
  defaultText: {
    fontFamily: 'Lora-Regular',
  },
})
