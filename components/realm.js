// @flow strict

import Realm from 'realm'

class IntroSheet extends Realm.Object {}
IntroSheet.schema = {
  name: 'IntroSheet',
  properties: {
    hasBeenDismissed: { type: 'bool' },
  },
}

export default new Realm({ schema: [IntroSheet.schema] })
