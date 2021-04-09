import React from 'react';
import {View} from 'react-native';


import SafeView from '../components/SafeView';
import SearchBar from '../components/SearchBar';
import FooterNavigation from '../components/FooterNavigation';


import RestSec from '../components/Sections/RestSec';
import CatSec from '../components/Sections/CatSec';
import FriendSec from '../components/Sections/FriendSec';

import {w} from '../proportion';

const Home = () => {
    return (
        <SafeView >
            <View style={{
                paddingHorizontal: 68*w,
                flex:1,
                justifyContent:'space-between',
                backgroundColor:'#F9F9f9'
            }}>
            <View >
                <SearchBar placeholder="Find Restaurants"/>
                <RestSec  />
                <CatSec />
                <FriendSec />
           </View>
           <FooterNavigation/>
           </View>
        </SafeView>

    )
}


export default Home;