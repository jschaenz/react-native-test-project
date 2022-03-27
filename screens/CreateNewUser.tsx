import {Button, StyleSheet, TextInput, View} from 'react-native';
import {useState} from "react";
import {doc, setDoc} from "@firebase/firestore";
import db from '../utils/Firebase'
import {User, userConverter} from "../utils/UserUtils";

export const CreateNewUser = ({navigation}) => {

    /**
     * states for name, email and url with default values set as current values
     */
    const [name, onChangeName] = useState("")
    const [email, onChangeEmail] = useState("")
    const [url, onChangeUrl] = useState("")

    /**
     * save new user, id is Math.random()
     */
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