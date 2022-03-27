import {StyleSheet, Text, View} from 'react-native';


export class User {
    name: String
    email: String
    pictureUrl: String

    constructor(name: String, email: String, pictureUrl: String) {
        this.name = name;
        this.email = email;
        this.pictureUrl = pictureUrl;
    }

    toString() {
        return this.name + ", " + this.email + ", " + this.pictureUrl
    }
}

export const userConverter = {
    toFirestore: (user: User) => {
        return {
            name: user.name,
            email: user.email,
            url: user.pictureUrl
        }
    },
    fromFirestore: (snapshot: any, options: any) => {
        const data = snapshot.data(options)
        return new User(data.name, data.email, data.pictureUrl)
    }
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