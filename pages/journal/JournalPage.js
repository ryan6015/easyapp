import React from 'react'
import {Text, View} from 'react-native'
import ComStyles from '../css/ComStyles'

export default class JournalPage  extends React.Component { 
  render () {
    return <View style={ComStyles.container}>
      <Text style={ComStyles.text}>JournalPage</Text>
    </View>
  }
}

