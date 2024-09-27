import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from './src/screens/Home';
import { Scanner } from './src/screens/Scanner';
import { History } from './src/screens/History';
import { StorageContextProvider } from './src/context/context';
 
const Stack = createStackNavigator();

const App = () => {
  return (
    <StorageContextProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Scanner" component={Scanner} />
          <Stack.Screen name="History" component={History} />
        </Stack.Navigator>
      </NavigationContainer>
    </StorageContextProvider>
  );
}

export default App;