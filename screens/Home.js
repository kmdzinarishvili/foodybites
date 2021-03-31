import React, {useState, useEffect} from 'react';
import {View, Text, Dimensions, FlatList, Image} from 'react-native';


import SafeView from '../components/SafeView';
import SearchBar from '../components/SearchBar';
import HomeSection from '../components/HomeSection';
import FooterNavigation from '../components/FooterNavigation';

import RestSec from '../components/Sections/RestSec';
import FriendView from '../components/SectionViews/FriendView';
import CatView from '../components/SectionViews/CatView';
import CatSec from '../components/Sections/CatSec';
import FriendSec from '../components/Sections/FriendSec';

const Home = () => {
    const [categories, setCategories] = useState();
    const [friends, setFriends] = useState();

    const fetch_friend_pictures= async () =>{
        const result = await fetch(
            'https://api.unsplash.com/search/photos/?client_id=i3AmYBQbRiDxMi3p937gP1nTnvqdBuSeyIm_99ZQ_jE&query=profile'
        ).then(res=>res.json()).then(res=>res['results'])
        .then(json => {setFriends(json)})
        .catch((error) => {
            throw error;
        });
    }
    useEffect(() =>{
        // fetch_restaurant_pictures();
        fetch_friend_pictures();
    }, [] );
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
                    {/* <HomeSection title='Friends' number={56}>    
                    <FlatList
                        showsHorizontalScrollIndicator={false}

                        data={friends}
                        horizontal={true}
                        renderItem={({item})=>{
                            return (
                            <FriendView image={item['urls']['regular']}
                            />
                            )
                       
                        }}
                        keyExtractor={(item) => item.id}
                    />
                    </HomeSection>
                     */}
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