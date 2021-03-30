import React,{useState} from 'react';
import {Text} from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';

import * as Font from 'expo-font';
import { AppLoading } from 'expo-app-loading';

import Home from './screens/Home';
import { useEffect } from 'react';


// x-special/nautilus-clipboard
// copy
// file:///home/keti/foodybite/assets/fonts/JosefinSans-Bold.ttf
// file:///home/keti/foodybite/assets/fonts/JosefinSans-BoldItalic.ttf
// file:///home/keti/foodybite/assets/fonts/JosefinSans-ExtraLight.ttf
// file:///home/keti/foodybite/assets/fonts/JosefinSans-LightItalic.ttf
// file:///home/keti/foodybite/assets/fonts/JosefinSans-Medium.ttf
// file:///home/keti/foodybite/assets/fonts/JosefinSans-MediumItalic.ttf
// file:///home/keti/foodybite/assets/fonts/JosefinSans-ThinItalic.ttf
// file:///home/keti/foodybite/assets/fonts/JosefinSans-VariableFont_wght.ttf
// x-special/nautilus-clipboard
// copy
// file:///home/keti/foodybite/assets/fonts/JosefinSans-ExtraLightItalic.ttf
// file:///home/keti/foodybite/assets/fonts/JosefinSans-Italic.ttf
// file:///home/keti/foodybite/assets/fonts/JosefinSans-Italic-VariableFont_wght.ttf
// file:///home/keti/foodybite/assets/fonts/JosefinSans-Light.ttf
// file:///home/keti/foodybite/assets/fonts/JosefinSans-Regular.ttf
// file:///home/keti/foodybite/assets/fonts/JosefinSans-SemiBold.ttf
// file:///home/keti/foodybite/assets/fonts/JosefinSans-SemiBoldItalic.ttf
// file:///home/keti/foodybite/assets/fonts/JosefinSans-Thin.ttf


const fetchFonts = async() => {
  return Font.loadAsync({
  'josefin-bold': require('./assets/fonts/JosefinSans-Bold.ttf'),
  'josefin-regular': require('./assets/fonts/JosefinSans-Regular.ttf')
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
      // <AppLoading
      //   startAsync={fetchFonts}
      //   onFinish={() => setDataLoaded(true)}
      //   />
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
