import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View, StyleSheet, ScrollView } from 'react-native';

export default function EducationLoan() {
    const [universityFees, setUniversityFees] = useState('');
    const [childFeesLoan, setChildFeesLoan] = useState('');

    const handleSubmit = () => {
        // Example: Handle form submission
        console.log({
            universityFees,
            childFeesLoan,
        });
        alert('Form submitted successfully!');
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            {/* Heading */}
            <Text style={styles.heading}>Education Loan</Text>

            {/* Loan Details */}
            <View style={styles.loanDetails}>
                <Text style={styles.detailText}>Maximum Loan: PKR 10 Lakh</Text>
                <Text style={styles.detailText}>Loan Period: 5 Years</Text>
            </View>

            {/* Input: University Fees */}
            <Text style={styles.label}>University Fees</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter amount for University Fees"
                value={universityFees}
                onChangeText={setUniversityFees}
                keyboardType="numeric"
            />

            {/* Input: Child Fees Loan */}
            <Text style={styles.label}>Child Fees Loan</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter amount for Child Fees Loan"
                value={childFeesLoan}
                onChangeText={setChildFeesLoan}
                keyboardType="numeric"
            />

            {/* Submit Button */}
            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#F5F5F5',
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    heading: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#4CAF50',
        marginBottom: 30,
        textAlign: 'center',
    },
    loanDetails: {
        marginBottom: 30,
        padding: 10,
        backgroundColor: '#E8F5E9',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#C8E6C9',
        width: '100%',
    },
    detailText: {
        fontSize: 16,
        fontWeight: '600',
        color: '#2E7D32',
        marginBottom: 5,
    },
    label: {
        fontSize: 16,
        fontWeight: '600',
        color: '#333',
        alignSelf: 'flex-start',
        marginBottom: 5,
    },
    input: {
        width: '100%',
        backgroundColor: '#FFF',
        padding: 15,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#DDD',
        marginBottom: 20,
        fontSize: 16,
        color: '#333',
    },
    button: {
        backgroundColor: '#4CAF50',
        paddingVertical: 15,
        paddingHorizontal: 40,
        borderRadius: 8,
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
    buttonText: {
        color: '#FFF',
        fontSize: 18,
        fontWeight: '600',
    },
});
