import React, { useEffect, useState } from 'react';
import { View, Image, StyleSheet, Dimensions, TouchableOpacity, ImageSourcePropType } from 'react-native';

interface AbejaProps {
  imagenNormal: ImageSourcePropType;
  imagenPresionada: ImageSourcePropType;
  presionar: () => void;
}

const Abeja: React.FC<AbejaProps> = (props) => {
  const [posicion, setPosicion] = useState({ x: 0, y: 0 });
  const [imageSource, setImageSource] = useState(props.imagenNormal);
  const [isPressed, setIsPressed] = useState(false);

  const changeImage = () => {
    setImageSource(props.imagenPresionada);
    setTimeout(() => {
      setImageSource(props.imagenNormal);
    }, 1000);
  };

  const moverAbeja = () => {
    const MAX_X = Dimensions.get('window').width - 70;
    const MAX_Y = Dimensions.get('window').height - 70;

    const randomX = Math.floor(Math.random() * MAX_X);
    const randomY = Math.floor(Math.random() * MAX_Y);

    setPosicion({ x: randomX, y: randomY });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      moverAbeja();
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  const compuesta = () => {
    props.presionar();
    changeImage();
  };

  return (
    <View style={{ top: posicion.y, left: posicion.x, position: 'absolute', padding: 16 }}>
      <TouchableOpacity onPress={compuesta}>
        <Image source={imageSource} style={styles.imgAbeja} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  imgAbeja: {
    width: 70,
    height: 70,
  },
});

export default Abeja;