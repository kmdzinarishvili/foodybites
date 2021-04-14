import React from 'react';
import {View} from 'react-native';


import SafeView from '../components/SafeView';
import SearchBar from '../components/SearchBar';
import FooterNavigation from '../components/FooterNavigation';


import RestSec from '../components/Sections/RestSec';
import CatSec from '../components/Sections/CatSec';
import FriendSec from '../components/Sections/FriendSec';

import {w} from '../proportion';



const Home = ({navigation}) => {
    return (
        <SafeView >
            <View style={{
                paddingHorizontal: 68*w,
                flex:1,
                justifyContent:'space-between',
                backgroundColor:'#F9F9f9',
            }}>
            <View >
                <SearchBar placeholder="Find Restaurants" action={()=>navigation.navigate('Home Search')}/>
                <RestSec   goTo={() =>navigation.navigate('Restaurant')}/>
                <CatSec goTo={() =>navigation.navigate('Category')}/>
                <FriendSec goTo={() =>navigation.navigate('Friend')}/>
           </View>
           </View>
           <FooterNavigation/>

        </SafeView>

    )
}


export default Home;