import React, {useEffect, useState} from 'react';
import {View, Text, FlatList} from 'react-native';
import SearchBar from '../components/SearchBar';


import PageTemplate from '../components/PageTemplate';
import FriendInfo from '../components/FriendInfo';
import FriendView from '../components/SectionViews/FriendView';


const FriendPage = () =>{
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
        <PageTemplate >

            <SearchBar placeholder="Search"/>
            <FlatList
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{flexDirection:'column', justifyContent:'center', alignItems:'center'}}
                    data={friends}
                    keyExtractor={(item) => `item${item.id}`}
                renderItem={({item})=>{
                return (
                    <View>
                    <FriendInfo picture={<FriendView image={item['urls']['regular']}/>}/>                    
                    </View>

               );
            }}                    
            />
        
        </PageTemplate>
    );

}

export default FriendPage;