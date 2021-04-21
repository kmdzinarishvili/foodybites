import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Image, TextInput, StyleSheet, Pressable } from 'react-native';
import { w, h } from '../proportion';
import styles from '../styles/styles';

const SearchBar = ({
	placeholder,
	action,
	rightComponent,
	autoFocus = false,
}) => {
	const [searchTerm, setSearchTerm] = useState('');
	const navigation = useNavigation();
	return (
		<View style={searchStyles.SectionStyle}>
			<Image
				source={require('../imgs/home/magnifying_glass.png')}
				style={searchStyles.ImageStyle}
			/>

			<View style={[{ position: 'absolute', width: '70%', left: 60 }]}>
				<Pressable onPress={action}>
					<View pointerEvents="none">
						<TextInput
							style={
								({ fontSize: 48 * w, backgroundColor: 'red' }, styles.jReg)
							}
							value={searchTerm}
							onChangeText={(text) => setSearchTerm(text)}
							placeholder={placeholder}
							autoFocus={autoFocus}
						/>
					</View>
				</Pressable>
			</View>

			{!rightComponent ? (
				<Pressable onPress={() => navigation.navigate('Filter')}>
					<Image
						source={require('../imgs/home/search_sliders.png')}
						style={searchStyles.ImageStyle}
					/>
				</Pressable>
			) : (
				rightComponent
			)}
		</View>
	);
};

const searchStyles = StyleSheet.create({
	SectionStyle: {
		marginTop: 20,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		backgroundColor: '#fff',
		borderWidth: 0.5,
		borderColor: '#E8E8E8',
		height: 154 * h,
		borderRadius: 5,
		paddingHorizontal: 54 * w,
	},

	ImageStyle: {
		marginVertical: 10,
		padding: 0,
		margin: 5,
		height: 50 * h,
		width: 50 * h,
		alignItems: 'center',
	},
});

export default SearchBar;
