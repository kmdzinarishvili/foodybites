import React from 'react';
import {Pressable ,Text} from 'react-native';



const FollowingButton = ({following}) => { //bool 

    return (
    <Pressable
        style={
            {
                
            backgroundColor:'#5663FF',
            borderRadius:10,
            width: 100,
            height:30}
        }>
        <Text 
        style={{
            color:'#FFF'
        }}>FOLLOW</Text>
    </Pressable>);

}


export default  FollowingButton;
