import React from 'react';
import {View, Text, Image, FlatList, StyleSheet, Pressable} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import styles from '../../styles/styles';
import {w,h} from '../../proportion';
import gradients from '../../styles/gradients';
import { useNavigation } from '@react-navigation/native';

const RestaurantPreview = ({type='small', item={urls:{regular:"https://images.unsplash.com/photo-1552566626-52f8b828add9?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MnwyMTg3NTR8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50fGVufDB8fHx8MTYxNzAxMTE2OQ\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=1080"}},
     name ='Happy Bones',
                    category = 'Italian', distance=1.2, rating=4.5,
                    address='394 Broome St, New York, NY 10013, USA',
                    friends=[],
                    open=true,
                 }) =>{

        friends=[{
            id:1,
            url: 'https://images.unsplash.com/photo-1579783483458-83d02161294e?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MnwyMTg3NTR8MHwxfHNlYXJjaHwxfHxwcm9maWxlfGVufDB8fHx8MTYxNzE3MjgxNg\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=400'    
        },{
            id:2,
            url:"https://images.unsplash.com/photo-1511367461989-f85a21fda167?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MnwyMTg3NTR8MHwxfHNlYXJjaHwyfHxwcm9maWxlfGVufDB8fHx8MTYxNzE3MjgxNg\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=400"
        },
        ];
        const navigation=useNavigation();
        const width= type=='small'?907.85*w:992*w;
    return(
        <Pressable 
            onPress={() => 
            navigation.navigate('Individual Restaurant', {image:item['urls']['regular']})}>
            <View style={restStyles.containter}>
                <Text style={[restStyles.whiteButton, restStyles.left, styles.jBold, {color: open?'#4CD964': '#FF3B30'}]}>{open?'OPEN':'CLOSED'}</Text>
                <View style={[restStyles.whiteButton, restStyles.right, {flexDirection: 'row', justifyContent:'space-between', alignItems:'center'}]}>
                    <Image 
                    style={{width:28.7*w, height:27.37*h, marginRight:2}}
                    source={require("../../imgs/star.png")}/>
                    <Text style={[styles.blue, restStyles.size25, styles.jSemi, ]}>{rating}</Text>
                </View>
                
            <Image 
                style={{
                 width: width,
                    height:type=='small'? 482.83*h:560*h, 
                }}
                source={{
                    uri: item['urls']['regular']
                }}
                />
                <View style={[restStyles.bottom, {width:width}]}>
                <View style={{flexDirection:'row', alignItems:'center'}}> 
                        <Text style={[styles.font50, styles.spaceRight, styles.jBold, {color:'#3E3F68'}]}>{name}</Text> 
                        
                        <LinearGradient colors={gradients.pink} 
                            style={[styles.linearGradient,  styles.spaceRight, restStyles.rad9, {opacity:0.65}]}>
                        <Text  style={[restStyles.white22, ]}>{category}</Text>
                        </LinearGradient>
                        
                            <Text style={[styles.jReg, restStyles.white22, restStyles.purple,restStyles.rad9]}>{distance} km</Text>
                           <View style={{flexDirection:'row-reverse' , paddingRight:230*w}}>
                               {friends.reverse().map((item)=>  <Image key={item.id} style={restStyles.miniFriend} source={{uri:item.url}}/>)}
                           </View> 
                            
                    </View>
                        <Text style={[restStyles.address, styles.jReg]} >{address}</Text>
                </View>
            </View>
        </Pressable>
    );
};

const restStyles = StyleSheet.create({
    containter:{
        borderRadius:10,
        overflow:'hidden', 
        position:'relative',
        margin:27*w,

    },
    whiteButton:{
        backgroundColor:'#FFF', position:'absolute', zIndex:1000, top:36*h, 
            overflow:'hidden', padding:31*w, borderRadius:10, fontSize:25*w
    },
    left:{
        left: 31*w,

    },
    right:{
        right:31*w
    },
 
    size25:{
        fontSize:25*w
    },
    bottom:{
       
         backgroundColor:"#FFF",
          flexDirection:'column', 
          justifyContent:'space-around',
          padding:25*w

    },
    white22:{
        fontSize:22*w,
        color:'#FFF',
        paddingHorizontal:23*w,
        paddingVertical:12*w,
      
    },
    rad9:{
        borderRadius:9,
        overflow:'hidden'
    },
    purple:{
        backgroundColor: '#848DFF'
    },
    address:{
        color:'#8A98BA',
        fontSize:36*w
    },
    miniFriend:{
       
        width:55*w,
        height:55*w,
        borderRadius:55*w/2,
        borderColor:'#FFF',
        borderWidth:3*w,
        marginLeft:-10

    }
    
});

export default RestaurantPreview;