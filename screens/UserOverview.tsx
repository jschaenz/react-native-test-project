import {Button, FlatList, StyleSheet, TouchableOpacity, View} from 'react-native';
import {useEffect, useState} from "react";
import {collection, onSnapshot} from "@firebase/firestore";
import db from '../utils/Firebase'
import {generateUserView, User} from "../utils/UserUtils";

export const UserOverview = ({navigation}) => {

    /**
     * Default user if no DB is connected
     */
    const [users, setUsers] = useState([
        {"id": 123, "name": "DB", "email": "asdas", "url": "xdddd"}
    ]);

    /**
     * sample snippet
     */
    useEffect(() => {
            const colRef = collection(db, "users")
            onSnapshot(colRef, (querySnapshot) => {
                const fetchedUsers: any = []
                querySnapshot.forEach((doc) => {
                        const {name, email, url} = doc.data()
                        fetchedUsers.push({
                            id: doc.id,
                            name,
                            email,
                            url
                        })
                    }
                )
                setUsers(fetchedUsers)
            })
        }, []
    )

    /**
     * switch to user details page with selected user(item) as parameter passed to page
     * @param item
     */
    function switchToDetails(item: any) {
        navigation.navigate("UserDetails", item)
    }

    /**
     * switch to create new user page
     */
    function createNewUserPressed() {
        navigation.navigate("CreateNewUser")
    }

    return (
        <View style={styles.container}>
            <View style={styles.button}>
                <Button title={"Create new User"} onPress={createNewUserPressed}/>
            </View>

            <FlatList
                //what data is presented
                data={users}
                //how the data is rendered, in this case with the helper method from UserUtils
                renderItem={({item}) => (
                    <TouchableOpacity onPress={() => switchToDetails(item)}>
                        <View>
                            {generateUserView(new User(item.name, item.email, item.url))}
                        </View>
                    </TouchableOpacity>
                )}
                //how the user are arranged, in this case alphabetically by name
                keyExtractor={(item) => item.name}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    item: {
        alignSelf: "stretch"
    },
    button: {
        alignSelf: "stretch"
    }
});