import React from 'react';
import {View, Text} from 'react-native';
import { w } from '../proportion';
import styles from '../styles/styles';
import FollowingButton from './FollowingButton';




const FriendInfo = ({picture, name="Collin Fields", numReviews,  following=false}) =>{
    return(
        <View
            style={{flexDirection:'row'}}>
            {picture}
            <View>
                
                <Text style={[{color: '#3E3F68', fontSize:50*w, marginTop:19*w}, styles.jSemi]}>{name}</Text>

                <Text style={{color: 'rgba(110, 127, 170, 0.8)'}}>{numReviews} Review{numReviews!==1?"s":""}</Text>
            </View>
            <FollowingButton/>

        </View>
    );  

}

export default FriendInfo;