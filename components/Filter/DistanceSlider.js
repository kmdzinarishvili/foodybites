import React from 'react';
import {View, StyleSheet, Image, Text, ImageBackground} from 'react-native';
import Animated, { 
    useAnimatedGestureHandler, 
    useAnimatedStyle, 
    useDerivedValue, 
    useSharedValue,
    useAnimatedProps
} from 'react-native-reanimated'
import { PanGestureHandler } from 'react-native-gesture-handler';


import AnimatedText from './AnimatedText';
import {w,h} from '../../proportion';




const KNOB_WIDTH = 98.11*w;
const KNOB_HEIGHT = 144.95*h;
const KNOB_OFFSET = 69*h;
const BORDER_RADIUS =14;
const MAX_RANGE = 100;

const SLIDER_WIDTH = 984*w - KNOB_WIDTH ;
const SLIDER_HEIGHT =27 *h;

const DistanceSlider =({style}) =>{
    const translateX = useSharedValue(0);

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
            0 -KNOB_WIDTH/2,
            SLIDER_WIDTH

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
    const stepText = useDerivedValue(() => {
        const sliderRange = SLIDER_WIDTH+KNOB_WIDTH/2
        const oneStepValue = sliderRange / MAX_RANGE
        const step = Math.ceil(translateX.value / oneStepValue) +5
        return String(step)
      });

    console.log('rendering');
    console.log(stepText.value);

    return(
        
        <View style={[styles.slider, style]}>
            <Animated.View style={[styles.progress, progressStyle]} />
            <PanGestureHandler onGestureEvent={onGestureEvent}>
                <Animated.View style={[ scrollTransitionStyle, styles.knob, {bottom:KNOB_OFFSET}]}>
                        <ImageBackground style={[styles.knob]} source={require('../../imgs/dist_knob.png')}>
                            <AnimatedText text={stepText}/>
                        </ImageBackground>
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
        alignItems:'center',
   
    },
  })




export default DistanceSlider;