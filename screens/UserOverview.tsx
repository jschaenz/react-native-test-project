import {Button, FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useEffect, useState} from "react";
import {collection, onSnapshot} from "@firebase/firestore";
import db from '../components/Firebase'

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

export const UserOverview = ({navigation}) => {

    const [users, setUsers] = useState([
        {"id": 123, "name": "NO DB", "email": "asdas", "url": "xdddd"}
    ]);


    useEffect(() => {
            const colRef = collection(db, "users")
            onSnapshot(colRef, (querySnapshot) => {
                const fetchedUsers: any = []
                querySnapshot.forEach((doc) => {
                        const {name, email, picture} = doc.data()
                        fetchedUsers.push({
                            id: doc.id,
                            name,
                            email,
                            picture
                        })
                    }
                )
                setUsers(fetchedUsers)
            })
        }, []
    )


    function switchToDetails(item: any) {
        navigation.navigate("UserDetails", item)
    }

    function createNewUserPressed() {
        navigation.navigate("CreateNewUser")
    }

    return (
        <View style={styles.container}>
            <Button title={"Create new User"} onPress={createNewUserPressed}/>
            <FlatList
                data={users}
                renderItem={({item}) => (
                    <TouchableOpacity onPress={() => switchToDetails(item)}>
                        <Text style={styles.item}>{item.name}</Text>
                    </TouchableOpacity>
                )}
                keyExtractor={(item) => item.name}
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
    item: {}
});