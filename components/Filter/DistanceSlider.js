import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import Animated, { 
    useAnimatedGestureHandler, 
    useAnimatedStyle, 
    useSharedValue
} from 'react-native-reanimated'
import { PanGestureHandler } from 'react-native-gesture-handler';

import {w,h} from '../../proportion';


const SLIDER_WIDTH = '95%';
const KNOB_WIDTH = 98.11*w;
const KNOB_HEIGHT = 144.95*h;
const SLIDER_HEIGHT = 27*h;
// const MAX_RANGE = 20;

const DistanceSlider =() =>{
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
            width:translateX.value+KNOB_WIDTH/2
        }
    });
    


    return(
        
        <View style={styles.slider}>
            <Animated.View style={[styles.progress, progressStyle]} />
            <PanGestureHandler onGestureEvent={onGestureEvent}>
                <Animated.View style={[  scrollTransitionStyle]}>
                        <Image  style={styles.knob} source={require('../../imgs/dist_knob.png')}/>
                    </Animated.View>
            </PanGestureHandler>
        </View>
    )

}


const styles = StyleSheet.create({
    slider: {
      height: SLIDER_HEIGHT,
      width: SLIDER_WIDTH,
      borderRadius: KNOB_WIDTH / 2,
      backgroundColor: '#EDEEFF',
      justifyContent: 'center',
    },
    progress: {
      ...StyleSheet.absoluteFillObject,
      backgroundColor: '#5663FF',
      borderRadius: KNOB_WIDTH / 2,
      
    },
    knob: {
        width:KNOB_WIDTH,
        height:KNOB_HEIGHT,
        bottom:69*h
   
    },
  })

export default DistanceSlider;