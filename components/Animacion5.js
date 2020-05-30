import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Animated,
  TouchableWithoutFeedback,
} from 'react-native';

const Animacion5 = () => {
  const [animacion] = useState(new Animated.Value(1));

  const presionarBoton = () => {
    Animated.spring(animacion, {
      toValue: 0.8,
    }).start();
  };

  const soltarBoton = () => {
    Animated.spring(animacion, {
      toValue: 1,
      friction: 4, // Mas bajo es el numero mayor rebote
      tension: 30,
    }).start();
  };

  const estiloAnimacion = {
    transform: [{scale: animacion}],
  };

  return (
    <View style={styles.contenedor}>
      <TouchableWithoutFeedback
        onPressIn={() => presionarBoton()}
        onPressOut={() => soltarBoton()}>
        <Animated.View style={[styles.btn, estiloAnimacion]}>
          <Text style={styles.texto}>Iniciar Sesion</Text>
        </Animated.View>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    alignItems: 'center',
  },
  btn: {
    backgroundColor: 'cornflowerblue',
    width: 240,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
  texto: {
    color: '#FFF',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontSize: 26,
  },
});

export default Animacion5;
