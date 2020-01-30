import React, {useContext} from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import {Text, View, TouchableOpacity} from 'react-native'
import {Card} from 'react-native-elements'
import ComConst from '../Utils/ComConst';
import ComStyles from '../pages/css/ComStyles'

export default class TaskItem extends React.Component {
  render () {
    const data = this.props.data
    const {icon} = data
    let iconArr = icon.split('/')
    let iconNode 
    if (iconArr) {
      switch (iconArr[0]) {
        case 'AntDesign': 
          iconNode = <AntDesign name={iconArr[1]} size={40} style={{color: ComConst.THEME_COLOR}} />
          break
        default:
      }
    }

    return <Card containerStyle={this.props.isLast ? {marginBottom: 70} : {}}>
      <TouchableOpacity 
        style={ComStyles.taskItemCard}
        activeOpacity={1}
        onPress={() => {
          this.props.router('TaskDone', this.props.data)
        }}
      >
        <View style={ComStyles.taskItemIcon}>
          {iconNode}
        </View>
        <View style={ComStyles.taskItemText}>
          <Text style={ComStyles.taskItemTitle}>{data.title}</Text>
          <Text style={ComStyles.taskItemSub}>已完成目标<Text style={ComStyles.taskItemCount}>{data.count}</Text>次</Text>
        </View>
        <View style={ComStyles.taskItemIcon}>
          <AntDesign
            name={'rightcircle'}
            size={25}
            style={{color: ComConst.THEME_COLOR}}
          />
        </View>
      </TouchableOpacity>
    </Card>
  }
}
