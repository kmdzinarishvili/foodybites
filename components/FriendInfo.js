import React from 'react';
import { View, Text } from 'react-native';
import { w, h } from '../proportion';
import styles from '../styles/styles';
import FollowingButton from './FollowingButton';
import FriendView from './SectionViews/FriendView';
import Star from './Star';

const FriendInfo = ({
	style,
	text = 'Lorem ipsum dolor sit amet consectetur',
	image = 'https://images.unsplash.com/photo-1579783483458-83d02161294e?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MnwyMTg3NTR8MHwxfHNlYXJjaHwxfHxwcm9maWxlfGVufDB8fHx8MTYxNzYwMTMwMQ\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=400',
	name = 'Collin Fields',
	numReviews = 72,
	following = false,
	showFollow = true,
	star,
	justifyContent = 'space-around',
	rating,
}) => {
	return (
		<View
			style={[
				{
					flexDirection: 'row',
					width: '100%',
					justifyContent: justifyContent,
					alignItems: 'center',
				},
				style,
			]}
		>
			<FriendView image={image} width={160 * w} height={160 * h} />
			<View>
				<Text
					style={[
						{ color: '#3E3F68', fontSize: 50 * w, paddingTop: 45 * w },
						styles.jSemi,
					]}
				>
					{name}
				</Text>
				{showFollow ? (
					<Text
						style={[
							{
								color: 'rgba(110, 127, 170, 0.8)',
								marginTop: 19 * w,
								fontSize: 40 * w,
							},
							styles.jReg,
						]}
					>
						{numReviews} Review{numReviews !== 1 ? 's' : ''}
					</Text>
				) : (
					<Text
						style={[
							styles.jReg,
							{ marginRight: 350 * w, color: 'rgba(110, 127, 170, 0.8)' },
						]}
					>
						{text}
					</Text>
				)}
			</View>
			{showFollow ? (
				<FollowingButton bool={following} />
			) : (
				<Star rating={rating} />
			)}
		</View>
	);
};

export default FriendInfo;
