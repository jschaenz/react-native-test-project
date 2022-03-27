import {Image, StyleSheet, Text, View} from 'react-native';

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

export function generateUserView(user: User) {
    return (
        <View style={styles.container}>
            <Image
                style={styles.logo}
                source={{uri: user.pictureUrl.toString()}}
            />
            <Text>
                {user.name}
            </Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        paddingTop: 10,
        flex: 1,
        flexDirection: "row",
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: "center"
    },
    logo: {
        alignSelf: "flex-start",
        width: 30,
        height: 30
    }
});