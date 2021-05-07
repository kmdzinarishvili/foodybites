import React, { useState } from 'react';
import {
	View,
	Text,
	StyleSheet,
	KeyboardAvoidingView,
	Alert,
} from 'react-native';
import * as firebase from 'firebase';
import LoginBackground from '../../components/Login/LoginBackground';
import LoginHeader from '../../components/Login/LoginHeader';
import { h, w } from '../../proportion';
import StyledInput from '../../components/Login/StyledInput';
import LoginButton from '../../components/Login/LoginButton';
const ForgotPassword = ({ navigation }) => {
	const [email, setEmail] = useState('');

	const sendForgotPassword = () => {
		firebase
			.auth()
			.sendPasswordResetEmail(email)
			.then()
			.catch((error) => {
				Alert.alert(error.message);
			});
		navigation.goBack();
	};

	return (
		<LoginBackground>
			<LoginHeader />
			<Text style={fpStyles.text}>
				Enter your email and will sendyou instructions on how to reset it
			</Text>
			<StyledInput
				style={fpStyles.input}
				image={require('../../imgs/login/emailIcon.png')}
				width={56 * w}
				height={45 * h}
				placeholder="Email"
				value={email}
				setValue={setEmail}
				autoFocus={true}
				autoCapitalize="none"
			/>

			<KeyboardAvoidingView behavior={'position'} style={[fpStyles.view]}>
				<LoginButton text="Send" action={sendForgotPassword} />
			</KeyboardAvoidingView>
		</LoginBackground>
	);
};

const fpStyles = StyleSheet.create({
	text: {
		fontFamily: 'josefine-light',
		color: '#FFF',
		fontSize: 60 * w,
		marginTop: 220 * h,
	},
	input: {
		marginTop: 160 * w,
	},

	view: {
		paddingTop: 1000 * h,
		paddingBottom: 130 * h,
		width: '100%',
	},
});
export default ForgotPassword;
