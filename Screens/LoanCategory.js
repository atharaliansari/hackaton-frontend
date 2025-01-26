import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';

export default function () {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            {/* Category Button */}
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('Category')}
            >
                <Text style={styles.buttonText}>View Categories</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EFEFEF', // Light background
        justifyContent: 'center', // Center elements vertically
        alignItems: 'center', // Center elements horizontally
        padding: 20,
    },
    heading: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#4CAF50', // Green color for heading
        marginBottom: 30,
        textAlign: 'center',
    },
    button: {
        backgroundColor: '#007BFF', // Blue button color
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 10,
        elevation: 5, // Shadow for Android
        shadowColor: '#000', // Shadow for iOS
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
    },
    buttonText: {
        color: '#FFF', // White text
        fontSize: 18,
        fontWeight: '600',
        textAlign: 'center',
    },
});

