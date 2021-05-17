import React, { useState } from 'react';
import {
	StyleSheet,
	View,
	StatusBar,
	Text,
	Pressable,
	KeyboardAvoidingView,
	Alert,
} from 'react-native';
import * as firebase from 'firebase';

import StyledInput from '../../components/Login/StyledInput';
import LoginButton from '../../components/Login/LoginButton';

import styles from '../../styles/styles';
import { w, h } from '../../proportion';
import LoginBackground from '../../components/Login/LoginBackground';

const Login = ({ navigation }) => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const login = async () => {
		firebase
			.auth()
			.signInWithEmailAndPassword(email, password)
			.then(() => {
				navigation.navigate('Welcome');
			})
			.catch((error) => Alert.alert(error.message));
	};

	return (
		<LoginBackground>
			<KeyboardAvoidingView behavior={'position'} style={[loginStyles.view]}>
				<Text style={loginStyles.title}>Foodybite</Text>

				<StyledInput
					image={require('../../imgs/login/emailIcon.png')}
					width={56 * w}
					height={45 * h}
					placeholder="Email"
					value={email}
					setValue={setEmail}
					autoCapitalize="none"
				/>
				<StyledInput
					image={require('../../imgs/login/passwordIcon.png')}
					width={56 * w}
					height={60 * h}
					placeholder="Password"
					secure={true}
					value={password}
					setValue={setPassword}
				/>
				<Pressable
					onPress={() => navigation.navigate('Forgot Password')}
					style={loginStyles.forgot}
				>
					<Text style={loginStyles.forgotTxt}>Forgot Password?</Text>
				</Pressable>
				<LoginButton
					text="Login"
					style={loginStyles.loginButton}
					action={login}
				/>
				<Pressable
					style={loginStyles.createPress}
					onPress={() => {
						navigation.navigate('Sign Up');
					}}
				>
					<Text style={loginStyles.create}>Create New Account</Text>
				</Pressable>
			</KeyboardAvoidingView>
		</LoginBackground>
	);
};

const loginStyles = StyleSheet.create({
	title: {
		fontSize: 123 * w,
		color: '#FFF',
		...styles.jBold,
		alignSelf: 'center',
		marginBottom: 337 * h,
	},
	linearGradient: {
		width: '100%',
		height: '100%',
		justifyContent: 'flex-start',
		alignItems: 'center',
		paddingHorizontal: 118 * w,
	},
	view: {
		paddingTop: '50%',
	},
	forgot: {
		alignSelf: 'flex-end',
	},
	forgotTxt: {
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
		alignSelf: 'center',
		borderBottomWidth: 1 * h,
		padding: 23 * h,
		borderBottomColor: '#FFF',
	},
});
export default Login;
