import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import Animated, { 
    useAnimatedGestureHandler, 
    useAnimatedStyle, 
    useSharedValue
} from 'react-native-reanimated'
import { PanGestureHandler } from 'react-native-gesture-handler';




const SLIDER_WIDTH = 300;
const KNOB_WIDTH = 70;
// const MAX_RANGE = 20;

const SliderPage =() =>{
    const translateX = useSharedValue(0);
    const isSliding= useSharedValue(false);
    const onGestureEvent = useAnimatedGestureHandler({
        onStart: (_, ctx) => {
        ctx.offsetX = translateX.value
        },
        onActive: (event, ctx) => {
        isSliding.value = true
        translateX.value = event.translationX + ctx.offsetX
        },
        onEnd: () => {
        isSliding.value = false
        },
    })

    const scrollTransitionStyle = useAnimatedStyle(()=>{
        return {transform:[{translateX: translateX.value}]};
    });

    const progressStyle = useAnimatedStyle(()=>{
        return{
            width:translateX.value+KNOB_WIDTH
        }
    });
    


    return(
        
    <View style={{width:'100%', height:'100%',
        alignItems:'center', justifyContent:'center'}}>
        <View style={styles.slider}>
            <Animated.View style={[styles.progress, progressStyle]} />
            <PanGestureHandler onGestureEvent={onGestureEvent}>
                <Animated.View style={[ styles.knob, scrollTransitionStyle]}>
                        <Image style={{bottom:100}}source={require('../imgs/dist_knob.png')}/>
                    </Animated.View>
            </PanGestureHandler>
        </View>
    </View>
    )

}


const styles = StyleSheet.create({
    slider: {
      height: KNOB_WIDTH,
      width: SLIDER_WIDTH,
      borderRadius: KNOB_WIDTH / 2,
      backgroundColor: '#ddd',
      justifyContent: 'center',
    },
    progress: {
      ...StyleSheet.absoluteFillObject,
      backgroundColor: '#3f51b5',
      borderRadius: KNOB_WIDTH / 2,
    },
    knob: {
        width:0, height:0,
    //   height: KNOB_WIDTH,
    //   width: KNOB_WIDTH,
    //   borderRadius: KNOB_WIDTH / 2,
      backgroundColor: '#757de8',
    //   justifyContent: 'center',
    //   alignItems: 'center',
    },
  })

export default SliderPage