// import React, { useState } from 'react';
// import { Text, TextInput, TouchableOpacity, View, StyleSheet, ScrollView } from 'react-native';

// export default function ConstructionLoan() {
//     const [structure, setStructure] = useState('');
//     const [finishing, setFinishing] = useState('');
//     const [loan, setLoan] = useState('');

//     // const handleSubmit = async () => {
//     //     try {
//     //         const response = await fetch('http://localhost:5000/submit-construction-loan', {
//     //             method: 'POST',
//     //             headers: {
//     //                 'Content-Type': 'application/json',
//     //             },
//     //             body: JSON.stringify({
//     //                 structure,
//     //                 finishing,
//     //                 loan,
//     //             }),
//     //         });
    
//     //         const data = await response.json();
//     //         if (response.ok) {
//     //             alert(data.message); // Success message
//     //         } else {
//     //             alert(data.error); // Error message
//     //         }
//     //     } catch (error) {
//     //         console.error(error);
//     //         alert('Failed to submit loan. Please try again later.');
//     //     }
//     // };
    

//     const handleSubmit = () => {
//         // Example: Handle form submission
//         console.log({
//             structure,
//             finishing,
//             loan,
//         });
//         alert('Form submitted successfully!');
//     };

//     return (
//         <ScrollView contentContainerStyle={styles.container}>
//             {/* Heading */}
//             <Text style={styles.heading}>Construction Loan</Text>

//             {/* Loan Details */}
//             <View style={styles.loanDetails}>
//                 <Text style={styles.detailText}>Maximum Loan: PKR 10 Lakh</Text>
//                 <Text style={styles.detailText}>Loan Period: 5 Years</Text>
//             </View>

//             {/* Input: Structure */}
//             <Text style={styles.label}>Structure</Text>
//             <TextInput
//                 style={styles.input}
//                 placeholder="Enter amount for Structure"
//                 value={structure}
//                 onChangeText={setStructure}
//                 keyboardType="numeric"
//             />

//             {/* Input: Finishing */}
//             <Text style={styles.label}>Finishing</Text>
//             <TextInput
//                 style={styles.input}
//                 placeholder="Enter amount for Finishing"
//                 value={finishing}
//                 onChangeText={setFinishing}
//                 keyboardType="numeric"
//             />

//             {/* Input: Loan */}
//             <Text style={styles.label}>Loan</Text>
//             <TextInput
//                 style={styles.input}
//                 placeholder="Enter amount for Loan"
//                 value={loan}
//                 onChangeText={setLoan}
//                 keyboardType="numeric"
//             />

//             {/* Submit Button */}
//             <TouchableOpacity style={styles.button} onPress={handleSubmit}>
//                 <Text style={styles.buttonText}>Submit</Text>
//             </TouchableOpacity>
//         </ScrollView>
//     );
// }

// const styles = StyleSheet.create({
//     container: {
//         flexGrow: 1,
//         backgroundColor: '#F5F5F5',
//         padding: 20,
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     heading: {
//         fontSize: 28,
//         fontWeight: 'bold',
//         color: '#4CAF50',
//         marginBottom: 30,
//         textAlign: 'center',
//     },
//     loanDetails: {
//         marginBottom: 30,
//         padding: 10,
//         backgroundColor: '#E8F5E9',
//         borderRadius: 10,
//         borderWidth: 1,
//         borderColor: '#C8E6C9',
//         width: '100%',
//     },
//     detailText: {
//         fontSize: 16,
//         fontWeight: '600',
//         color: '#2E7D32',
//         marginBottom: 5,
//     },
//     label: {
//         fontSize: 16,
//         fontWeight: '600',
//         color: '#333',
//         alignSelf: 'flex-start',
//         marginBottom: 5,
//     },
//     input: {
//         width: '100%',
//         backgroundColor: '#FFF',
//         padding: 15,
//         borderRadius: 8,
//         borderWidth: 1,
//         borderColor: '#DDD',
//         marginBottom: 20,
//         fontSize: 16,
//         color: '#333',
//     },
//     button: {
//         backgroundColor: '#4CAF50',
//         paddingVertical: 15,
//         paddingHorizontal: 40,
//         borderRadius: 8,
//         elevation: 3,
//         shadowColor: '#000',
//         shadowOffset: { width: 0, height: 2 },
//         shadowOpacity: 0.2,
//         shadowRadius: 3,
//     },
//     buttonText: {
//         color: '#FFF',
//         fontSize: 18,
//         fontWeight: '600',
//     },
// });



import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View, StyleSheet, ScrollView, Modal } from 'react-native';

