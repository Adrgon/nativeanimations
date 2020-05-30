import React, {useState, useEffect} from 'react';
import {Text, View, StyleSheet, Animated} from 'react-native';

const Animacion4 = () => {
  const [animacion] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(animacion, {
      toValue: 360, // valor a que llega
      duration: 1000, // cantidad de tiempo que tarda en llega
    }).start(); // inicia la animacion. (Importante no olvidar)
  }, []);

  const interpolacion = animacion.interpolate({
    inputRange: [1, 360],
    outputRange: ['1deg', '360deg'],
  });

  const estiloAnimacion = {
    transform: [{rotate: interpolacion}],
  };

  return (
    <View>
      <Animated.View style={[styles.caja, estiloAnimacion]} />
    </View>
  );
};

const styles = StyleSheet.create({
  caja: {
    width: 100,
    height: 100,
    backgroundColor: 'cornflowerblue',
  },
});
export default Animacion4;
