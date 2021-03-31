import React,{useState} from 'react';
import {Text} from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';

import * as Font from 'expo-font';

import Home from './screens/Home';
import { useEffect } from 'react';


const fetchFonts = async() => {
  return Font.loadAsync({
  'josefin-bold': require('./assets/fonts/JosefinSans-Bold.ttf'),
  'josefin-regular': require('./assets/fonts/JosefinSans-Regular.ttf'),
  'josefin-semibold':require('./assets/fonts/JosefinSans-SemiBold.ttf')
  });
  };

const RootStack = createStackNavigator();

export default function App() {
  const [dataLoaded, setDataLoaded] = useState(false);

  const loadFonts = async() =>{
    await fetchFonts();
    setDataLoaded(true);
  }
  useEffect(()=>{
    loadFonts();
  });

  if(!dataLoaded){
    return(
      <Text>LOADING</Text>

    );

  }else{
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
  }
};
