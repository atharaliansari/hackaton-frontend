// import React, { useState } from 'react';
// import { Text, TextInput, TouchableOpacity, View, StyleSheet, ScrollView } from 'react-native';

// export default function WeddingLoan() {
//     const [valima, setValima] = useState('');
//     const [furniture, setFurniture] = useState('');
//     const [valimaFood, setValimaFood] = useState('');
//     const [jahez, setJahez] = useState('');

//     const handleSubmit = () => {
//         // Example: Handle form submission
//         console.log({
//             valima,
//             furniture,
//             valimaFood,
//             jahez,
//         });
//         alert('Form submitted successfully!');
//     };

//     return (
//         <ScrollView contentContainerStyle={styles.container}>
//             {/* Heading */}
//             <Text style={styles.heading}>Wedding Loan</Text>

//             {/* Loan Details */}
//             <View style={styles.loanDetails}>
//                 <Text style={styles.detailText}>Maximum Loan: PKR 5 Lakh</Text>
//                 <Text style={styles.detailText}>Loan Period: 3 Years</Text>
//             </View>

//             {/* Input: Valima */}
//             <Text style={styles.label}>Valima</Text>
//             <TextInput
//                 style={styles.input}
//                 placeholder="Enter amount for Valima"
//                 value={valima}
//                 onChangeText={setValima}
//                 keyboardType="numeric"
//             />

//             {/* Input: Furniture */}
//             <Text style={styles.label}>Furniture</Text>
//             <TextInput
//                 style={styles.input}
//                 placeholder="Enter amount for Furniture"
//                 value={furniture}
//                 onChangeText={setFurniture}
//                 keyboardType="numeric"
//             />

//             {/* Input: Valima Food */}
//             <Text style={styles.label}>Valima Food</Text>
//             <TextInput
//                 style={styles.input}
//                 placeholder="Enter amount for Valima Food"
//                 value={valimaFood}
//                 onChangeText={setValimaFood}
//                 keyboardType="numeric"
//             />

//             {/* Input: Jahez */}
//             <Text style={styles.label}>Jahez</Text>
//             <TextInput
//                 style={styles.input}
//                 placeholder="Enter amount for Jahez"
//                 value={jahez}
//                 onChangeText={setJahez}
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
//         color: '#E91E63',
//         marginBottom: 20,
//         textAlign: 'center',
//     },
//     loanDetails: {
//         marginBottom: 30,
//         padding: 10,
//         backgroundColor: '#FFF5F5',
//         borderRadius: 10,
//         borderWidth: 1,
//         borderColor: '#FFCDD2',
//         width: '100%',
//     },
//     detailText: {
//         fontSize: 16,
//         fontWeight: '600',
//         color: '#C62828',
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
//         backgroundColor: '#E91E63',
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

export default function WeddingLoan() {
    const [valima, setValima] = useState('');
    const [furniture, setFurniture] = useState('');
    const [valimaFood, setValimaFood] = useState('');
    const [jahez, setJahez] = useState('');

    const [cnic, setCnic] = useState('');
    const [email, setEmail] = useState('');
    const [contactNumber, setContactNumber] = useState('');

    const [modalVisible, setModalVisible] = useState(false);

    const handleFormSubmit = () => {
        setModalVisible(true);
    };

    const handleModalSubmit = () => {
        console.log({
            valima,
            furniture,
            valimaFood,
            jahez,
            cnic,
            email,
            contactNumber,
        });
        setModalVisible(false);
        alert('Form submitted successfully!');
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            {/* Heading */}
            <Text style={styles.heading}>Wedding Loan</Text>

            {/* Loan Details */}
            <View style={styles.loanDetails}>
                <Text style={styles.detailText}>Maximum Loan: PKR 5 Lakh</Text>
                <Text style={styles.detailText}>Loan Period: 3 Years</Text>
            </View>

            {/* Input: Valima */}
            <Text style={styles.label}>Valima</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter amount for Valima"
                value={valima}
                onChangeText={setValima}
                keyboardType="numeric"
            />

            {/* Input: Furniture */}
            <Text style={styles.label}>Furniture</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter amount for Furniture"
                value={furniture}
                onChangeText={setFurniture}
                keyboardType="numeric"
            />

            {/* Input: Valima Food */}
            <Text style={styles.label}>Valima Food</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter amount for Valima Food"
                value={valimaFood}
                onChangeText={setValimaFood}
                keyboardType="numeric"
            />

            {/* Input: Jahez */}
            <Text style={styles.label}>Jahez</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter amount for Jahez"
                value={jahez}
                onChangeText={setJahez}
                keyboardType="numeric"
            />

            {/* Submit Button */}
            <TouchableOpacity style={styles.button} onPress={handleFormSubmit}>
                <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>

            {/* Modal for User Information */}
            <Modal
                visible={modalVisible}
                animationType="slide"
                transparent={true}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalHeading}>User Information</Text>

                        {/* CNIC Input */}
                        <Text style={styles.label}>CNIC</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Enter your CNIC"
                            value={cnic}
                            onChangeText={setCnic}
                            keyboardType="numeric"
                        />

                        {/* Email Input */}
                        <Text style={styles.label}>Email</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Enter your Email"
                            value={email}
                            onChangeText={setEmail}
                            keyboardType="email-address"
                        />

                        {/* Contact Number Input */}
                        <Text style={styles.label}>Contact Number</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Enter your Contact Number"
                            value={contactNumber}
                            onChangeText={setContactNumber}
                            keyboardType="phone-pad"
                        />

                        {/* Modal Buttons */}
                        <View style={styles.modalButtons}>
                            <TouchableOpacity style={styles.modalButton} onPress={handleModalSubmit}>
                                <Text style={styles.modalButtonText}>Submit</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={[styles.modalButton, styles.cancelButton]}
                                onPress={() => setModalVisible(false)}
                            >
                                <Text style={styles.modalButtonText}>Cancel</Text>
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
        color: '#E91E63',
        marginBottom: 20,
        textAlign: 'center',
    },
    loanDetails: {
        marginBottom: 30,
        padding: 10,
        backgroundColor: '#FFF5F5',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#FFCDD2',
        width: '100%',
    },
    detailText: {
        fontSize: 16,
        fontWeight: '600',
        color: '#C62828',
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
        backgroundColor: '#E91E63',
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
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    modalContent: {
        width: '90%',
        backgroundColor: '#FFF',
        borderRadius: 10,
        padding: 20,
        alignItems: 'center',
    },
    modalHeading: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#E91E63',
        marginBottom: 20,
    },
    modalButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginTop: 20,
    },
    modalButton: {
        flex: 1,
        backgroundColor: '#E91E63',
        paddingVertical: 10,
        marginHorizontal: 5,
        borderRadius: 8,
        alignItems: 'center',
    },
    cancelButton: {
        backgroundColor: '#BDBDBD',
    },
    modalButtonText: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: '600',
    },
});
