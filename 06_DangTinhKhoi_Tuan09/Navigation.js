import { NavigationContainer, DefaultTheme } from "@react-navigation/native"
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Feed from "./screens/Feed"
import Product from "./screens/Product"

export default Navigation = () => {
    const Stack = createNativeStackNavigator();
    const MyTheme = {
        ...DefaultTheme,
        colors: {
          ...DefaultTheme.colors,
          background: 'white'
        },
      };

    return (
        <NavigationContainer  theme={MyTheme}>
            <Stack.Navigator initialRouteName="Feed">
                <Stack.Screen name = 'Feed' component={Feed} options={{ headerShown: false}}></Stack.Screen>
                <Stack.Screen name = 'Product' component={Product} options={{ headerShown: false}}></Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    )
}