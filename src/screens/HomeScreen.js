import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export function HomeScreen () {
  return (
    <View style={styles.container}>
      <Text> Bienvenido a HomeScreen 1</Text>
      <Button title="IR A HomeScreen2" onPress={() => navigation.navigate('HomeScreen2')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
