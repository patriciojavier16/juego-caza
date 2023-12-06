import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import GameImage from '../components/GameImage'

export default function GameScreen() {
  const imagenes = [
    { nombre: 'Image1', url: 'https://proyectosbeta.net/wp-content/uploads/2013/04/WallPapers_Insectos01.jpg'},
    { nombre: 'Image2', url: 'https://blog.foto24.com/wp-content/uploads/2014/03/cabecera-672x372-fotos-insectos-inspiracion.jpg'},
  ]
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 40, color: 'blue'}}>Galeria</Text>
      <View style={{ height: 500, backgroundColor: 'blue'}}>
        <FlatList
          data={imagenes}
          horizontal={false}
          renderItem={({ item }) => (
            <GameImage data={item} />
          )}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e79'
  }
})