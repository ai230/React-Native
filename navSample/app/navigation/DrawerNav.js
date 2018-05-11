import { DrawerNavigator } from 'react-navigation'
import { StackNavigator } from 'react-navigation'
import Screen1 from '../screens/screen1'
import Screen2 from '../screens/screen2'


const StackScreen1 = StackNavigator({
    Screen1: {
        screen: Screen1
    }
})
const StackScreen2 = StackNavigator({
    Screen2: {
        screen: Screen2
    }
})

export default Drawer = DrawerNavigator({
    Screen1: {
        screen: Screen1
    },
    Screen2: {
        screen: Screen2
    }
}, {
        drawerPosition: 'right'
    })