import React from 'react';
import {View, Text} from 'react-native';
import { w } from '../proportion';
import styles from '../styles/styles';
import FollowingButton from './FollowingButton';




const FriendInfo = ({image, name="Collin Fields", numReviews=72,  following=false}) =>{
    return(
        <View
            style={{flexDirection:'row', width:'100%', justifyContent: 'space-around', alignItems:'center'}}>
                {image}
            <View  >
                
                <Text style={[{color: '#3E3F68', fontSize:50*w, marginTop:19*w}, styles.jSemi]}>{name}</Text>

                <Text style={[{color: 'rgba(110, 127, 170, 0.8)', marginTop:19*w,fontSize:40*w}, styles.jReg]}>{numReviews} Review{numReviews!==1?"s":""}</Text>
            </View>
            <FollowingButton following={following}/>

        </View>
    );  

}

export default FriendInfo;