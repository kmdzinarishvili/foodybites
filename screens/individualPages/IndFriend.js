import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {View, Text,Pressable} from 'react-native';

const IndFriend =() =>{
    const navigation = useNavigation();
    return (
        <View style={{flexDirection:'row',justifyContent:'center', alignItems:'center'}}>
            <Pressable
            onPress={()=>navigation.goBack()}>
                <Text style={{fontSize:100}}>
                    Individual Friend Page 
                </Text>
            </Pressable>
        </View>
    );
}

export default IndFriend;x