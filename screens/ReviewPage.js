import React, { useState } from 'react';
import {
	StyleSheet,
	Text,
	TextInput,
	KeyboardAvoidingView,
	View,
} from 'react-native';
import BlueFooter from '../components/BlueFooter';
import Rating from '../components/Review/Rating';
import SafeView from '../components/SafeView';
import { w, h } from '../proportion';
import styles from '../styles/styles';
import { useNavigation } from '@react-navigation/core';


const Review = () => {
	const [value, setValue] = useState('');
	const navigation = useNavigation();


	return (
		<SafeView style={reviewStyles.container}>
			<Rating style={reviewStyles.rating} />
			<Text style={reviewStyles.text}>Rate Your Experience</Text>
			<TextInput
				placeholderTextColor="#8A98BA"
				style={reviewStyles.textInput}
				placeholder="Write your experience"
				value={value}
				textAlignVertical="top"
				multiline={true}
				onChangeText={(text) => setValue(text)}
			/>

			<KeyboardAvoidingView
				behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
				style={[reviewStyles.footer]}
				keyboardVerticalOffset = {300*h}
			>
				<BlueFooter text="Done" action={() => navigation.navigate('Home')}  styles={{paddingBottom:Platform.OS === 'ios' ? 45*h: 0 }}/>
			</KeyboardAvoidingView>
		</SafeView>
	);
};

const reviewStyles = StyleSheet.create({
	container: {
		flexDirection: 'column',
		alignItems: 'center',
	},
	rating: {
		marginTop: 120 * w,
	},
	text: {
		fontSize: 44 * w,
		color: '#8A98BA',
		...styles.jReg,
		marginTop: 48 * w,
	},
	textInput: {
		marginTop: 123 * w,
		width: 894 * w,
		height: 532 * h,
		borderColor: '#8A98BA',
		borderWidth: 1 * w,
		borderRadius: 35 * w,
		textAlignVertical: 'top',
		paddingHorizontal: 58 * w,
		fontSize: 49 * w,
		...styles.jReg,
		color: '#222455',
		paddingTop: 60 * w,
	},
	footer: {
		position: 'absolute',
		bottom: 0,
		paddingBottom:Platform.OS === 'ios' ? 0: 60*h ,
		paddingTop:Platform.OS === 'ios' ? 100*h: 60*h ,
		width: '100%',
		backgroundColor: '#5663FF',
		borderTopLeftRadius: 80 * w,
		borderTopRightRadius: 80 * w,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
	},
});

export default Review;
