import React from 'react';
import {Pressable ,Text} from 'react-native';



const FollowingButton = ({following}) => { //bool 

    return (
    <Pressable
        style={
            {backgroundColor:'blue',
            width: 100,
            height:30}
        }>
        <Text>FOLLOWING</Text>
    </Pressable>);

}


export default  FollowingButton;
