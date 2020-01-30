import React from 'react'
import {Text, View} from 'react-native'
import ComStyles from '../css/ComStyles'

export default class MyPage  extends React.Component { 
  render () {
    return <View style={ComStyles.container}>
      <Text style={ComStyles.text}>MyPage</Text>
    </View>
  }
}

