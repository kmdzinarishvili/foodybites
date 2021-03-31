import React from 'react';
import {View, Text, Image, Dimensions, FlatList, StyleSheet} from 'react-native';
import styles from '../../styles/styles';
import {w,h} from '../../proportion';

const RestaurantPreview = ({item="https://images.unsplash.com/photo-1552566626-52f8b828add9?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MnwyMTg3NTR8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50fGVufDB8fHx8MTYxNzAxMTE2OQ\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=1080",
     name ='Happy Bones',
                    category = 'Italian', distance=1.2, rating=4.5,
                    address='394 Broome St, New York, NY 10013, USA',
                    friends=[]}) =>{

                        friends=[1,2,3];
    return(
        <View style={restStyles.containter}>
            <Text style={[restStyles.whiteButton, restStyles.left, styles.jBold]}>OPEN</Text>
            <View style={[restStyles.whiteButton, restStyles.right, {flexDirection: 'row', justifyContent:'space-between', alignItems:'center'}]}>
                <Image 
                style={{width:28.7*w, height:27.37*h, marginRight:2}}
                source={require("../../imgs/star.png")}/>
                <Text style={[restStyles.darkBlue, restStyles.size25, styles.jSemi, ]}>{rating}</Text>
            </View>
              
          <Image 
            style={{
               width:907.85*w,
                height:482.83*h
            }}
            source={{
                uri: item['urls']['regular']
            }}
            />
            <View style={restStyles.bottom}>
               <View style={{flexDirection:'row', alignItems:'center'}}> 
                    <Text style={[styles.font50, styles.spaceRight, styles.jBold, {color:'#3E3F68'}]}>{name}</Text> 
                    <Text  style={[restStyles.white22, styles.spaceRight]}>{category}</Text>
                    <Text style={[styles.jReg, restStyles.white22]}>{distance}</Text>
                    <FlatList
                                contentContainerStyle={{flexDirection:'row', alignSelf:'flex-end'}}
                                data={friends}
                                keyExtractor={(item) => `item${item}`}
                                renderItem={({item})=>{
                                    return (
                                <Text>{item} </Text>
                                    )
                            
                                }}
                                
                            />
                </View>
                    <Text >{address}</Text>

            </View>


        </View>
    );
};

const restStyles = StyleSheet.create({
    containter:{
        borderRadius:10,
        overflow:'hidden', 
        position:'relative',
        margin:27*w
    },
    whiteButton:{
        backgroundColor:'#FFF', position:'absolute', zIndex:1000, top:36*h, 
            overflow:'hidden', padding:31*w, borderRadius:10, color:'#4CD964', fontSize:25*w
    },
    left:{
        left: 31*w,

    },
    right:{
        right:31*w
    },
    darkBlue:{
        color:'#222455'
    },
    size25:{
        fontSize:25*w
    },
    bottom:{
        height:225*h, 
        width:'100%',
         backgroundColor:"#FFF",
          flexDirection:'column', 
          justifyContent:'space-around',
          padding:25*w

    },
    white22:{
        fontSize:22*w,
        color:'#FFF'
    }
});

export default RestaurantPreview;