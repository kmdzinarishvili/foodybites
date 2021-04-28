import React from 'react';
import { StyleSheet, ImageBackground, StatusBar, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import styles from '../../styles/styles';
import { w } from '../../proportion';
import StyledInput from '../../components/Login/StyledInput';
import LoginButton from '../../components/Login/LoginButton';
const Login = () => {
	return (
		<ImageBackground
			source={require('../../imgs/login/loginPicture.png')}
			style={{ width: '100%', height: '100%' }}
		>
			<StatusBar barStyle="light-content" />
			<LinearGradient
				colors={['rgba(45,45,45,0.41)', 'rgba(8,8,8,1)']}
				style={loginStyles.linearGradient}
			>
				<Text style={loginStyles.title}>Foodybite</Text>
				<StyledInput />
				<StyledInput />
				<LoginButton text="Login" />
			</LinearGradient>
		</ImageBackground>
	);
};

const loginStyles = StyleSheet.create({
	title: {
		fontSize: 123 * w,
		color: '#FFF',
		...styles.jBold,
	},
	linearGradient: {
		width: '100%',
		height: '100%',
		justifyContent: 'center',
		alignItems: 'center',
		paddingHorizontal: 118 * w,
	},
});
export default Login;
