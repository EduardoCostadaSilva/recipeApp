import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomePage from "../screens/homescreen";


const Stack = createNativeStackNavigator();

export default function AppNavigatior() {
  return(
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomePage} />
    </Stack.Navigator>
  </NavigationContainer>
  )
}
