import React from 'react';
import { Pressable, Text } from 'react-native';

const Welcome = ({ navigation }) => {
	return (
		<Pressable
			style={{
				width: '100%',
				height: '100%',
				justifyContent: 'center',
				alignItems: 'center',
			}}
			onPress={() => navigation.goBack()}
		>
			<Text>Welcome</Text>
		</Pressable>
	);
};
export default Welcome;
