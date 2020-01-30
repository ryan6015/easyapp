import React from 'react'
import {createStackNavigator} from 'react-navigation-stack'
import {createBottomTabNavigator, createMaterialTopTabNavigator} from 'react-navigation-tabs'
import {createSwitchNavigator} from 'react-navigation'
import WelcomePage from '../pages/Welcome'
import JournalPage from '../pages/journal/JournalPage'
import IndexPage from '../pages/indexPage/IndexPage'
import MyPage from '../pages/mypage/MyPage'
import TaskPage from '../pages/task/TaskPage'
import TaskDone from '../pages/task/TaskDone'
import AddTask from '../pages/task/AddTask'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Entypo from 'react-native-vector-icons/Entypo'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

const tabBarLabelFontSize = 26

const switchNav = createStackNavigator({
  // 欢迎页
  WelcomePage: {
    screen: WelcomePage,
    navigationOptions: {
      header: null
    }
  }
})

const mainNav = createBottomTabNavigator({
  TaskPage: {
    screen: TaskPage,
    navigationOptions: {
      tabBarLabel: '打卡',
      tabBarIcon: ({tintColor, focused}) => (
        <FontAwesome
          name={'check-square'}
          size={tabBarLabelFontSize}
          style={{color: tintColor}}
        />
      ),
    }
  },
  IndexPage: {
    screen: IndexPage,
    navigationOptions: {
      tabBarLabel: '指标',
      tabBarIcon: ({tintColor, focused}) => (
        <FontAwesome
          name={'bar-chart'}
          size={tabBarLabelFontSize}
          style={{color: tintColor}}
        />
      ),
    }
  },
  JournalPage: {
    screen: JournalPage,
    navigationOptions: {
      tabBarLabel: '日记',
      tabBarIcon: ({tintColor, focused}) => (
        <MaterialIcons
          name={'book'}
          size={tabBarLabelFontSize}
          style={{color: tintColor}}
        />
        ),
    }
  },
  MyPage: {
    screen: MyPage,
    navigationOptions: {
      tabBarLabel: '我的',
      tabBarIcon: ({tintColor, focused}) => (
          <Entypo
            name={'user'}
            size={tabBarLabelFontSize}
            style={{color: tintColor}}
          />
      ),
    }
  }
})

const pages = createStackNavigator({
  Home: {
    screen: mainNav,
    navigationOptions: {
      header: null
    }
  },
  // 任务打卡页面
  TaskDone: {
    screen: TaskDone,
    navigationOptions: {
      title: '打卡'
    }
  },
  AddTask: {
    screen: AddTask,
    navigationOptions: {
      title: '添加任务'
    }
  }
})

export const AppStackNavigator = createSwitchNavigator({
  initPage: switchNav,
  mainNav: pages
},{
  navigationOptions: {
    header: null
  }
})