import React from 'react'
import { createBottomTabNavigator, StackNavigator } from 'react-navigation'
import { Icon } from 'react-native-elements';
import Screen1 from '../screens/screen1'
import Screen2 from '../screens/screen2'

export default TabNav = createBottomTabNavigator({
    Screen1: {
        screen: Screen1,
        navigationOptions: {
            tabBarLabel: "Home",
            tabBarIcon: ({ tintColor }) =>
                <Icon name="home" size={25} color={tintColor} />
        }
    },
    Screen2: {
        screen: Screen2,
        navigationOptions: {
            tabBarLabel: "Home1",
            tabBarIcon: ({ tintColor }) =>
                <Icon name="list" size={25} color={tintColor} />
        }
    }
})