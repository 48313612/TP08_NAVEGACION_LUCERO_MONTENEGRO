import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
const imagen = { uri: 'https://www.allaboutbirds.org/guide/assets/photo/308067801-1900px.jpg?__hstc=6989805.2f3f33a24b44870ec4a577029c49e44b.1747526400110.1747526400111.1747526400112.1&__hssc=6989805.1.1747526400113&__hsfp=3282704936' };
export function PerfilScreen() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text>Bienvenido a PerfilScreen 1</Text>
      <Image source={imagen} style={styles.imagen} />
      <Button title="IR A PerfilScreen2" onPress={() => navigation.navigate('PerfilScreen2')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#63D2FF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imagen: {
    height: 150,
    width: 150,
    marginBottom: 20,
  },
});
