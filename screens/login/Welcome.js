import React, { useState } from 'react';
import { View, Pressable, Text, StyleSheet, Alert } from 'react-native';
import * as Location from 'expo-location';
import { BlurView } from 'expo-blur';

import LoginBackground from '../../components/Login/LoginBackground';
import { h, w } from '../../proportion';
import styles from '../../styles/styles';
import LoginButton from '../../components/Login/LoginButton';

const Welcome = ({ navigation }) => {
	const [location, setLocation] = useState(null);
	const [errorMsg, setErrorMsg] = useState(null);

	const turnOnGPS = async () => {
		let { status } = await Location.requestForegroundPermissionsAsync();

		if (status !== 'granted') {
			Alert.alert('Permission was not granted');
			setErrorMsg('Permission to access location was denied');
			return;
		}

		let curLoc = await Location.getCurrentPositionAsync({});
		setLocation(curLoc);

		let text = 'Waiting..';
		if (errorMsg) {
			text = errorMsg;
			Alert.alert(text);
		} else if (location) {
			text = JSON.stringify(location);
			console.log(text);
			navigation.navigate('Home');
		}
	};

	return (
		<LoginBackground
			source={require('../../imgs/login/welcomeBackground.png')}
			alignItems="flex-end"
		>
			<View
				style={{
					height: '100%',
					justifyContent: 'flex-end',
				}}
			>
				<Pressable
					style={wStyles.skipPressable}
					onPress={() => {
						navigation.navigate('Home');
					}}
				>
					<BlurView intensity={50} tint={'default'} style={wStyles.blurView}>
						<Text style={wStyles.skip}>Skip</Text>
					</BlurView>
				</Pressable>

				<View style={wStyles.bottomView}>
					<View style={wStyles.textBox}>
						<Text style={wStyles.hi}>Hi,</Text>
						<Text style={[wStyles.hi, wStyles.welcome]}>Welcome To </Text>
						<Text style={wStyles.foodybite}>Foodybite</Text>
					</View>
					<Text style={wStyles.gpsText}>
						Please turn on your GPS to find out better restaurant
						suggestions near you.
					</Text>

					<LoginButton text="Turn On GPS" action={turnOnGPS} />
				</View>
			</View>
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
	hi: {
		color: '#FFF',
		fontSize: 120 * w,
		...styles.jSemi,
	},
	welcome: {
		paddingTop: 38 * h,
	},
	foodybite: {
		color: '#FFCC00',
		fontSize: 120 * w,
		...styles.jSemi,
	},
	gpsText: {
		fontSize: 65 * w,
		color: '#FFF',
		fontFamily: 'josefine-light',
		marginTop: 194 * h,
		marginBottom: 261 * h,
	},
	bottomView: {
		marginBottom: 110 * h,
	},
});
export default Welcome;
