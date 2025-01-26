
// import { useState } from "react";
// import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
// import Toast from "react-native-toast-message";
// import { useNavigation } from "@react-navigation/native";
// import ApiInstance from "../Config/Apis/ApiInstance";

// export default function SignUp() {
//     const [model, setModel] = useState({ isSubmitting: false });
//     const navigation = useNavigation();

//     const signUp = async () => {
//         if (!model.email || !model.password) {
//             return Toast.show({
//                 type: 'error',
//                 position: 'top',
//                 text1: 'Validation error',
//                 text2: 'Please Provide All Fields'
//             });
//         }
//         setModel({ ...model, isSubmitting: true });
//         await ApiInstance.post('/signUp', model)
//             .then((res) => {
//                 console.log('send');
//                 Toast.show({
//                     type: 'success',
//                     position: 'top',
//                     text1: 'SignUp',
//                     text2: 'User is Successfully Created'
//                 });
//                 navigation.navigate('Home')
//                 setModel({ ...model, isSubmitting: false });
//             })
//             .catch((err) => {
//                 console.log(err, 'error');
//                 Toast.show({
//                     type: 'error',
//                     position: 'top',
//                     text1: 'Error',
//                     text2: 'Not user created (Please Try Again)'
//                 });
//                 setModel({ ...model, isSubmitting: false });
//             });
//     };

//     return (
//         <View style={Styles.mainContainer}>
//             <View style={Styles.container}>
//                 <Text style={Styles.header}>Sign Up</Text>
//                 <TextInput
//                     placeholder="User Name"
//                     keyboardType="default"
//                     style={Styles.input}
//                     onChangeText={(e) => setModel({ ...model, name: e })}
//                 />
//                 <TextInput
//                     placeholder="Email"
//                     keyboardType="email-address"
//                     style={Styles.input}
//                     onChangeText={(e) => setModel({ ...model, email: e })}
//                 />
//                 <TextInput
//                     placeholder="Password"
//                     secureTextEntry
//                     style={Styles.input}
//                     onChangeText={(e) => setModel({ ...model, password: e })}
//                 />
//                 <TouchableOpacity
//                     onPress={signUp}
//                     style={[
//                         Styles.button,
//                         model.isSubmitting && Styles.disabledButton
//                     ]}
//                     disabled={model.isSubmitting}
//                 >
//                     <Text style={Styles.buttonText}>
//                         {model.isSubmitting ? "Please wait..." : "Sign Up"}
//                     </Text>
//                 </TouchableOpacity>

//                 <View style={Styles.loginLinkContainer}>
//                     <Text style={Styles.loginText}>Already have an account? </Text>
//                     <TouchableOpacity onPress={() => navigation.navigate('ChatList')}><Text style={Styles.loginText}>App</Text></TouchableOpacity>
//                     <TouchableOpacity onPress={() => navigation.navigate('Login')}>
//                         <Text style={Styles.loginLink}>Login</Text>
//                     </TouchableOpacity>
//                 </View>
//             </View>
//         </View>
//     );
// }

// const Styles = StyleSheet.create({
//     mainContainer: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: '#f5f5f5',
//         padding: 20,
//     },
//     container: {
//         backgroundColor: '#ffffff',
//         width: '90%',
//         padding: 30,
//         borderRadius: 20,
//         shadowColor: '#000',
//         shadowOffset: { width: 0, height: 10 },
//         shadowOpacity: 0.1,
//         shadowRadius: 10,
//         elevation: 10,
//         marginTop: 20,
//     },
//     header: {
//         fontSize: 30,
//         fontWeight: 'bold',
//         color: '#333',
//         marginBottom: 40,
//         textAlign: 'center',
//         letterSpacing: 1,
//     },
//     input: {
//         height: 50,
//         width: '100%',
//         borderBottomWidth: 2,
//         borderColor: '#00aaff',
//         marginBottom: 20,
//         fontSize: 18,
//         paddingLeft: 15,
//         backgroundColor: '#fff',
//         color: '#333',
//         borderRadius: 10,
//     },
//     button: {
//         backgroundColor: '#00aaff',
//         paddingVertical: 15,
//         paddingHorizontal: 50,
//         borderRadius: 30,
//         marginTop: 30,
//         elevation: 5,
//         shadowColor: '#000',
//         shadowOpacity: 0.2,
//         shadowRadius: 10,
//     },
//     disabledButton: {
//         backgroundColor: '#cccccc', // Grey color when button is disabled
//     },
//     buttonText: {
//         color: '#fff',
//         fontSize: 18,
//         fontWeight: '600',
//         textAlign: 'center',
//     },
//     loginLinkContainer: {
//         flexDirection: 'row',
//         marginTop: 20,
//         justifyContent: 'center',
//     },
//     loginText: {
//         fontSize: 16,
//         color: '#333',
//     },
//     loginLink: {
//         fontSize: 16,
//         color: '#00aaff',
//         marginLeft: 5,
//         fontWeight: 'bold',
//     },
// });




import { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import Toast from "react-native-toast-message";
import { useNavigation } from "@react-navigation/native";
import ApiInstance from "../Config/Apis/ApiInstance";

export default function SignUp() {
    const [model, setModel] = useState({ isSubmitting: false });
    const navigation = useNavigation();

    const signUp = async () => {
        if (!model.email || !model.password) {
            return Toast.show({
                type: 'error',
                position: 'top',
                text1: 'Validation error',
                text2: 'Please Provide All Fields'
            });
        }
        setModel({ ...model, isSubmitting: true });
        await ApiInstance.post('/auth/signUp', model)
            .then((res) => {
                console.log(res)
                Toast.show({
                    type: 'success',
                    position: 'top',
                    text1: 'SignUp',
                    text2: 'User is Successfully Created'
                });
                navigation.navigate('LoanCategory');
                setModel({ ...model, isSubmitting: false });
            })
            .catch((err) => {
                Toast.show({
                    type: 'error',
                    position: 'top',
                    text1: 'Error',
                    text2: 'Not user created (Please Try Again)'
                });
                setModel({ ...model, isSubmitting: false });
            });
    };

    return (
        <View style={Styles.mainContainer}>
            <View style={Styles.container}>
                <Text style={Styles.header}>Create Account</Text>
                <TextInput
                    placeholder="Enter your name"
                    keyboardType="default"
                    style={Styles.input}
                    placeholderTextColor="#aaa"
                    onChangeText={(e) => setModel({ ...model, name: e })}
                />
                <TextInput
                    placeholder="Enter your email"
                    keyboardType="email-address"
                    style={Styles.input}
                    placeholderTextColor="#aaa"
                    onChangeText={(e) => setModel({ ...model, email: e })}
                />
                <TextInput
                    placeholder="Enter your password"
                    secureTextEntry
                    style={Styles.input}
                    placeholderTextColor="#aaa"
                    onChangeText={(e) => setModel({ ...model, password: e })}
                />
                <TouchableOpacity
                    onPress={signUp}
                    style={[
                        Styles.button,
                        model.isSubmitting && Styles.disabledButton
                    ]}
                    disabled={model.isSubmitting}
                >
                    <Text style={Styles.buttonText}>
                        {model.isSubmitting ? "Signing Up..." : "Sign Up"}
                    </Text>
                </TouchableOpacity>

                <View style={Styles.loginLinkContainer}>
                    <Text style={Styles.loginText}>Already have an account? </Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                        <Text style={Styles.loginLink}>Login</Text>
                    </TouchableOpacity>
                </View>
            </View>

            
        </View >
    );
}

const Styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f4ff',
        padding: 20,
    },
    container: {
        backgroundColor: '#ffffff',
        width: '90%',
        padding: 30,
        borderRadius: 25,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 8,
    },
    header: {
        fontSize: 32,
        fontWeight: '700',
        color: '#007bff',
        marginBottom: 30,
        textAlign: 'center',
        letterSpacing: 0.5,
    },
    input: {
        height: 50,
        width: '100%',
        borderWidth: 1,
        borderColor: '#ccc',
        marginBottom: 20,
        fontSize: 16,
        paddingLeft: 15,
        backgroundColor: '#f9f9f9',
        color: '#333',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOpacity: 0.05,
        shadowRadius: 4,
        elevation: 2,
    },
    button: {
        backgroundColor: '#32cd32',
        paddingVertical: 15,
        borderRadius: 5,
        marginTop: 20,
        alignItems: 'center',
        shadowColor: '#007bff',
        shadowOpacity: 0.3,
        shadowRadius: 10,
        elevation: 5,
    },
    disabledButton: {
        backgroundColor: '#cccccc',
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '600',
    },
    loginLinkContainer: {
        flexDirection: 'row',
        marginTop: 20,
        justifyContent: 'center',
    },
    loginText: {
        fontSize: 16,
        color: '#333',
    },
    loginLink: {
        fontSize: 16,
        color: '#007bff',
        fontWeight: 'bold',
        marginLeft: 5,
    },
});
