import * as React from 'react';
import { Button, TextInput, Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
import { HomeScreen  } from './src/screens/HomeScreen';

function ScreenHome() {
  const navigation = useNavigation();
  return (
    <View>
      <HomeScreen/>
    </View>
  );
}

const Tab = createBottomTabNavigator();
function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home"     component={StackHomeNavigator} />
      <Tab.Screen name="Buscador" component={StackBuscadorNavigator} />
      <Tab.Screen name="Perfil"   component={StackPerfilNavigator}/ >
      <Tab.Screen name="Ajustes"   component={StackAjustesNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="home-outline" size={24} color={color} />,
            <Ionicons name="search-outline" size={24} color={color} />,
            <Ionicons name="person-circle-outline" size={24} color={color} />,
            <Ionicons name="settings-outline" size={24} color={color} />
           ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <View style={styles.container}>
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
