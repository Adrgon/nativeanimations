import React, {useState, useEffect} from 'react';
import {Text, View, StyleSheet, Animated} from 'react-native';

const Animacion1 = () => {
  const [animacion] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(animacion, {
      toValue: 1, // valor a que llega
      duration: 500, // cantidad de tiempo que tarda en llega
    }).start(); // inicia la animacion. (Importante no olvidar)
  }, []);

  return (
    <Animated.View
      style={{
        opacity: animacion,
      }}>
    <Text style={styles.texto}>Hola</Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  texto: {
    fontSize: 30,
    textAlign: 'center',
  },
});
export default Animacion1;
