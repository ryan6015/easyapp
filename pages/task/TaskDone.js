import React from 'react'
import {Text, View, ScrollView, ImageBackground} from 'react-native'
import ComStyles from '../css/ComStyles'
import {Image, Avatar, Button} from 'react-native-elements'
import ComConst from '../../Utils/ComConst'
import Storage from '../../Utils/Storage'
import Img from '../image/Img'
import ComUtil from '../../Utils/ComUtil'

export default class TaskDone extends React.Component {
  constructor (props) {
    super(props)
    let {params} = props.navigation.state
    let btnText = '点击完成打卡'
    let btnDisabled = false
    const nowDate = new Date()
    if (params.lastTime) {
      const lastDate = ComUtil.stringToDate(params.lastTime)
      // 如果已经打卡
      if (lastDate.getFullYear() === nowDate.getFullYear() &&
        lastDate.getMonth() === nowDate.getMonth() &&
        lastDate.getDate() === nowDate.getDate()) {
          btnText = '已完成打卡'
          btnDisabled = true
        }
    }
    const day = nowDate.getDay()
    if (params.cycle.indexOf(day) === -1) {
      btnText = '无需打卡'
      btnDisabled = true
    }

    this.state = {
      btnText,
      btnDisabled
    }
  }
  static navigationOptions =({navigation}) => ({        
    title: navigation.state.params.title
  })

  onPressHandler () {

    this.setState({
      btnText: '已完成打卡',
      btnDisabled: true
    })
  }
  render () {
    const {setParams, state} = this.props.navigation
    const {params} = state
    return <View style={ComStyles.container}>
      <ImageBackground
        style={[ComStyles.container, {alignItems: 'center', justifyContent: 'center'}]}
        source={Img.SUN}
      >
        <Button
          title={this.state.btnText}
          disabled={this.state.btnDisabled}
          buttonStyle={{width: 200, height: 50}}
          titleStyle={{fontSize: 20}}
          onPress={() => {
            this.onPressHandler()
          }}
        />
      </ImageBackground>
    </View>
  }
}
