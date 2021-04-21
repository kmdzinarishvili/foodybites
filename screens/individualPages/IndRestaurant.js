import React, { useState, useEffect } from 'react';
import {
	View,
	Text,
	Image,
	StyleSheet,
	Pressable,
	ImageBackground,
	FlatList,
	Linking,
	Platform,
} from 'react-native';
import { BlurView } from 'expo-blur';
import BlueFooter from '../../components/BlueFooter';

import { h, w } from '../../proportion';
import styles from '../../styles/styles';

import HomeSection from '../../components/HomeSection';
import FriendInfo from '../../components/FriendInfo';

import Star from '../../components/Star';
import RedirecToMaps from '../../components/Maps/RedirecToMaps';

import RestaurantInfo from '../../components/Restaurant/RestaurantInfo';
import Circle from '../../components/Restaurant/Circle';
import HeaderIcons from '../../components/Restaurant/HeaderIcons';
import useFetch from '../../hooks/useFetch';

const IndRestaurant = ({ route, navigation }) => {
	const { image } = route.params;
	const phoneNumber = '+1 212-673-3754';
	const category = 'Italian';
	const name = 'Happy Bones';
	const address = '394 Broome St, New York, NY 10013, USA';
	const distance = 12;
	const isOpen = false;
	const dailyTime = '9:30 am to 11:00 pm';
	const rating = 4.5;

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

	const profiles = useFetch(
		'https://api.unsplash.com/search/photos/?client_id=i3AmYBQbRiDxMi3p937gP1nTnvqdBuSeyIm_99ZQ_jE&query=profile'
	);

	return (
		<View style={{ height: '100%' }}>
			<FlatList
				showsVerticalScrollIndicator={false}
				data={profiles}
				keyExtractor={(item) => `ahhh${item.id}`}
				ListHeaderComponent={
					<View>
						<ImageBackground
							style={{ width: '100%', height: 909 * h }}
							source={{ uri: image }}
						>
							<HeaderIcons onPress={() => navigation.goBack()} />
							<View>
								<BlurView
									style={{
										width: '90%',
										height: 142 * h,
										position: 'absolute',
										top: 400 * h,
										marginBottom: 48,
										marginHorizontal: '7%',
										borderRadius: 100,
										overflow: 'hidden',
										flexDirection: 'row',
										alignItems: 'center',
										justifyContent: 'space-around',
									}}
								>
									<Pressable
										onPress={() =>
											Linking.openURL(
												Platform.OS === 'android'
													? `tel:${phoneNumber}`
													: `tel://${phoneNumber}`
											).catch((err) => console.error('An error occurred', err))
										}
									>
										<View
											style={{
												flexDirection: 'row',
												alignItems: 'center',
												overflow: 'hidden',
											}}
										>
											<Circle>
												<Image
													style={{ width: 36.1 * w, height: 38.94 * h }}
													source={require('../../imgs/restaurantPage/phone.png')}
												/>
											</Circle>
											<Text
												style={[
													{ color: '#FFF', fontSize: 40 * w },
													styles.jSemi,
												]}
											>
												{phoneNumber}
											</Text>
										</View>
									</Pressable>
									<View>
										<RedirecToMaps
											style={{
												flexDirection: 'row',
												alignItems: 'center',
												overflow: 'hidden',
											}}
										>
											<Circle>
												<Image
													style={{ width: 36.1 * w, height: 38.94 * h }}
													source={require('../../imgs/restaurantPage/arrows.png')}
												/>
											</Circle>

											<Text style={[indStyles.text, styles.jSemi]}>
												Direction
											</Text>
										</RedirecToMaps>
									</View>
								</BlurView>
							</View>
						</ImageBackground>
						<View style={restStyles.paddings}>
							<RestaurantInfo
								name={name}
								category={category}
								distance={distance}
								rating={rating}
								address={address}
								isOpen={isOpen}
								dailyTime={dailyTime}
							/>

							<HomeSection
								title="Menu & Photos"
								number={32}
								style={{ marginBottom: 54 * h, marginTop: 0 }}
								goTo={() => navigation.navigate('Photos')}
							/>
							{food ? (
								<FlatList
									showsHorizontalScrollIndicator={false}
									horizontal={true}
									data={food}
									scrollEnabled={true}
									keyExtractor={(item, index) => `picture${index}`}
									renderItem={({ item, index }) => {
										return (
											<Pressable
												onPress={() => {
													navigation.navigate('Photo', {
														index: index,
														food: food,
													});
												}}
											>
												<Image
													style={{
														width: 450 * w,
														height: 336.57 * h,
														borderRadius: 22 * w,
														marginHorizontal: (45 * w) / 2,
													}}
													source={{ uri: item.url }}
												/>
											</Pressable>
										);
									}}
								/>
							) : (
								<View />
							)}
							<HomeSection
								title="Review & Ratings"
								number={32}
								goTo={() => navigation.navigate('All Reviews')}
							/>
						</View>
					</View>
				}
				renderItem={({ item, index }) => {
					return (
						<View style={{ marginHorizontal: 66 * w }}>
							<FriendInfo
								showFollow={false}
								justifyContent="space-between"
								image={item['urls']['small']}
								star={<Star key={index} rating={rating} />}
							/>
						</View>
					);
				}}
			/>

			<BlueFooter
				text="Rate Your Experience"
				action={() => navigation.navigate('Review')}
			/>
		</View>
	);
};

const indStyles = StyleSheet.create({
	text: {
		color: '#FFF',
		fontSize: 40 * w,
	},
	margin20: {
		marginVertical: 20 * h,
	},
	imgTest: {
		width: 100,
		height: 100,
	},
});

const restStyles = StyleSheet.create({
	containter: {
		borderRadius: 10,
		overflow: 'hidden',
		position: 'relative',
		margin: 27 * w,
	},
	whiteButton: {
		position: 'absolute',
		zIndex: 1000,
		overflow: 'hidden',
		paddingHorizontal: 22 * w,
		borderRadius: 5,
		color: '#4CD964',
		fontSize: 25 * w,
	},
	left: {
		left: 31 * w,
	},
	right: {
		right: 31 * w,
	},

	size25: {
		fontSize: 25 * w,
	},
	bottom: {
		height: 225 * h,
		width: 907.85 * w,
		backgroundColor: '#FFF',
		flexDirection: 'column',
		justifyContent: 'space-around',
		padding: 25 * w,
	},
	white22: {
		fontSize: 22 * w,
		color: '#FFF',
		paddingHorizontal: 23 * w,
		paddingVertical: 12 * w,
	},
	rad9: {
		borderRadius: 9,
		overflow: 'hidden',
	},
	purple: {
		backgroundColor: '#848DFF',
	},
	address: {
		color: '#8A98BA',
		fontSize: 36 * w,
	},
	red: {
		color: '#FF4A40',
	},
	miniFriend: {
		width: 55 * w,
		height: 55 * w,
		borderRadius: (55 * w) / 2,
		borderColor: '#FFF',
		borderWidth: 3 * w,
		marginLeft: -10,
	},
	paddings: {
		marginHorizontal: 66 * w,
		marginVertical: 38 * h,
	},
});
export default IndRestaurant;
