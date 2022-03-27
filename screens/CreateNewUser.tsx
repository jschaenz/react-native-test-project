import {Button, StyleSheet, TextInput, View} from 'react-native';
import {useState} from "react";
import {doc, setDoc} from "@firebase/firestore";
import db from '../components/Firebase'
import {User, userConverter} from "../components/UserComponent";

export const CreateNewUser = ({navigation}) => {

    const [name, onChangeName] = useState("")
    const [email, onChangeEmail] = useState("")
    const [url, onChangeUrl] = useState("")

    async function saveUser() {
        const ref = doc(db, "users", Math.random().toString()).withConverter(userConverter)
        await setDoc(ref, new User(name, email, url))
        navigation.navigate("UserOverview")
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
            />
            <TextInput
                style={styles.input}
                onChangeText={onChangeUrl}
                value={url}
                placeholder="URL"
            />
            <Button title={"Save"} onPress={saveUser}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'stretch'
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    }
});