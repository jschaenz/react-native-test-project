import {Image, StyleSheet, Text, View} from 'react-native';

/**
 * user helper Class with basic attributes for serialization/deserialization
 */
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

/**
 * serialization/deserialization into firestore db
 */
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

/**
 * extra view for each user, contains the image and text for proper formatting
 */
export function generateUserView(user: User) {
    return (
        <View style={styles.wrapper}>
            <View style={styles.container}>
                <Image
                    style={styles.logo}
                    source={{uri: user.pictureUrl.toString()}}
                />
                <Text style={styles.text}>
                    {user.name}
                </Text>
            </View>
        </View>
    )
}

/**
 * CSS for user view
 */
const styles = StyleSheet.create({
    container: {
        paddingTop: 10,
        padding: 5,
        flex: 1,
        flexDirection: "row",
        backgroundColor: '#e6e6e6',
        alignItems: 'flex-start',
    },
    logo: {
        alignSelf: "flex-start",
        width: 30,
        height: 30
    },
    wrapper: {
        padding: 2
    },
    text: {
        paddingLeft: 10
    }
});