import React from 'react';
import { View, Text, Pressable } from 'react-native';

const SignUp = ({ navigation }) => {
	return (
		<Pressable
			onPress={() => {
				navigation.goBack();
			}}
		>
			<View style={{ margin: 200 }}>
				<Text>create accoung page </Text>
			</View>
		</Pressable>
	);
};

export default SignUp;
