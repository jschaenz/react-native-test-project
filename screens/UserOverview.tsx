import {Button, FlatList, StyleSheet, TouchableOpacity, View} from 'react-native';
import {useEffect, useState} from "react";
import {collection, onSnapshot} from "@firebase/firestore";
import db from '../components/Firebase'
import {generateUserView, User} from "../components/UserUtils";

export const UserOverview = ({navigation}) => {

    const [users, setUsers] = useState([
        {"id": 123, "name": "DB", "email": "asdas", "url": "xdddd"}
    ]);

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

    function switchToDetails(item: any) {
        navigation.navigate("UserDetails", item)
    }

    function createNewUserPressed() {
        navigation.navigate("CreateNewUser")
    }

    return (
        <View style={styles.container}>
            <View style={styles.button}>
                <Button title={"Create new User"} onPress={createNewUserPressed}/>
            </View>

            <FlatList
                data={users}
                renderItem={({item}) => (
                    <TouchableOpacity onPress={() => switchToDetails(item)}>
                        <View>
                            {generateUserView(new User(item.name, item.email, item.url))}
                        </View>
                    </TouchableOpacity>
                )}
                keyExtractor={(item) => item.id}
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