import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';

export function PerfilScreen() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text>Bienvenido a PerfilScreen 12</Text>
      <Button title="Volver" onPress={() => navigation.navigate('PerfilScreen')} />
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
