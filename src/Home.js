import React from 'react';
import { Text, View, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';

//Home Page
const Home = ({ navigation }) => {
  return( 
    <View style={styles.container}>
      <ImageBackground style={styles.bgImage} source={require('../assets/cityguide-bg-image-4.jpg')}>
      <Text style={styles.headerText}>Cityguide</Text>
      <Text style={styles.tagline}>Explore the best places of the  world's most vibrant cities!</Text>
      
      <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate('Login')}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.registerButton}>
          <Text style={styles.registerButtonText}>Register</Text>
        </TouchableOpacity>

      </ImageBackground >
      
    </View>
  )
}

 //Styling Home Page
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  bgImage: {
    flex: 1,
    alignItems: 'center'
  },
  headerText: {
    marginTop:200,
    fontSize:70,
    color: '#FFFFFF',
    fontFamily: 'cursive',
    fontWeight: "bold"
  },
  tagline: {
    marginTop: 90,
    color: '#FFFFFF',
    fontSize:18,
    marginLeft: 30,
    textAlign: 'center'
  },
  loginButton: {
    marginTop: 90,
    height: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: 310,
    borderRadius: 5,
    backgroundColor: "#FFFFFF",
  },
  registerButton: {
    marginTop: 3,
    height: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: 310,
    borderRadius: 5,
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#FFFFFF'
  },
  loginButtonText: {
    color: '#1E90FF',
    fontSize: 18,
  },
  registerButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
  },
});

export default Home;