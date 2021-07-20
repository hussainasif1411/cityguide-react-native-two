import React from "react";
import { Text, View, StyleSheet, Image, TextInput, TouchableOpacity } from "react-native";

//Login Page
const Login = ({ navigation }) => {
    return ( 
        <View style={styles.container}>
            <View style={styles.header}>
                <Image style={styles.image} source={require('../assets/cityguide-bg-image-4.jpg')} />
                <Text style={styles.headerText}>Cityguide</Text>
            </View>

            <View style={styles.bodyContent}>
                <Text style={styles.welcomeText}>Welcome back!</Text>

                <TextInput style={styles.inputField} placeholderTextColor="#C8C8C8" placeholder="📨   Your email address"></TextInput>
                <TextInput style={styles.inputField} placeholderTextColor="#C8C8C8" placeholder="🔓︎   Your password"></TextInput>

                <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate('BrowseCategories')}>
                    <Text style={styles.loginButtonText}>Login</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.facebookButton} onPress={() => navigation.navigate('')}>
                    <Text style={styles.registerButtonText}>Facebook</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('')}>
                    <Text style={styles.forgotPassword}>Forgot password?</Text>
                </TouchableOpacity>

            </View>
        </View>
    )
}

//Styling Login Page
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        height: 220,
        alignItems: 'center'
    },
    image: {
        height: 220,
        width: '100 %',
        position: 'absolute'
    },
    headerText: {
        marginTop: 70,
        fontSize: 80,
        color: '#FFFFFF',
        fontFamily: 'cursive',
    },
    bodyContent: {
        alignItems: 'center'
    },
    welcomeText: {
        fontSize: 34,
        marginTop: 30,
        color: '#1E90FF',
        marginBottom: 40,
    },
    inputField: {
        width: '85%',
        height: 45,
        marginTop: 6,
        marginBottom: 25,
        borderBottomWidth: 1,
        borderColor: '#C8C8C8'
    },
    loginButton: {
        marginTop: 18,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 18,
        width: '85%',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#1E90FF',
        backgroundColor: 'transparent',
    },
    facebookButton: {
        marginTop: 3,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        width: '85%',
        borderRadius: 5,
        backgroundColor: '#1E90FF',
    },
    loginButtonText: {
        color: '#1E90FF',
        fontSize: 16,
    },
    registerButtonText: {
        color: '#FFFFFF',
        fontSize: 16,
    },
    forgotPassword: {
        color: '#A9A9A9',
        marginTop: 15
    }
});

export default Login;