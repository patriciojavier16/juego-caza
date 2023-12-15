import { StyleSheet, Text, View, TextInput, Alert, Button } from 'react-native'
import React, { useState } from 'react'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../config/Config';


export default function RegisterScreen({ navigation }: any) {

    const [correo, setCorreo] = useState('')
    const [nombre, setNombre] = useState('')
    const [edad, setEdad] = useState('')
    const [genero, setGenero] = useState('')
    const [contrasenia, setContrasenia] = useState('')

    function registro() {
        createUserWithEmailAndPassword(auth, correo, contrasenia)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                console.log("Usuario registrado")
                navigation.navigate('Login')
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode)
                Alert.alert("ERROR", "Error al registrarse")
                // ..
            });
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Registro</Text>
            <TextInput
                style={styles.input}
                placeholder='Ingrese su e-mail'
                onChangeText={(text) => (setCorreo(text))}
                keyboardType='email-address'
            />
            <TextInput
                style={styles.input}
                placeholder='Ingrese su nombre'
                onChangeText={(text) => (setNombre(text))}
            />
            <TextInput
                style={styles.input}
                placeholder='Ingrese su edad'
                onChangeText={(text) => (setEdad(text))}
            />
            <TextInput
                style={styles.input}
                placeholder='Ingrese su género'
                onChangeText={(text) => (setGenero(text))}
            />
            <TextInput
                style={styles.input}
                placeholder='Ingrese su contraseña'
                onChangeText={(text) => (setContrasenia(text))}
            />
            <Button title='Registro' onPress={() => registro()} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0', // Color de fondo
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#333', // Color del texto
    },
    input: {
        backgroundColor: '#fff',
        width: '100%',
        marginBottom: 10,
        padding: 10,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#ccc',
    },
})