export default function ConstructionLoan({ navigation }) {
    const [structure, setStructure] = useState('');
    const [finishing, setFinishing] = useState('');
    const [loan, setLoan] = useState('');
    const [isModalVisible, setIsModalVisible] = useState(false);

    const [cnic, setCnic] = useState('');
    const [email, setEmail] = useState('');
    const [contact, setContact] = useState('');

    const handleSubmit = () => {
        if (!structure || !finishing || !loan) {
            alert('Please fill all the fields!');
            return;
        }
        setIsModalVisible(true); // Show the modal
    };

    const handleModalSubmit = () => {
        if (!cnic || !email || !contact) {
            alert('Please fill all the fields in the modal!');
            return;
        }

        // Navigate to registration screen
        navigation.navigate('Registration', {
            structure,
            finishing,
            loan,
            cnic,
            email,
            contact,
        });

        setIsModalVisible(false); // Close the modal
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            {/* Heading */}
            <Text style={styles.heading}>Construction Loan</Text>

            {/* Loan Details */}
            <View style={styles.loanDetails}>
                <Text style={styles.detailText}>Maximum Loan: PKR 10 Lakh</Text>
                <Text style={styles.detailText}>Loan Period: 5 Years</Text>
            </View>

            {/* Input Fields */}
            <Text style={styles.label}>Structure</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter amount for Structure"
                value={structure}
                onChangeText={setStructure}
                keyboardType="numeric"
            />

            <Text style={styles.label}>Finishing</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter amount for Finishing"
                value={finishing}
                onChangeText={setFinishing}
                keyboardType="numeric"
            />

            <Text style={styles.label}>Loan</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter amount for Loan"
                value={loan}
                onChangeText={setLoan}
                keyboardType="numeric"
            />

            {/* Submit Button */}
            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>

            {/* Modal */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={isModalVisible}
                onRequestClose={() => setIsModalVisible(false)}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalHeading}>User Information</Text>

                        <Text style={styles.label}>CNIC</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Enter your CNIC"
                            value={cnic}
                            onChangeText={setCnic}
                            keyboardType="numeric"
                        />

                        <Text style={styles.label}>Email</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Enter your Email"
                            value={email}
                            onChangeText={setEmail}
                            keyboardType="email-address"
                        />

                        <Text style={styles.label}>Contact Number</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Enter your Contact Number"
                            value={contact}
                            onChangeText={setContact}
                            keyboardType="phone-pad"
                        />

                        <View style={styles.modalButtons}>
                            <TouchableOpacity style={styles.button} onPress={handleModalSubmit}>
                                <Text style={styles.buttonText}>Submit</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={[styles.button, styles.cancelButton]}
                                onPress={() => setIsModalVisible(false)}
                            >
                                <Text style={styles.buttonText}>Cancel</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
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
        textAlign: 'center',
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        width: '90%',
        backgroundColor: '#FFF',
        padding: 20,
        borderRadius: 10,
        elevation: 5,
    },
    modalHeading: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#4CAF50',
        marginBottom: 20,
        textAlign: 'center',
    },
    modalButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
    },
    cancelButton: {
        backgroundColor: '#F44336',
    },
});
