import { BlurView } from 'expo-blur';
import React from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';
import LoginBackground from '../../components/Login/LoginBackground';
import { h, w } from '../../proportion';
import styles from '../../styles/styles';
import * as firebase from 'firebase';

const Welcome = ({ navigation }) => {
	const user = firebase.auth().currentUser;

	if (user) {
		console.warn(user);
	}

	return (
		<LoginBackground source={require('../../imgs/login/welcomeBackground.png')}>
			<Pressable style={wStyles.skipPressable}>
				<BlurView intensity={50} tint={'default'} style={wStyles.blurView}>
					<Text style={wStyles.skip}>Skip</Text>
				</BlurView>
			</Pressable>

			<Text> Hi </Text>
		</LoginBackground>
	);
};

const wStyles = StyleSheet.create({
	skipPressable: {
		position: 'absolute',
		top: 142 * h,
		right: 60 * w,
	},
	blurView: {
		width: 230 * w,
		height: 115 * h,
		borderRadius: 35 * w,
		overflow: 'hidden',
		borderWidth: 0.5 * w,
		borderColor: '#FFF',
		justifyContent: 'center',
		alignItems: 'center',
	},
	skip: {
		color: '#FFF',
		fontSize: 49 * w,
		...styles.jReg,
	},
});
export default Welcome;
