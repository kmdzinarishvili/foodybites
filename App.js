import React, { useState, useEffect } from 'react';
import { View, ActivityIndicator, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { loadAsync } from 'expo-font';

import Header from './components/Header';

import Home from './screens/Home';

import RestaurantPage from './screens/RestaurantPage';
import CategoryPage from './screens/CategoryPage';
import FriendPage from './screens/FriendPage';

import IndRestaurant from './screens/individualPages/IndRestaurant';
import IndCategory from './screens/individualPages/IndCategory';
import IndFriend from './screens/individualPages/IndFriend';

import Filter from './screens/Filter';
import ReviewPage from './screens/ReviewPage';

import Animated from 'react-native-reanimated';
import HomeSearch from './screens/HomeSearch';
import Photos from './screens/Photos';
import AllReviews from './screens/AllReviews';
import PhotoNav from './screens/individualPages/PhotoNav';

const fetchFonts = async () => {
	return loadAsync({
		'josefin-bold': require('./assets/fonts/JosefinSans-Bold.ttf'),
		'josefin-regular': require('./assets/fonts/JosefinSans-Regular.ttf'),
		'josefin-semibold': require('./assets/fonts/JosefinSans-SemiBold.ttf'),
		'josefine-light': require('./assets/fonts/JosefinSans-Light.ttf'),
	});
};

const RootStack = createStackNavigator();

const RootApp = () => {
	Animated.addWhitelistedNativeProps({ text: true });
	return (
		<RootStack.Navigator headerMode="screen">
			<RootStack.Screen
				name="Home"
				component={Home}
				options={{
					headerShown: false,
				}}
			/>
			<RootStack.Screen
				name="Restaurant"
				component={RestaurantPage}
				options={{
					header: () => {
						return (
							<Header color="#FFF" search={false} name="Trending Restaurant" />
						);
					},
				}}
			/>
			<RootStack.Screen
				name="Category"
				component={CategoryPage}
				options={{
					header: () => {
						return <Header name="Categories" search={true} color="#FFF" />;
					},
				}}
			/>
			<RootStack.Screen
				name="Friend"
				component={FriendPage}
				options={{
					header: () => {
						return <Header name="Friends" search={true} />;
					},
				}}
			/>

			<RootStack.Screen
				name="Individual Restaurant"
				component={IndRestaurant}
				options={{
					headerShown: false,
				}}
			/>
			<RootStack.Screen
				name="Individual Category"
				component={IndCategory}
				options={{
					headerShown: false,
				}}
			/>
			<RootStack.Screen
				name="Individual Friend"
				component={IndFriend}
				options={{
					header: () => {
						return <Header color="#FFF" name="Profile" search={false} />;
					},
				}}
			/>

			<RootStack.Screen
				name="Filter"
				component={Filter}
				options={{
					header: () => {
						return <Header name="Filter" search={false} x={true} />;
					},
				}}
			/>

			<RootStack.Screen
				name="Review"
				component={ReviewPage}
				options={{
					header: () => {
						return <Header name="Review & Rating" search={false} />;
					},
				}}
			/>

			<RootStack.Screen
				name="Home Search"
				component={HomeSearch}
				options={{
					headerShown: false,
				}}
			/>
			<RootStack.Screen
				name="Photos"
				component={Photos}
				options={{
					header: () => {
						return <Header name="Menu & Photos" search={true} x={false} />;
					},
				}}
			/>
			<RootStack.Screen
				name="Photo"
				component={PhotoNav}
				options={{
					header: () => {
						return (
							<Header
								name="Preview"
								color={'#25262E'}
								textColor={'#FFF'}
								search={false}
							/>
						);
					},
				}}
			/>
			<RootStack.Screen
				name="All Reviews"
				component={AllReviews}
				options={{
					header: () => {
						return <Header name="Review & Rating" search={false} />;
					},
				}}
			/>
		</RootStack.Navigator>
	);
};
export default function App() {
	const [fontsLoaded, setFontsLoaded] = useState(false);

	const loadFonts = async () => {
		await fetchFonts();
		setFontsLoaded(true);
	};
	useEffect(() => {
		loadFonts();
	}, []);

	if (!fontsLoaded) {
		return (
			<View
				style={{
					width: '100%',
					height: '100%',
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<ActivityIndicator size="large" color="#5663FF" />
			</View>
		);
	} else {
		return (
			<NavigationContainer>
				<RootApp />
			</NavigationContainer>
		);
	}
}
