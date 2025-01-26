import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';

export default function Category() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            {/* Heading */}
            <Text style={styles.heading}>Loan Category</Text>

            {/* Loan Options */}
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('BusinessLoan')}>
                <Text style={styles.buttonText}>Business Loan</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('ConstructionLoan')}>
                <Text style={styles.buttonText}>Construction Loan</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('EducationLoan')}>
                <Text style={styles.buttonText}>Education Loan</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('WeddingLoan')}>
                <Text style={styles.buttonText}>Wedding Loan</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5', // Light gray background
        padding: 20,
        justifyContent: 'center', // Center items vertically
        alignItems: 'center', // Center items horizontally
    },
    heading: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#333', // Dark gray color
        textAlign: 'center',
    },
    button: {
        backgroundColor: '#4CAF50', // Green button color
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 8,
        marginVertical: 10,
        width: '90%',
        alignItems: 'center', // Center text
        elevation: 5, // Add shadow for Android
        shadowColor: '#000', // Add shadow for iOS
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
    },
    buttonText: {
        color: '#FFF', // White text
        fontSize: 18,
        fontWeight: '600',
    },
});
