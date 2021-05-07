import React, { useState } from 'react';
import {
	View,
	Text,
	Pressable,
	Image,
	StyleSheet,
	ScrollView,
	KeyboardAvoidingView,
	Alert,
} from 'react-native';
import { BlurView } from 'expo-blur';
import * as firebase from 'firebase';
import LoginBackground from '../../components/Login/LoginBackground';
import { h, w } from '../../proportion';
import StyledInput from '../../components/Login/StyledInput';
import LoginButton from '../../components/Login/LoginButton';
import styles from '../../styles/styles';

const SignUp = ({ navigation }) => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');

	const register = () => {
		if (password !== confirmPassword) {
			Alert.alert('Passwords do not match');
			return;
		}
		firebase
			.auth()
			.createUserWithEmailAndPassword(email, password)
			.then(() => navigation.navigate('welcome'))
			.catch((error) => {
				Alert.alert(error.message);
			});
	};

	return (
		<LoginBackground source={require('../../imgs/login/background.png')}>
			<ScrollView contentContainerStyle={suStyles.scrollView}>
				<KeyboardAvoidingView style={suStyles.kaView} behavior="position">
					<View style={[suStyles.view]}>
						<BlurView
							intensity={28}
							tint={'light'}
							style={[suStyles.view, suStyles.blurView]}
						>
							<Image
								source={require('../../imgs/login/person.png')}
								style={suStyles.person}
							/>
						</BlurView>
						<Image
							source={require('../../imgs/login/arrow.png')}
							style={suStyles.arrow}
						/>
					</View>
					<StyledInput
						image={require('../../imgs/login/person.png')}
						width={47.81 * w}
						height={59.75 * h}
						placeholder="Name"
						style={{ marginTop: 185 * h }}
						value={name}
						setValue={setName}
					/>
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
					<StyledInput
						image={require('../../imgs/login/passwordIcon.png')}
						width={56 * w}
						height={60 * h}
						placeholder="Confirm Password"
						secure={true}
						value={confirmPassword}
						setValue={setConfirmPassword}
					/>
					<LoginButton
						text="Register"
						style={suStyles.button}
						action={register}
					/>
				</KeyboardAvoidingView>
				<View style={suStyles.textGroup}>
					<Text style={suStyles.textReg}>Already have an account?</Text>
					<Pressable
						onPress={() => {
							navigation.navigate('Login');
						}}
					>
						<Text style={suStyles.textLogin}> Login</Text>
					</Pressable>
				</View>
			</ScrollView>
		</LoginBackground>
	);
};
const suStyles = StyleSheet.create({
	scrollView: {
		width: '100%',
		height: '100%',
		alignItems: 'center',
	},
	kaView: {
		alignItems: 'center',
		paddingBottom: 60 * h,
	},

	blurView: {
		borderRadius: (456 * w) / 2,
		overflow: 'hidden',
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 0,
	},
	view: {
		width: 456 * w,
		height: 456 * h,
		marginTop: 186 * h,
		alignSelf: 'center',
	},
	person: {
		width: 94.06 * w,
		height: 117.55 * h,
	},
	arrow: {
		position: 'absolute',
		bottom: 0,
		right: 0,
		width: 128 * w,
		height: 128 * h,
	},
	button: {
		marginTop: 150 * h,
	},
	textReg: {
		color: 'white',
		fontFamily: 'josefine-light',
		fontSize: 50 * w,
	},
	textLogin: {
		color: '#5663FF',
		...styles.jReg,
		fontSize: 50 * w,
	},
	textGroup: {
		flexDirection: 'row',
		marginTop: 192 * h,
	},
});

export default SignUp;
