import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from "react-native-screens/native-stack";
import {UserOverview} from "./pages/UserOverview";
import {UserDetails} from "./pages/UserDetails";
import {CreateNewUser} from "./pages/CreateNewUser";

/**
 * Made by Johannes Schänzle, Max Weise and Denis Ruf
 */
const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Overview" component={UserOverview}/>
                <Stack.Screen name="Details" component={UserDetails}/>
                <Stack.Screen name="CreateNewUser" component={CreateNewUser}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}