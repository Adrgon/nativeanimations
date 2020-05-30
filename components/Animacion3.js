import React, {useState, useEffect} from 'react';
import {Text, View, StyleSheet, Animated} from 'react-native';

const Animacion3 = () => {
  const [animacion] = useState(new Animated.Value(14));

  useEffect(() => {
    Animated.timing(animacion, {
      toValue: 40, // valor a que llega
      duration: 1000, // cantidad de tiempo que tarda en llega
    }).start(); // inicia la animacion. (Importante no olvidar)
  }, []);

  return (
    <View>
      <Animated.Text style={[styles.texto, {fontSize: animacion}]}>
        Animacion 3
      </Animated.Text>
    </View>
  );
};

const styles = StyleSheet.create({
  texto: {
    fontSize: 30,
    textAlign: 'center',
  },
});
export default Animacion3;
