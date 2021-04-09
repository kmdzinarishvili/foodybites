import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import Animated, { 
    useAnimatedGestureHandler, 
    useAnimatedStyle, 
    useSharedValue
} from 'react-native-reanimated'
import { PanGestureHandler } from 'react-native-gesture-handler';

import {w,h} from '../../proportion';



const SLIDER_WIDTH = 984*w;
const SLIDER_HEIGHT =27 *h;
const KNOB_WIDTH = 98.11*w;
const KNOB_HEIGHT = 144.95*h;
const KNOB_OFFSET = 69*h;
const BORDER_RADIUS =14;
// const MAX_RANGE = 20;

const DistanceSlider =({style}) =>{
    const translateX = useSharedValue(0-KNOB_WIDTH/2);
    const isSliding= useSharedValue(false);
    const onGestureEvent = useAnimatedGestureHandler({
        onStart: (_, ctx) => {
        ctx.offsetX = translateX.value 
        },
        onActive: (event, ctx) => {
        const clamp = (value, lowerBound, upperBound) => {
            return Math.min(Math.max(lowerBound, value), upperBound)
        }
        isSliding.value = true
        translateX.value = clamp(
            event.translationX + ctx.offsetX,
            0 - KNOB_WIDTH/2,
            SLIDER_WIDTH -KNOB_WIDTH/2

          )},
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
        
        <View style={[styles.slider, style]}>
            <Animated.View style={[styles.progress, progressStyle]} />
            <PanGestureHandler onGestureEvent={onGestureEvent}>
                <Animated.View style={[ scrollTransitionStyle]}>
                        <Image style={styles.knob} source={require('../../imgs/dist_knob.png')}/>
                    </Animated.View>
            </PanGestureHandler>
        </View>
    )

}


const styles = StyleSheet.create({
    slider: {
      height: SLIDER_HEIGHT,
      width: SLIDER_WIDTH,
      borderRadius: BORDER_RADIUS,
      backgroundColor: '#EDEEFF',
      justifyContent: 'center',
    },
    progress: {
      ...StyleSheet.absoluteFillObject,
      backgroundColor: '#5663FF',
      borderRadius: BORDER_RADIUS,
    },
    knob: {
        width:KNOB_WIDTH, 
        height:KNOB_HEIGHT,
        bottom:KNOB_OFFSET
   
    },
  })

export default DistanceSlider;