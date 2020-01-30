import {
  StyleSheet
} from 'react-native'
import ComConst from '../../Utils/ComConst';

export default StyleSheet.create({
  container: {
    flex: 1
  },
  text: {
    fontSize: 30
  },
  //公共样式
  noData: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  noDataText: {
    color: '#999',
    fontSize: 18,
  },
  // 欢迎页样式
  welcontainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  weltext: {
    paddingTop: 35,
    height: 120,
    fontSize: 26,
    alignItems: 'center',
    justifyContent: 'center'
  },
  // 打卡页面样式
  taskAdd: {
    position: 'absolute',
    bottom: 10,
    right: 10
  },
  taskItemCard: {
    height: 45,
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },
  taskItemIcon: {
    width: 45,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center'
  },
  taskItemText: {
    height: 45,
    flex: 1,
    marginLeft: 10,
    justifyContent: 'space-between'
  },
  taskItemTitle: {
    fontSize: 16
  },
  taskItemSub: {
    color: '#999'
  },
  taskItemCount: {
    color: ComConst.THEME_COLOR,
    fontWeight: 'bold'
  }
})