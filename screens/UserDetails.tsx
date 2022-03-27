import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import {useState} from "react";

export const UserDetails = ({ navigation }) => {

    const [name, onChangeName] = useState("")
    const [email, onChangeEmail] = useState("")
    const [url, onChangeUrl] = useState("")

    function saveUser() {

    }

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                onChangeText={onChangeName}
                value={navigation.getParam("name")}
                placeholder="Name"
            />
            <TextInput
                style={styles.input}
                onChangeText={onChangeEmail}
                value={navigation.getParam("email")}
                placeholder="Email"
                keyboardType="numeric"
            />
            <TextInput
                style={styles.input}
                onChangeText={onChangeUrl}
                value={navigation.getParam("url")}
                placeholder={"URL"}
                keyboardType="numeric"
            />
            <Button title={"Save"} onPress={saveUser()}/>
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