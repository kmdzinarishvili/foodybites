import React from 'react';

import { Button, Text, View } from 'react-native';
import { useSharedValue, useDerivedValue } from 'react-native-reanimated';

function Test() {
  const progress = useSharedValue(0);
  const width = useDerivedValue(() => {
      console.log(progress.value)
    return progress.value * 250;

  });

  return (
    <View>
      <Text>{width.value} </Text>
      <Button title='button' onPress={() => (progress.value = Math.random())} />
    </View>
  );
}


export default Test;