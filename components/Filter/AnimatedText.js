import React from 'react'
import Animated, { useAnimatedProps } from 'react-native-reanimated'
import { TextInput } from 'react-native-gesture-handler'

const AnimatedTextInput = Animated.createAnimatedComponent(TextInput)

const AnimatedText = ({ text }) => {
  const animatedProps = useAnimatedProps(() => {
    return {
      text: text.value,
    }
  })

  return (
    <AnimatedTextInput
      // editable={false}
      style={{color:'#FFF'}}
      value={text.value}
      animatedProps={animatedProps}
    />
  )
}

export default AnimatedText;