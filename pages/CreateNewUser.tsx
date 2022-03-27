import { StyleSheet, Text, View } from 'react-native';

export const CreateNewUser = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text>Create New User Page</Text>
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