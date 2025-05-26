import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';

export function BuscadorScreen2 () {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text> Bienvenido a BuscadorScreen 2</Text>
      <TouchableOpacity
          style={styles.Button}
          onPress={() => alert('Hola!')}>
          <Text style={styles.loginButtonText}>Tocar aquí</Text>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#78D5D7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Button: {
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 10,
  },
});
