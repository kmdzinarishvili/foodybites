import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native';

import { w } from '../proportion';
import MasonryList from 'react-native-masonry-list';

const Photos = ({ navigation }) => {
	const [food, setFood] = useState();
	const fetch_food = async () => {
		let currFood = [];
		const result = await fetch(
			'https://api.unsplash.com/search/photos/?client_id=i3AmYBQbRiDxMi3p937gP1nTnvqdBuSeyIm_99ZQ_jE&query=food'
		)
			.then((res) => res.json())
			.then((res) => res['results'])
			.then((json) => {
				currFood = json;
			})
			.catch((error) => {
				throw error;
			});

		let newRes = [];
		await currFood.map((item) => newRes.push({ url: item['urls']['regular'] }));
		setFood(newRes);
	};

	useEffect(() => {
		fetch_food();
	}, []);

	if (food) {
		return (
			<View style={styles.container}>
				<View
					style={{
						flexDirection: 'row',
						flexWrap: 'wrap',
						justifyContent: 'space-around',
						height: '100%',
					}}
				>
					<MasonryList
						imageContainerStyle={{ borderRadius: 22 * w }}
						spacing={3}
						images={food}
						onPressImage={( item ) => {
							navigation.navigate('Photo', { index: item.index, food: food });
						}}
					></MasonryList>
				</View>
			</View>
		);
	} else {
		return (
			<View
				style={{
					height: '100%',
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<Text>LOADING</Text>
			</View>
		);
	}
};

//onChange

//renderIndicator

const styles = StyleSheet.create({
	container: {
		width: '100%',
		height: '100%',
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#FAFAFA',
	},
});
export default Photos;
