import React from 'react';
import {
	StyleSheet,
	ImageBackground,
	StatusBar,
	Text,
	Pressable,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import StyledInput from '../../components/Login/StyledInput';
import LoginButton from '../../components/Login/LoginButton';

import styles from '../../styles/styles';
import { w, h } from '../../proportion';

const Login = ({ navigation }) => {
	const login = () => {
		navigation.navigate('Welcome');
	};
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
				<StyledInput
					image={require('../../imgs/login/emailIcon.png')}
					width={56 * w}
					height={45 * h}
					placeholder="Email"
					style={loginStyles.email}
				/>
				<StyledInput
					image={require('../../imgs/login/passwordIcon.png')}
					width={56 * w}
					height={60 * h}
					placeholder="Password"
					secure={true}
				/>
				<Text style={loginStyles.forgot}>Forgot Password?</Text>
				<LoginButton
					text="Login"
					style={loginStyles.loginButton}
					action={login}
				/>
				<Pressable style={loginStyles.createPress}>
					<Text style={loginStyles.create}>Create New Account</Text>
				</Pressable>
			</LinearGradient>
		</ImageBackground>
	);
};

const loginStyles = StyleSheet.create({
	title: {
		fontSize: 123 * w,
		color: '#FFF',
		...styles.jBold,
		marginTop: 337 * h,
	},
	linearGradient: {
		width: '100%',
		height: '100%',
		justifyContent: 'flex-start',
		alignItems: 'center',
		paddingHorizontal: 118 * w,
	},
	email: {
		marginTop: 700 * h,
	},
	forgot: {
		alignSelf: 'flex-end',
		color: '#FFF',
		marginVertical: 28 * h,
		fontSize: 50 * w,
		...styles.jReg,
	},
	loginButton: {
		marginTop: 150 * h,
	},
	create: {
		fontFamily: 'josefine-light',
		fontSize: 50 * w,
		color: '#FFF',
	},
	createPress: {
		marginTop: 170 * h,
		borderBottomWidth: 1 * h,
		padding: 23 * h,
		borderBottomColor: '#FFF',
	},
});
export default Login;
