import React from 'react';
import { StyleSheet, View, ImageBackground } from 'react-native';
import Abeja from '../components/abeja';

export default function GameScreen() {
  return (
    <ImageBackground source={require('../assets/images/fondoJuego.png')} style={styles.container}>
      <View style={{ height: 500 }}>
        <Abeja
          presionar={() => console.log('Presionado')}
          imagenNormal={require('../assets/images/abeja.png')}
          imagenPresionada={require('../assets/images/abeja2.jpg')}
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
});
