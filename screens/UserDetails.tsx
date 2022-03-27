import {Alert, Button, StyleSheet, TextInput, View} from 'react-native';
import {useState} from "react";
import {deleteDoc, doc, setDoc} from "@firebase/firestore";
import db from "../components/Firebase";
import {User, userConverter} from "../components/UserComponent";

export const UserDetails = ({navigation}) => {

    const [name, onChangeName] = useState(navigation.getParam("name"))
    const [email, onChangeEmail] = useState(navigation.getParam("email"))
    const [url, onChangeUrl] = useState(navigation.getParam("url"))

    async function saveUser() {
        const ref = doc(db, "users", name + email + url).withConverter(userConverter)
        await setDoc(ref, new User(name, email, url))
            .then(
                navigation.navigate("UserOverview")
            ).catch(
                err => console.log(err)
            )
    }

    function deleteUserPopup() {
        Alert.alert(
            "Confirm Delete",
            "Do you want to delete this User?",
            [
                {
                    text: "Cancel",
                    style: "cancel"
                },
                {
                    text: "Confirm",
                    onPress: () => deleteUser(),
                    style: "destructive"
                }
            ],
            {
                cancelable: true
            }
        )
    }

    async function deleteUser() {
        const ref = doc(db, "users", name + email + url).withConverter(userConverter)
        await deleteDoc(ref)
            .then(
                navigation.navigate("UserOverview")
            ).catch(
                err => console.log(err)
            )
    }

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                onChangeText={onChangeName}
                value={name}
                placeholder="Name"
            />
            <TextInput
                style={styles.input}
                onChangeText={onChangeEmail}
                value={email}
                placeholder="Email"
                keyboardType="numeric"
            />
            <TextInput
                style={styles.input}
                onChangeText={onChangeUrl}
                value={url}
                placeholder={"URL"}
                keyboardType="numeric"
            />
            <Button title={"Save"} onPress={saveUser}/>
            <Button title={"Delete User"} onPress={deleteUserPopup} color="#FF0000"/>
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
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    }
});