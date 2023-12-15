import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native'
import React from 'react'
import GameImage from '../components/GameImage'

export default function GameScreen() {
  const imagenes = [
    { nombre: 'Image1', localPath: require('../assets/images/abeja.png') },
    { nombre: 'Image2', localPath: require('../assets/images/mariquiota.png') },
  ]
  return (
    <ImageBackground source={require("../assets/images/fondoJuego.png")} style={styles.container}>
      <View style={{ height: 500 }}>
        <Image style={styles.imgAbeja} source={require("../assets/images/abeja.png")} />{
          <Image style={styles.imgAbeja} source={require("../assets/images/mariquiota.png")} />
        }

      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    //backgroundColor: '#2c3e79'
  },
  imgAbeja: {
    width: 70,
    height: 70,
    margin: 50
  },
  imgMariq: {
    width: 70,
    height: 70
  }
})