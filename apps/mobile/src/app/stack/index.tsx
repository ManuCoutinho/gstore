import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer, DarkTheme } from "@react-navigation/native";
import Checkout from "./Checkout";
import ProductDetails from "./ProductDetails";
import Tabs from "../tabs";
import LatestPurchases from "./LatestPurchases";
import { Providers } from "../../data/contexts";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Providers>
      <NavigationContainer theme={DarkTheme}>
        <Stack.Navigator initialRouteName="Tabs">
          <Stack.Screen
            name="Tabs"
            component={Tabs}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="ProdutoDetalhes"
            component={ProductDetails}
            options={{
              title: "Detalhes do Produto",
              headerBackTitle: "Voltar",
              headerShown: true,
              headerStyle: { backgroundColor: "#0D001E" },
              headerTintColor: "#FFF",
            }}
          />
          <Stack.Screen
            name="Pagamento"
            component={Checkout}
            options={{
              title: "Detalhes do Pagamento",
              headerBackTitle: "Voltar",
              headerShown: true,
              headerStyle: { backgroundColor: "#0D001E" },
              headerTintColor: "#FFF",
            }}
          />
          <Stack.Screen
            name="Últimas Compras"
            component={LatestPurchases}
            options={{
              title: "Últimas Compras",
              headerBackTitle: "Voltar",
              headerShown: true,
              headerStyle: { backgroundColor: "#0D001E" },
              headerTintColor: "#FFF",
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Providers>
  );
}
