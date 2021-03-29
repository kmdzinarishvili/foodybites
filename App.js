import React from 'react';

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';

import Home from './screens/Home';



const RootStack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer >
      <RootStack.Navigator>
        <RootStack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
          }}
        />
      </RootStack.Navigator>

    </NavigationContainer>
  );
};
