import { useState } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';

export default function Index() {
  const [mensaje, setMensaje] = useState('¡Estoy aprendiendo React Native!');

  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>Mi primera aplicación</Text>
      <Text style={styles.mensaje}>{mensaje}</Text>

      {/* Primer botón (Modifica el mensaje) */}
      <Pressable
        style={styles.boton}
        onPress={() => setMensaje('¡Mi primer botón funciona!')}
      >
        <Text style={styles.textoBoton}>Púlsame</Text>
      </Pressable>

      {/* Segundo botón (Nuevo: Restaura el mensaje original) */}
      <Pressable
        style={[styles.boton, styles.botonSecundario]}
        onPress={() => setMensaje('¡Estoy aprendiendo React Native!')}
      >
        <Text style={styles.textoBoton}>Reiniciar</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
    backgroundColor: '#eef4ff',
  },
  titulo: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#173b75',
    marginBottom: 18,
  },
  mensaje: {
    fontSize: 17,
    marginBottom: 22,
    textAlign: 'center',
  },
  boton: {
    backgroundColor: '#2563eb',
    paddingVertical: 13,
    paddingHorizontal: 25,
    borderRadius: 10,
    marginBottom: 12, // Espacio entre los botones
    minWidth: 160,
    alignItems: 'center',
  },
  botonSecundario: {
    backgroundColor: '#475569', // Un color diferente (gris oscuro) para distinguirlo
  },
  textoBoton: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
