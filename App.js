import * as React from 'react';
import { Button, TextInput, Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
import { HomeScreen  } from './src/screens/HomeScreen';
import { BuscadorScreen  } from './src/screens/BuscadorScreen';
import { PerfilScreen } from './src/screens/PerfilScreen';
import { AjustesScreen } from './src/screens/AjustesScreen';

const Stack = createNativeStackNavigator();

function StackHomeNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="HomeScreen2" component={HomeScreen2} />
    </Stack.Navigator>
  );
}

function StackBuscadorNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="BuscadorScreen" component={BuscadorScreen} />
      <Stack.Screen name="BuscadorScreen2" component={BuscadorScreen2} />
    </Stack.Navigator>
  );
}

function StackPerfilNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="PerfilScreen" component={PerfilScreen} />
      <Stack.Screen name="PerfilScreen2" component={PerfilScreen2} />
    </Stack.Navigator>
  );
}

function StackAjustesNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="AjustesScreen" component={AjustesScreen} />
      <Stack.Screen name="AjustesScreen2" component={AjustesScreen2} />

    </Stack.Navigator>
  );
}

const Tab = createBottomTabNavigator();
function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home"     component={StackHomeNavigator} />
      <Tab.Screen name="Buscador" component={StackBuscadorNavigator} />
      <Tab.Screen name="Perfil"   component={StackPerfilNavigator} />
      <Tab.Screen name="Ajustes"   component={StackAjustesNavigator} />
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="home-outline" size={24} color={color} />,
            <Ionicons name="search-outline" size={24} color={color} />,
            <Ionicons name="person-circle-outline" size={24} color={color} />,
            <Ionicons name="settings-outline" size={24} color={color} />
           ),
        }}
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
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
