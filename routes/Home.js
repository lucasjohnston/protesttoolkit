// @flow strict

import * as React from 'react'
import { SafeAreaView, View, Text, StyleSheet } from 'react-native'
import IntroductionView from '../views/IntroductionView'
import ActionSheet from '../components/actionSheet'
import Menu from '../components/menuGenerator'
import colors from '../components/colors'
import realm from '../components/realm'
import { useNavigation } from '@react-navigation/native'

const actionSheetRef = React.createRef()

export default function Home() {
  const navigation = useNavigation()

  React.useEffect(() => {
    if (realm.objects('IntroSheet').length < 1) {
      console.log('first')
      actionSheetRef.current?.setModalVisible()
    } else {
      console.log('not first')
    }
  })

  return (
    <SafeAreaView style={styles.safeView}>
      <View style={styles.titleView}>
        <Text
          style={styles.titleText}
          onPress={() => navigation.navigate('DBClear')}
        >
          your protest toolkit
        </Text>
      </View>

      <View style={styles.menuView}>
        <Menu navigation={navigation} />
      </View>

      <View style={styles.footerView}>
        <Text style={styles.footerText}>
          protesttoolkit.com ·{' '}
          {/* eslint-disable-next-line react-native/no-inline-styles */}
          <Text style={{ opacity: 0.8 }}>made by @lucasjohnston</Text>
        </Text>
      </View>

      <ActionSheet
        actionRef={actionSheetRef}
        onClose={() =>
          realm.write(() => {
            realm.create('IntroSheet', { hasBeenDismissed: true })
          })
        }
      >
        <IntroductionView />
      </ActionSheet>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
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
  footerText: {
    fontSize: 17,
    letterSpacing: -0.5,
    color: colors.bodyBlue,
  },
  menuView: {
    marginTop: '11%',
    flexBasis: '70%',
    paddingHorizontal: '7%',
  },
  footerView: {
    flexDirection: 'column-reverse',
    paddingHorizontal: '7%',
  },
})
