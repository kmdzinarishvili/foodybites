import React,{useState, useEffect} from 'react';
import {Text, View} from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';

import * as Font from 'expo-font';

import Header from './components/Header';


import Home from './screens/Home';

import RestaurantPage from './screens/RestaurantPage';
import CategoryPage from './screens/CategoryPage';
import FriendPage from './screens/FriendPage';




import IndRestaurant from './screens/individualPages/IndRestaurant';
import IndCategory from './screens/individualPages/IndCategory';
import IndFriend from './screens/individualPages/IndFriend';

import Filter from './screens/Filter';
import ReviewPage from './screens/ReviewPage';

import Animated from 'react-native-reanimated';
import HomeSearch from './screens/HomeSearch';


const fetchFonts = async() => {
  return Font.loadAsync({
  'josefin-bold': require('./assets/fonts/JosefinSans-Bold.ttf'),
  'josefin-regular': require('./assets/fonts/JosefinSans-Regular.ttf'),
  'josefin-semibold':require('./assets/fonts/JosefinSans-SemiBold.ttf')
  });
  };

const RootStack = createStackNavigator();



const RootApp = () =>{
  Animated.addWhitelistedNativeProps({text: true});


  return (
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
          header:() =>{ 
            return (
            <Header 
            color='#FFF'
            search={false}
            name='Trending Restaurant'/>
              )}
        }}
      />
        <RootStack.Screen
        name="Category"
        component={CategoryPage}
        options={{
          header:() =>{ 
            return (
            <Header 
            name='Categories' search={true}/>
              )}
        }}
      />
      <RootStack.Screen
        name="Friend"
        component={FriendPage}
        options={{
          header:() =>{ 
            return (
            <Header 
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
          header:() =>{ 
            return (
            <Header 
            color='#FFF'
            name='Profile' search={true}/>
              )}
        }}       
      />

  <RootStack.Screen
          name="Filter"
          component={Filter}
          options={{
            header:() =>{ 
              return (
              <Header 
              name='Filter' search={true}/>
                )}
          }}          
        />


  <RootStack.Screen
          name="Review"
          component={ReviewPage}
          options={{
            header:() =>{ 
              return (
              <Header 
              name='Review & Rating' search={true}/>
                )}
          }}          
        />

  <RootStack.Screen
            name="Home Search"
            component={HomeSearch}
            options={{
              headerShown:false
            }}          
          />
    </RootStack.Navigator>
    

  );
}
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
      <View style={{justifyContent:'center', alignItems:'center'}}>
         <Text>LOADING</Text>
      </View>

    );

  }


  else{

    return (
      <NavigationContainer>
        <RootApp/>
      </NavigationContainer>
    );
  }
};
