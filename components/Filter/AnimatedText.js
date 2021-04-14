import React from 'react'
import Animated, { useAnimatedProps } from 'react-native-reanimated'
import { TextInput } from 'react-native-gesture-handler'
import styles from '../../styles/styles'

const AnimatedTextInput = Animated.createAnimatedComponent(TextInput)

const AnimatedText = ({ text, style }) => {
  const animatedProps = useAnimatedProps(() => {
    return {
      text: text.value,
    }
  })

  return (
    <AnimatedTextInput
      editable={false}
      style={[{color:'#FFF',...styles.jSemi }, style]}
      textAlign={'center'}
      value={text.value}
      animatedProps={animatedProps}
    />
  )
}

export default AnimatedText;