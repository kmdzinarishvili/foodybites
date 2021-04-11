import React, {useState} from 'react';
import {Pressable ,Text} from 'react-native';
import { h, w } from '../proportion';



const FollowingButton = ({following, style}) => { //bool 
    const [isFollowing, setIsFollowing] = useState(following);
    

    return (
    <Pressable
        style={
            {
                
            backgroundColor:!isFollowing?'#5663FF': '#FFF',
            borderRadius:5,
            width: 235*w,
            height:90*h,
            justifyContent:'center',
            alignItems:'center',
            borderWidth: isFollowing? 1*w: 0,
            borderColor:'#8A98BA',
            ...style
            }
        }
        onPress={()=>{
            setIsFollowing((prev) => !prev); 
        }}
        >
        <Text 
        style={{
            color:!isFollowing?'#FFF': '#8A98BA'
        }}>{isFollowing? 'Unfollow':
            'Follow'
        }</Text>
    </Pressable>);

}


export default  FollowingButton;
