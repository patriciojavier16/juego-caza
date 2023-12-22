import { Alert, Button, StyleSheet, Text, View, ImageBackground } from 'react-native';
import React, { useState } from 'react';
import { TextInput } from 'react-native-gesture-handler';

import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../components/Config';

export default function LoginScreen({ navigation }: any) {
  const [correo, setCorreo] = useState('');
  const [contrasenia, setContrasenia] = useState('');
  const [nombre, setnombre] = useState('')

  function login() {
    signInWithEmailAndPassword(auth, correo, contrasenia)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user.uid)
        console.log('Acceso correcto');
        navigation.navigate('HOME', { userId: user.uid, username: nombre });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log('Acceso denegado');
        console.log(errorCode);
        console.log(errorMessage);

        if (errorCode === 'auth/missing-password') {
          Alert.alert('Error', 'No puede ingresar una contraseña en blanco');
        } else if (errorCode === 'auth/wrong-password') {
          Alert.alert('Error', 'Error en las credenciales');
        } else {
          Alert.alert('Error', 'Comuníquese con el admin');
        }
      });
  }

  return (

    <ImageBackground source={require("../assets/images/fondo.jpg")} style={styles.container}>
      <Text style={{ fontSize: 30, marginBottom: 20, color: 'black' }}>Login</Text>

      <TextInput
        style={styles.input}
        placeholder='Ingrese email'
        onChangeText={(texto) => setCorreo(texto)}
      />

      <TextInput
        style={styles.input}
        placeholder='Ingrese su contraseña'
        onChangeText={(texto) => setContrasenia(texto)}
        secureTextEntry={true}
      />

      <View style={styles.buttonContainer}>
        <Button title='Ingresar' onPress={() => login()} color='#4CAF50' />
        <Button
          title='Registrate'
          onPress={() => navigation.navigate('Register')}
          color='#4CAF50'
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
    width: '80%',
    backgroundColor: 'white',
    color: 'black',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginBottom: 10,
  },

});
