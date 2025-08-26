import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Um from "./screens/Um";
import Dois from "./screens/Dois";
import Tres from "./screens/Tres";
import Quatro from "./screens/Quatro";
import Cinco from "./screens/Cinco";
import Seis from "./screens/Seis";
import Sete from "./screens/Sete";
import Oito from "./screens/Oito";
import Nove from "./screens/Nove";
import Dez from "./screens/Dez";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Um">
        <Drawer.Screen name="Exercicio 1" component={Um} />
        <Drawer.Screen name="Exercicio 2" component={Dois} />
        <Drawer.Screen name="Exercicio 3" component={Tres} />
        <Drawer.Screen name="Exercicio 4" component={Quatro} />
        <Drawer.Screen name="Exercicio 5" component={Cinco} />
        <Drawer.Screen name="Exercicio 6" component={Seis} />
        <Drawer.Screen name="Exercicio 7" component={Sete} />
        <Drawer.Screen name="Exercicio 8" component={Oito} />
        <Drawer.Screen name="Exercicio 9" component={Nove} />
        <Drawer.Screen name="Exercicio 10" component={Dez} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
