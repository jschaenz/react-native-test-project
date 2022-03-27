import {Button, FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useEffect, useState} from "react";
import {collection, onSnapshot} from "@firebase/firestore";
import db from '../components/Firebase'

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
            <Button title={"Create new User"} onPress={createNewUserPressed}/>
            <FlatList
                data={users}
                renderItem={({item}) => (
                    <TouchableOpacity onPress={() => switchToDetails(item)}>
                        <Text style={styles.item}>{item.name}</Text>
                    </TouchableOpacity>
                )}
                keyExtractor={(item) => item.id}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'stretch'
    },
    item: {
        alignSelf: "stretch"
    }
});