import * as React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
import { HomeScreen  } from './src/screens/HomeScreen';
import { BuscadorScreen  } from './src/screens/BuscadorScreen';
import { PerfilScreen } from './src/screens/PerfilScreen';
import { AjustesScreen } from './src/screens/AjustesScreen';
import { HomeScreen2  } from './src/screens/HomeScreen2';
import { BuscadorScreen2  } from './src/screens/BuscadorScreen2';
import { PerfilScreen2 } from './src/screens/PerfilScreen2';
import { AjustesScreen2 } from './src/screens/AjustesScreen2';

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
      <Tab.Screen name="Home" component={StackHomeNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen name="Buscador" component={StackBuscadorNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="search-outline" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen name="Perfil" component={StackPerfilNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-circle-outline" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen name="Ajustes" component={StackAjustesNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="settings-outline" size={size} color={color} />
          ),
        }}
      />
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
