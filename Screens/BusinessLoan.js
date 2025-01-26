

import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View, StyleSheet, ScrollView } from 'react-native';

export default function BusinessLoan({ navigation }) {
    const [buyStall, setBuyStall] = useState('');
    const [advanceRent, setAdvanceRent] = useState('');
    const [shopAssets, setShopAssets] = useState('');
    const [shopMachinery, setShopMachinery] = useState('');

    const handleSubmit = () => {
        if (!buyStall || !advanceRent || !shopAssets || !shopMachinery) {
            alert('Please fill all the fields!');
            return;
        }

        // Navigate to registration screen
        navigation.navigate('Registration', {
            buyStall,
            advanceRent,
            shopAssets,
            shopMachinery,
        });
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            {/* Heading */}
            <Text style={styles.heading}>Business Loan</Text>

            {/* Loan Details */}
            <View style={styles.loanDetails}>
                <Text style={styles.detailText}>Maximum Loan: PKR 10 Lakh</Text>
                <Text style={styles.detailText}>Loan Period: 5 Years</Text>
            </View>

            {/* Input: Buy Stall */}
            <Text style={styles.label}>Buy Stall</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter amount for Buy Stall"
                value={buyStall}
                onChangeText={setBuyStall}
                keyboardType="numeric"
            />

            {/* Input: Advance Rent for Shop */}
            <Text style={styles.label}>Advance Rent for Shop</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter amount for Advance Rent"
                value={advanceRent}
                onChangeText={setAdvanceRent}
                keyboardType="numeric"
            />

            {/* Input: Shop Assets */}
            <Text style={styles.label}>Shop Assets</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter amount for Shop Assets"
                value={shopAssets}
                onChangeText={setShopAssets}
                keyboardType="numeric"
            />

            {/* Input: Shop Machinery */}
            <Text style={styles.label}>Shop Machinery</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter amount for Shop Machinery"
                value={shopMachinery}
                onChangeText={setShopMachinery}
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
