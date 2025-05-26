import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';

export function BuscadorScreen () {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text> Bienvenido a BuscadorScreen </Text>
      <Button title="IR A BuscadorScreen2" onPress={() => navigation.navigate('BuscadorScreen2')} />
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
