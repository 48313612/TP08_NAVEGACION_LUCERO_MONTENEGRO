import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';

export function HomeScreen2 ( route ) {
  const navigation = useNavigation();
  const { nombre, edad } = route.params;
  return (
    <View style={styles.container}>
      <Text> Bienvenido a HomeScreen 2</Text>
      <Text> Datos recibidos:</Text>
      <Text>Nombre: {nombre}</Text>
      <Text>Edad: {edad}</Text> 
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
