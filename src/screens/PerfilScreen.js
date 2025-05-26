import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';

export function PerfilScreen() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text>Bienvenido a PerfilScreen 1</Text>
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
});
