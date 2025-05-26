import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';

export function HomeScreen() {
  const navigation = useNavigation();
  return (
      <View style={styles.container}>
        <Text>Bienvenido a HomeScreen 1</Text>
        <Text>Ingrese su Nombre:</Text>
        <TextInput placeholder="Nombre" value={nombre} onChangeText={setNombre} />
        <Text>Ingrese su Edad:</Text>
        <TextInput placeholder="Edad" value={edad} onChangeText={setEdad} />
        <Button title="Enviar" onPress={() => navigation.navigate('HomeScreen2', { nombre: nombre, edad: edad })} />
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
});
