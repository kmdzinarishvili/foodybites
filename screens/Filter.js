import React, {useState, useRef, useCallback} from 'react';
import {View, Text, Pressable, Image,Animated} from 'react-native';
import { h, w } from '../proportion';
import styles from '../styles/styles';

import Rating from '../components/Review/Rating';
import gradients from '../styles/gradients';
import {LinearGradient} from 'expo-linear-gradient';
import { PanGestureHandler } from 'react-native-gesture-handler';


const Category = ({country, id, pressedId, setPressedId }) =>{

    const gradient = id%3==0? gradients.pink:id%3==1? gradients.purple:gradients.blue;
    const pressed = pressedId ==id
    return(
        <Pressable onPress={()=>setPressedId(id)}><View style={{width:300*w, height:133*h,
            borderColor:"rgba(112, 112, 112, 0.4)",
            borderRadius:23*w,
            borderWidth:1*w,
            justifyContent:'center',
            alignItems:'center',margin:21*w
     }}>

        {pressed? <LinearGradient style={{width:'100%', height:'100%',        borderColor:"rgba(112, 112, 112, 0.4)",
            borderRadius:23*w,
            borderWidth:1*w,
            justifyContent:'center',
            alignItems:'center',margin:21*w}} colors={gradient}>
            <Text style={[styles.jSemi, {fontSize:50*w, color:'#FFF'}]}>{country}</Text>
        </LinearGradient>: 
                <Text style={[styles.jSemi, {fontSize:50*w, color: '#rgba(62, 63, 104, 0.5)'}]}>{country}</Text>

        }
        </View>
        </Pressable>
        )

}

const FilterTitle = ({style,text})=>{
    return(<Text style={[styles.title, style]}>{text}</Text>);
}

const Comp = () => {
	const translationXRef = useRef(new Animated.Value(0));

	const onGestureEvent = useCallback(
		Animated.event(
			[{
				nativeEvent: {
					translationX: translationXRef.current,
				},
			}],
			{ useNativeDriver: true },
		),
		[],
	);



	return (
		<PanGestureHandler onGestureEvent={onGestureEvent}>
			<Animated.View
				style={{
					width: 200,
					height: 200,
					backgroundColor: 'blue',
					transform: [
						{ translateX: translationXRef.current },
					],
				}}
			/>
		</PanGestureHandler>
	);
};

const Distance = ()=>{
    const [distance, setDistance]= useState(0);

    return(<PanGestureHandler 
    onGestureEvent={(event)=>console.log(event)}
    onHandlerStateChange={(event)=> console.log(event)}>
        <View style={{width:'100%'}}>
        <View style={{width: distance+'%', height: 27*h, backgroundColor:'#5663FF', borderRadius:14*w,
        borderBottomRightRadius:0, borderTopRightRadius:0, position:'absolute', left:0}}></View>
            <Image /> 
            <View style={{width: 100-distance+'%', height: 27*h, backgroundColor:'#EDEEFF', borderRadius:14*w,
        borderBottomLeftRadius:0, borderTopLeftRadius:0, position:'absolute', right:0}}></View>
        </View>
    </PanGestureHandler>);
}

const Filter = () =>{
 

    const [pressedId, setPressedId] = useState();
    // //pressed.id 
    // //then change accordingly
    const countries = ['Italian', 'Chinese', 'Mexican',
                        'Thai', 'Arabian', 'Indian',
                        'American', 'Korean', 'European'];
    
    return (<View style={{backgroundColor:'#FAFAFA', height:'100%',
                padding:"4%",
                flexDirection:'column',
                alignItems:'center'
                }}>
        <FilterTitle style={{marginTop:127*h, marginBottom:83*h}} text='Select Category'/>

        <View style={{flexDirection:'row', flexWrap:'wrap',  justifyContent:'space-around'}}>
            {countries.map((c, index)=> <Category key={`${c}${index}`}country = {c} id={index} pressedId={pressedId} setPressedId={setPressedId}
                    />)}
        </View>
        <FilterTitle style={{marginTop:127*h, marginBottom:83*h}} text='Distance'/>
                    <Comp/>
        <FilterTitle style={{marginTop:127*h, marginBottom:83*h}} text='Ratings'/>
        
        <Rating />

    </View>)
}

export default Filter;