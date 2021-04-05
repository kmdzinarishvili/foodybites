import React,{useState, useEffect} from 'react';
import {Text} from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';

import * as Font from 'expo-font';

import Home from './screens/Home';
import RestaurantPage from './screens/RestaurantPage';
import CategoryPage from './screens/CategoryPage';

import FriendPage from './screens/FriendPage';
import Header from './components/Header';


import {w} from './proportion';
import IndRestaurant from './screens/individualPages/IndRestaurant';
import IndCategory from './screens/individualPages/IndCategory';
import IndFriend from './screens/individualPages/IndFriend';


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
       
        <RootStack.Screen
            name="Restaurant"
            component={RestaurantPage }
            options={{
              header:({navigation}) =>{ 
                return (
                <Header 
                navigateBack = {() => {navigation.goBack()}}
                name='Trending Restaurant' search={true}/>
                  )}
            }}
          />
            <RootStack.Screen
            name="Category"
            component={CategoryPage}
            options={{
              header:({navigation}) =>{ 
                return (
                <Header 
                navigateBack = {() => {navigation.goBack()}}
                name='Categories' search={true}/>
                  )}
            }}
          />
            <RootStack.Screen
            name="Friend"
            component={FriendPage}
            options={{
              header:({navigation}) =>{ 
                return (
                <Header 
                navigateBack = {() => {navigation.goBack()}}
                name='Friends' search={true}/>
                  )}
            }}
          />


        <RootStack.Screen
            name="Individual Restaurant"
            component={IndRestaurant}
            options={{
            headerShown:false
            }}
          />
          <RootStack.Screen
            name="Individual Category"
            component={IndCategory}
            options={{
            headerShown:false
            }}
          />
          <RootStack.Screen
            name="Individual Friend"
            component={IndFriend}
            options={{
            headerShown:false
            }}
          />
    
    

        </RootStack.Navigator>

      </NavigationContainer>
    );
  }
};
