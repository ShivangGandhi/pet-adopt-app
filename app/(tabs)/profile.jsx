import { View, Text, Pressable, StyleSheet, Alert } from 'react-native';
import React from 'react';
import { useClerk } from '@clerk/clerk-expo';
import * as Linking from 'expo-linking';

export default function Profile() {
    const { signOut } = useClerk();

    const handleLogout = async () => {
        try {
            await signOut();
            // Ensure the session is cleared and redirect to the login page
            Linking.openURL(Linking.createURL('/login'));
        } catch (error) {
            console.error('Logout error', error);
            Alert.alert('Error', 'There was an issue logging out. Please try again.');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Profile</Text>
            <Pressable onPress={handleLogout} style={styles.button}>
                <Text style={styles.buttonText}>Logout</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 24,
        marginBottom: 20,
    },
    button: {
        padding: 14,
        backgroundColor: '#ff4d4d', // Customize as needed
        borderRadius: 8,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
    },
});
