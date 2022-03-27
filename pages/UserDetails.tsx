import { StyleSheet, Text, View } from 'react-native';

export default function UserDetails() {
    return (
        <View style={styles.container}>
            <Text>User Detail Page</Text>
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
});