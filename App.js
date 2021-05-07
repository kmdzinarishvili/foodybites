import React, { useState, useEffect } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import * as firebase from 'firebase';

import * as Font from 'expo-font';

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

import Intro from './screens/login/Intro';
import Login from './screens/login/Login';
import ForgotPassword from './screens/login/ForgotPassword';
import Welcome from './screens/login/Welcome';
import ApiKeys from './constants/ApiKeys';
import SignUp from './screens/login/SignUp';

const fetchFonts = async () => {
	return Font.loadAsync({
		'josefin-bold': require('./assets/fonts/JosefinSans-Bold.ttf'),
		'josefin-regular': require('./assets/fonts/JosefinSans-Regular.ttf'),
		'josefin-semibold': require('./assets/fonts/JosefinSans-SemiBold.ttf'),
		'josefine-light': require('./assets/fonts/JosefinSans-Light.ttf'),
	});
};

const RootStack = createStackNavigator();

const RootApp = () => {
	firebase.auth().signOut();
	Animated.addWhitelistedNativeProps({ text: true });

	return (
		<RootStack.Navigator headerMode="screen">
			<RootStack.Screen
				name="Intro"
				component={Intro}
				options={{
					headerShown: false,
				}}
			/>

			<RootStack.Screen
				name="Login"
				component={Login}
				options={{
					headerShown: false,
				}}
			/>
			<RootStack.Screen
				name="Forgot Password"
				component={ForgotPassword}
				options={{
					headerShown: false,
				}}
			/>
			<RootStack.Screen
				name="Sign Up"
				component={SignUp}
				options={{
					headerShown: false,
				}}
			/>
			<RootStack.Screen
				name="Welcome"
				component={Welcome}
				options={{
					headerShown: false,
				}}
			/>
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
						return <Header color="#FFF" name="Profile" />;
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
						return <Header name="Menu & Photos" search={true} search={false} />;
					},
				}}
			/>
			<RootStack.Screen
				name="Photo"
				component={PhotoNav}
				options={{
					headerShown: false,
				}}
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
					headerShown: false,
				}}
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
	const [dataLoaded, setDataLoaded] = useState(false);
	const [firebaseLoaded, setFirebaseLoaded] = useState(false);

	const loadFirebase = async () => {
		if (!firebase.apps.length) {
			await firebase.initializeApp(ApiKeys.FirebaseConfig);
			setFirebaseLoaded(true);
		}
	};
	const loadFonts = async () => {
		await fetchFonts();
		setDataLoaded(true);
	};
	useEffect(() => {
		loadFonts();
		loadFirebase();
	});

	if (!dataLoaded || !firebaseLoaded) {
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
