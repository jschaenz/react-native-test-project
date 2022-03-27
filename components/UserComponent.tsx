import {StyleSheet, Text, View} from 'react-native';


class User {
    constructor(name: String, email: String, pictureUrl: String) {
        this.name = name;
        this.email = email;
        this.pictureUrl = pictureUrl;
    }
    name: String
    email: String
    pictureUrl: String
}

export default function () {
    return (
        <View style={styles.container}>
            <Text>
                User Component
            </Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});