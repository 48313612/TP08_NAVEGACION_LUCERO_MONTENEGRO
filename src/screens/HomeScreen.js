import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';

export function HomeScreen() {
  const navigation = useNavigation();
  const [nombreValue, setNombreValue] = useState('');
  const [telefonoValue, setTelefonoValue] = useState('');
  return (
      <View style={styles.container}>
        <Text>Bienvenido a HomeScreen 1</Text>
        <TextInput placeholder="Ingrese su nombre" style={styles.input} value={nombreValue} onChangeText={setNombreValue}/>
        <TextInput placeholder="Ingrese su teléfono" style={styles.input} value={telefonoValue} onChangeText={setTelefonoValue}/>
        <Button title="IR A HomeScreen2" onPress={() => navigation.navigate('HomeScreen2', {nombre: nombreValue, telefono: telefonoValue })} />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#BED8D4',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 15,
    width: '80%',
    paddingLeft: 10,
    backgroundColor: 'white',
  },
});
