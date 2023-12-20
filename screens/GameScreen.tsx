import React, { useEffect, useState } from 'react';
import { StyleSheet, View, ImageBackground, Text, TouchableOpacity, Modal } from 'react-native';
import Abeja from '../components/abeja';

export default function GameScreen() {
  const [tiempo, setTiempo] = useState(10);
  const [contador, setContador] = useState(0);
  const [abejaCazada, setAbejaCazada] = useState(0);
  const [isModalVisible, setModalVisible] = useState(false);
  const [generarAbejas, setGenerarAbejas] = useState(true);

  useEffect(() => {
    const temporizador = setInterval(() => {
      setTiempo((tiempoAnterior) => {
        if (tiempoAnterior === 1) {
          clearInterval(temporizador);
        }
        return tiempoAnterior - 1;
      });
    }, 1000);

    return () => {
      clearInterval(temporizador);
    };
  }, [generarAbejas]);

  useEffect(() => {
    if (tiempo === 0) {
      setGenerarAbejas(false);
      setAbejaCazada(contador);
      setModalVisible(true);
    }
  }, [tiempo, contador]);

  function contar() {
    setContador(contador + 1);
  }

  function reiniciar() {
    setModalVisible(false);
    setTiempo(10);
    setContador(0);
    setGenerarAbejas(true); 
  }

  return (
    <ImageBackground source={require('../assets/images/fondoJuego.png')} style={styles.container}>
      <View style={{ height: 500 }}>
        {generarAbejas && (
          <Abeja
            imagenNormal={require('../assets/images/abeja.png')}
            imagenPresionada={require('../assets/images/abeja2.jpg')}
            presionar={contar}
          />
        )}
      </View>
      <Text style={styles.time}>{tiempo > 0 ? tiempo : 0}</Text>

      <Modal
        visible={isModalVisible}
        animationType="fade"
        transparent={true}
        style={styles.modalContainer}
      >
        <View style={styles.modal}>
          <Text style={styles.txtFin}>FIN DE LA PARTIDA...!!!</Text>
          <Text style={styles.txtResultado}>Usted ha cazado: {abejaCazada} abejas</Text>

          <TouchableOpacity style={styles.btn} onPress={() => reiniciar()}>
            <Text style={styles.txtBtn}>Reiniciar</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  time: {
    color: 'white',
    fontSize: 40,
    position: 'absolute',
    top: 20,
  },
  modal: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtResultado: {
    color: '#fff',
    marginBottom: 20,
  },
  txtFin: {
    color: '#fff',
    marginBottom: 20,
  },
  btn: {
    color: '#fff',
    height: 30,
    width: '30%',
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    borderWidth: 2,
    borderColor: 'black',
    margin: 10,
  },
  txtBtn: {
    color: '#fff',
  },
});
