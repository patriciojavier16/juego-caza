import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import GameImage from '../components/GameImage'

export default function GameScreen() {
  const imagenes = [
    { nombre: 'Image1', localPath: require('../assets/images/abeja.png')},
    { nombre: 'Image2', localPath: require('../assets/images/mariquiota.png')},
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