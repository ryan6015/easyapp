import React from 'react'
import {Text, View, ScrollView} from 'react-native'
import ComStyles from '../css/ComStyles'
import {Image, Avatar} from 'react-native-elements'
import ComConst from '../../Utils/ComConst'
import TaskItem from '../../components/TaskItem'
import Storage from '../../Utils/Storage'
import {Dimensions} from 'react-native'
import Img from '../image/Img';
import ComUtil from '../../Utils/ComUtil';
const {width} = Dimensions.get('window')

export default class TaskPage  extends React.Component { 
  constructor (props) {
    super(props)
    this.state = {
      dataList: []
    }
  }

  setData () {
    let data = []
    for (let i = 0; i < 10; i++) {
      data.push({
        gid: ComUtil.uuid(),
        title: '打卡任务' + i,
        cycle: [0, 1, 2, 3, 4, 5, 6],
        icon: 'AntDesign/notification',
        count: 0,
        lastTime: ''
      })
    }
    Storage.save(ComConst.TASK_DATA, data)
  }

  findData () {
    let that = this
    Storage.get(ComConst.TASK_DATA).then(
      (res) => {
        that.setState({
          dataList: res || []
        })
      }
    )
  }

  componentDidMount () {
    this.setData()
    this.findData()
  }

  render () {
    let taskList
    let len = this.state.dataList.length
    const {navigation} = this.props
    if (len > 0) {
      taskList = this.state.dataList.map((item, index) => {
        let isLast = false
        if (index === len - 1) {
          isLast = true
        }
        return <TaskItem data={item} key={index} isLast={isLast} router={navigation.navigate} />
      })
    } else {
      taskList = <View style={ComStyles.noData}><Text style={ComStyles.noDataText}>暂无数据</Text></View>
    }
    
    return <View style={ComStyles.container}>
      <Image
        source={Img.SUN}
        style={{width, height: 150}}
      />
      <ScrollView>
        {taskList}
      </ScrollView>
      <Avatar rounded
        size="medium"
        icon={{name: 'plus', type: 'font-awesome', color: '#fff'}}
        containerStyle={ComStyles.taskAdd}
        overlayContainerStyle={{backgroundColor: ComConst.THEME_COLOR}}
        onPress={() => {
          navigation.navigate('AddTask')
        }}
      />
    </View>
  }
}

