import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from "@react-navigation/drawer";
const  menunavi = createDrawerNavigator();

import  TelajavaScript from "./componentes/TelaJavaScript";
import  TelaReact from "./componentes/TelaReact";
import  TelaNode from "./componentes/TelaReact";

export default function App() {
  return (
    <NavigationContainer>
      <menunavi.Navigator>
        <menunavi.Screen name="Java Script" component={TelajavaScript} />
        <menunavi.Screen name="React " component={TelaReact} />
        <menunavi.Screen name="Node" component={TelaNode} />
      </menunavi.Navigator>
    </NavigationContainer>
  );
}


