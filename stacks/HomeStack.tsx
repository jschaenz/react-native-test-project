import {UserDetails} from "../screens/UserDetails";
import {UserOverview} from "../screens/UserOverview";
import {createAppContainer} from 'react-navigation'
import {CreateNewUser} from "../screens/CreateNewUser";
import createStackNavigator from "react-native-screens/createNativeStackNavigator";

const screens = {
    UserOverview: {
        screen: UserOverview,
        navigationOptions: {
            title: "Overview"
        }
    },
    UserDetails: {
        screen: UserDetails,
        navigationOptions: {
            title: "Details"
        }
    },
    CreateNewUser: {
        screen:  CreateNewUser,
        navigationOptions: {
            title: "Create new User"
        }
    }
}
const HomeStack = createStackNavigator(screens)

export default createAppContainer(HomeStack)