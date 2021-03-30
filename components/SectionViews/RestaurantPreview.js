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
        <View style={{borderRadius:10, overflow:'hidden', position:'relative', margin:27*w}}>
            <Text style={{backgroundColor:'#FFF', position:'absolute', zIndex:1000, top:36*h, left: 31*w,
            overflow:'hidden', padding:31*w, borderRadius:10, color:'#4CD964', fontSize:25*w}}>OPEN</Text>
        
        
            <View style={{borderRadius:10,backgroundColor:'#FFF', position:'absolute', zIndex:1000, top:36*h, right: 31*w,
            overflow:'hidden', flexDirection: 'row',justifyContent:'space-between', alignItems:'center', padding:31*w}}>
                <Image 
                style={{width:28.7*w, height:27.37*h}}
                source={require("../../imgs/star.png")}/>
                <Text style={{color:"#222455", fontSize:25*w}}>  {rating}</Text>
            </View>
              
    


          <Image 
            style={{
               width:Dimensions.get('window').width*907.85/1125,
                height:Dimensions.get('window').height*482.83/2436
            }}
            source={{
                uri: item['urls']['regular']
            }}
            />
            <View style={{height:225*h, width:'100%', backgroundColor:"#FFF", flexDirection:'column', justifyContent:'space-around'}}>
               <View style={{flexDirection:'row', alignContent:'center'}}> 
                    <Text style={styles.font50, styles.spaceRight, styles.jBold}>{name}</Text> 
                    <Text  style={styles.font50, styles.spaceRight}>{category}</Text>
                    <Text style={styles.jReg}>{distance}</Text>
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



export default RestaurantPreview;