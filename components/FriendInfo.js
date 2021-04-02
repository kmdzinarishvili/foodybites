import React from 'react';
import {View, Text} from 'react-native';
import FollowingButton from './FollowingButton';




const FriendInfo = ({picture, name="Collin Fields", numReviews,  following=false}) =>{
    return(
        <View
            style={{flexDirection:'row'}}>
            {picture}
            <View>
                
                <Text>{name}</Text>
                <Text>{numReviews} Review{numReviews!==1?"s":""}</Text>
            </View>
            <FollowingButton/>

        </View>
    );  

}

export default FriendInfo;