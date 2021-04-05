import React, {useState, useEffect} from 'react';
import {FlatList} from 'react-native';

import FriendView from '../SectionViews/FriendView';

import HomeSection from '../HomeSection';




const FriendSec = ({goTo, navigation}) =>{
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
        fetch_friend_pictures();
    }, [] );

    return(
        <HomeSection title='Friends' number={56} goTo={goTo}>    
        <FlatList
            showsHorizontalScrollIndicator={false}

            data={friends}
            horizontal={true}
            renderItem={({item})=>{
                return (
                <FriendView navigation={navigation} image={item['urls']['regular']}
                />
                )
           
            }}
            keyExtractor={(item) => item.id}
        />
        </HomeSection>
        
    );
}

export default FriendSec;