import React, { useState } from 'react';
import { Pressable, Text } from 'react-native';
import { h, w } from '../proportion';

const FollowingButton = ({ type = 'following', bool, style }) => {
	//bool
	const [isFollowing, setIsFollowing] = useState(bool);

	return (
		<Pressable
			style={{
				backgroundColor: !isFollowing ? '#5663FF' : '#FFF',
				borderRadius: 5,
				width: 235 * w,
				height: 90 * h,
				justifyContent: 'center',
				alignItems: 'center',
				borderWidth: isFollowing ? 1 * w : 0,
				borderColor: '#8A98BA',
				...style,
			}}
			onPress={() => {
				setIsFollowing((prev) => !prev);
			}}
		>
			<Text
				style={{
					color: !isFollowing ? '#FFF' : '#8A98BA',
				}}
			>
				{type == 'following'
					? isFollowing
						? 'Unfollow'
						: 'Follow'
					: !isFollowing
					? 'Unblock'
					: 'Block'}
			</Text>
		</Pressable>
	);
};

export default FollowingButton;
