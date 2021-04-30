import React from 'react';
import { View, Text } from 'react-native';
import LoginBackground from '../../components/Login/LoginBackground';
import LoginHeader from '../../components/Login/LoginHeader';
const ForgotPassword = () => {
	return (
		<LoginBackground>
			<LoginHeader />
			<View style={{ padding: 100 }}>
				<Text>Forgot Passwordd Page</Text>
			</View>
		</LoginBackground>
	);
};

export default ForgotPassword;
