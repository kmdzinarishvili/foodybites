import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {View, Text,StyleSheet} from 'react-native';
import FriendView from '../../components/SectionViews/FriendView';
import {w, h } from '../../proportion';
import styles from '../../styles/styles';


const IndFriend =({name ='Jayson Acevedo', 
            email = 'jayson.acevedo@gmail.com'}) =>{
    const navigation = useNavigation();
    return (
        <View style={profileStyles.container}>
            <FriendView marginTop={146*h} width={374*w} 
                height={374*h}/>

            <Text style={profileStyles.name}>{name}</Text>
            <Text style={profileStyles.email}>{email}</Text>
        </View>
    );
}

const profileStyles= StyleSheet.create({
    container: {
        flexDirection:'column',
        justifyContent:'center', 
        alignItems:'center',
    
        
    },
    name:{
       color: '#3E3F68',
       fontSize:66*w,
       ...styles.jSemi,
       marginTop:64*h

    },
    email:{
        color:'#6E7FAA',
        opacity:0.8,
        ...styles.jReg,
        marginTop:35*h
    }
});

export default IndFriend;