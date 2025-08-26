import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';

// Importação das telas
import Um from './screens/Um';
import Excep from './screens/ExCep'; // Se você for usar essa tela para o exercício do CEP
import Dois from './screens/Dois';
import Tres from './screens/Tres';
import Quatro from './screens/Quatro';
import Cinco from './screens/Cinco';
import Seis from './screens/Seis';
import Sete from './screens/Sete';
import Oito from './screens/Oito';
import Nove from './screens/Nove';
import Dez from './screens/Dez';

import { CepProvider } from './contexts/Cepcontext'; // ✔️ Contexto de CEP

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <CepProvider> {/* ✔️ Envolvendo tudo no contexto */}
      <NavigationContainer>
        <Drawer.Navigator
          initialRouteName="Um"
          screenOptions={({ route }) => ({
            headerShown: true,
            drawerStyle: {
              backgroundColor: '#121212',
            },
            drawerLabelStyle: {
              color: '#ffffff',
              fontSize: 16,
            },
            drawerActiveBackgroundColor: '#0057ff',
            drawerActiveTintColor: '#ffffff',
            drawerInactiveTintColor: '#cccccc',
            drawerIcon: ({ color, size }) => {
              const icons: { [key: string]: string } = {
                Um: 'home',
                Dois: 'book',
                Tres: 'list',
                Quatro: 'apps',
                Cinco: 'settings',
                Seis: 'alarm',
                Sete: 'rocket',
                Oito: 'wifi',
                Nove: 'key',
                Dez: 'folder',
                Excep: 'search', // ícone para tela de consulta de CEP
              };
              return (
                <Ionicons
                  name={icons[route.name] || 'alert-circle'}
                  size={size}
                  color={color}
                />
              );
            },
          })}
        >
          <Drawer.Screen name="Um" component={Um} options={{ drawerLabel: 'Exercício 1' }} />
          <Drawer.Screen name="Dois" component={Dois} options={{ drawerLabel: 'Exercício 2' }} />
          <Drawer.Screen name="Tres" component={Tres} options={{ drawerLabel: 'Exercício 3' }} />
          <Drawer.Screen name="Quatro" component={Quatro} options={{ drawerLabel: 'Exercício 4' }} />
          <Drawer.Screen name="Cinco" component={Cinco} options={{ drawerLabel: 'Exercício 5' }} />
          <Drawer.Screen name="Seis" component={Seis} options={{ drawerLabel: 'Exercício 6' }} />
          <Drawer.Screen name="Sete" component={Sete} options={{ drawerLabel: 'Exercício 7' }} />
          <Drawer.Screen name="Oito" component={Oito} options={{ drawerLabel: 'Exercício 8' }} />
          <Drawer.Screen name="Nove" component={Nove} options={{ drawerLabel: 'Exercício 9' }} />
          <Drawer.Screen name="Dez" component={Dez} options={{ drawerLabel: 'Exercício 10' }} />
          <Drawer.Screen name="Excep" component={Excep} options={{ drawerLabel: 'Consulta CEP' }} />
        </Drawer.Navigator>
      </NavigationContainer>
    </CepProvider>
  );
}
