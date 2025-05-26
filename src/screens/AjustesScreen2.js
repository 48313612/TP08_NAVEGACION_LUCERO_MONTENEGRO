import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
const imagen = { uri: 'https://static.nationalgeographic.es/files/styles/image_3200/public/75552.ngsversion.1422285553360.jpg?w=1900&h=1267' };
export function AjustesScreen2() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text>Bienvenido a AjustesScreen 2</Text>
      <Image source={imagen} style={styles.imagen} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#87CEE6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imagen: {
    height: 150,
    width: 150,
    marginBottom: 30,
  },
});
