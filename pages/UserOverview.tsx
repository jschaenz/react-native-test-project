import {Button, FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import UserDetails from "./UserDetails";
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from "react-native-screens/native-stack";

/**
 * retrieve the current list of users from a repository.
 *
 * For each user, you should show the picture (as a small round avatar) and the
 * name of the user.
 *
 * Each user should be selectable, i.e. is a user is pressed, a new screen will be
 * shown with the details of the user.
 *
 * Include a button to create new users (in which case, the Create New User
 * screen will be opened)
 * (Similar to this example, but with a different photo for each user, and you do
 * not need to show the email)
 */


function switchToDetails() {
    return UserDetails
}

function createNewUserPressed() {
}

const kampf = [
    {name: "denis", key: "1"},
    {name: "max", key: "2"},
    {name: "johannes", key: "3"}
]


export default function UserOverview() {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>
                Users List
            </Text>
            <Button title={"Create new User"} onPress={createNewUserPressed}/>
            <FlatList
                data={kampf}
                renderItem={({item}) => (
                    <TouchableOpacity onPress={() => switchToDetails()}>
                        <Text style={styles.item}>{item.name}</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    header: {
        fontWeight: "bold",
        fontSize: 20
    },
    item: {}
});