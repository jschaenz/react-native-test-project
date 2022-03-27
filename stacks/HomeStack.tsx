import {UserDetails} from "../screens/UserDetails";
import {UserOverview} from "../screens/UserOverview";
import {createAppContainer} from 'react-navigation'
import {CreateNewUser} from "../screens/CreateNewUser";
import createStackNavigator from "react-native-screens/createNativeStackNavigator";

const screens = {
    UserOverview: {
        screen: UserOverview
    },
    UserDetails: {
        screen: UserDetails
    },
    CreateNewUser: {
        screen:  CreateNewUser
    }
}
const HomeStack = createStackNavigator(screens)

export default createAppContainer(HomeStack)