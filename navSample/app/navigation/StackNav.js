import { StackNavigator } from 'react-navigation'
import Screen1 from '../screens/screen1'
import Screen2 from '../screens/screen2'

export default StackNav = StackNavigator({
    Screen1: {
        screen: Screen1,
        navigationOptions: () => ({
            title: 'Screen1',
            headerStyle: {
                backgroundColor: 'red'
            }
        })
    },
    Screen2: {
        screen: Screen2,
        navigationOptions: () => ({
            title: 'Screen2',
            headerStyle: {
                backgroundColor: 'red'
            }
        })
    }
}, {
        initialRouteName: 'Screen2'
    })