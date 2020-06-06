// @flow strict

import * as React from 'react'
import { Dimensions, StyleSheet, View, TouchableOpacity } from 'react-native'
import AS from 'react-native-actions-sheet'
import colors from './colors'
import Times from '../assets/times.svg'

const ActionHeader = ({ actionRef }) => (
  <View style={styles.header}>
    {/* eslint-disable-next-line flowtype-errors/show-errors */}
    <TouchableOpacity onPress={() => actionRef.current?.setModalVisible(false)}>
      <Times width={30} height={30} fill={colors.bodyBlack} />
    </TouchableOpacity>
  </View>
)

const ActionSheet = ({ actionRef, children, onClose }: Props) => (
  <AS
    CustomHeaderComponent={<ActionHeader actionRef={actionRef} />}
    containerStyle={styles.container}
    defaultOverlayOpacity={0.5}
    ref={actionRef}
    headerAlwaysVisible={true}
    onClose={onClose}
  >
    {children}
  </AS>
)

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
    height: 0.13 * Dimensions.get('window').height,
    paddingHorizontal: '7%',
  },
  container: {
    backgroundColor: colors.backgroundTan,
  },
})

type Props = {
  actionRef: React.Ref<any>,
  children?: React.Node,
  onClose?: Function,
}

export default ActionSheet
