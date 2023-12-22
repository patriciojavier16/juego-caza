import { StyleSheet, Text, View, Image, Button } from 'react-native'
import React, { useState } from 'react'
import { getDownloadURL,ref, uploadBytes } from "firebase/storage";
import * as ImagePicker from 'expo-image-picker'
import { storage } from '../components/Config';


export default function ScoreScreen() {
  const [image, setImage] = useState('');

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };
  async function subir() {
    const storageRef = ref(storage, 'camara/imagen');

    const response = await fetch(image)
    const blob = await response.blob();

    try {
      await uploadBytes(storageRef, blob, { contentType: 'image/jpg' })
      console.log("La imagen se subió con éxito")

      //Obtiene la URL de la imagen
      const imageURL = await getDownloadURL(storageRef);
      console.log('URL de desacarga de la imagen', imageURL)

    } catch (error) {
      console.log(error)
    }

  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Subir imágen desde la cámara</Text>
      <Button title='Cámara' onPress={() => pickImage()} />
      <Image source={{ uri: image }} style={styles.img} />
      <Button title='Subir' onPress={() => subir()} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff', // Puedes cambiar el color de fondo según tu preferencia
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  img: {
    width: 300,
    height: 400,
    marginVertical: 20,
  },
})