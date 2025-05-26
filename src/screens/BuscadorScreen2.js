import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';

export function BuscadorScreen () {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text> Bienvenido a BuscadorScreen 2</Text>
      <Button title="Volver" onPress={() => navigation.navigate('BuscadorScreen')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DC80D2',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
