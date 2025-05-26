import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';

export function AjustesScreen() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text>Bienvenido a AjustesScreen 1</Text>
      <Button title="IR A AjustesScreen2" onPress={() => navigation.navigate('AjustesScreen2')} />
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
});
