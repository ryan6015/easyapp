import React from 'react'
import {Text, View} from 'react-native'
import ComStyles from './css/ComStyles'
import NavigationUtil from '../navigators/NavigationUtil'
import {Image} from 'react-native-elements'
import {Dimensions} from 'react-native'
import Img from './image/Img';
const {width, height} = Dimensions.get('window')

export default class WelcomePage  extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      imgWidth: 400,
      imgHeight: 700
    }
  }
  /**
   *  计算图片大小
   */
  setImageSize () {
    this.setState({
      imgWidth: width,
      imgHeight: height - 120
    })
  }
  componentDidMount () {
    this.setImageSize()
    this.timer = setTimeout(() => {
      NavigationUtil.resetToHomePage(this.props)
    }, 2000);
  }
  componentWillUnmount () {
    this.timer && clearTimeout(this.timer)
  }
  
  render () {
    return <View style={ComStyles.welcontainer}>
      <Image
        source={Img.SUN}
        style={{width: this.state.imgWidth, height: this.state.imgHeight}}
      />
      <Text style={ComStyles.weltext}>Hi,欢迎</Text>
    </View>
  }
}
