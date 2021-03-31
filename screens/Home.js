import React, {useState, useEffect} from 'react';
import {View, Text, Dimensions, FlatList, Image} from 'react-native';


import SafeView from '../components/SafeView';
import SearchBar from '../components/SearchBar';
import FooterNavigation from '../components/FooterNavigation';


import RestSec from '../components/Sections/RestSec';
import CatSec from '../components/Sections/CatSec';
import FriendSec from '../components/Sections/FriendSec';

const Home = () => {
    return (
        <SafeView >
            <View style={{
                paddingHorizontal: 0.06044444444*Dimensions.get('window').width,
                flex:1,
                justifyContent:'space-between',
                backgroundColor:'#F9F9f9'
            }}>
            <View >
                <SearchBar />
                <RestSec/>
                <CatSec/>
              
                <FriendSec/>
           </View>
           <FooterNavigation/>
           </View>
        </SafeView>

    )
}



const styles= {
    restStyles:{

    },
    catStyles:{

    },
    friendStyles:{

    }
}

export default Home;