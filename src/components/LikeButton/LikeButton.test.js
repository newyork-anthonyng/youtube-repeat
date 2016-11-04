import React from 'react';
import { shallow } from 'enzyme';
import LikeButton from './LikeButton';

describe('LikeButton', () => {
	it('should render a Heart', () => {
		const wrapper = shallow(
			<LikeButton
				id="VideoId"
				img="VideoImg"
				title="VideoTitle"
				author="VideoAuthor"
				likeVideo={() => {}}
				dislikeVideo={() => {}} />
		);
		expect(wrapper.text()).toEqual('♥');
	});

	it('should toggle liked state when clicked', () => {
		const wrapper = shallow(
			<LikeButton
				id="VideoId"
				img="VideoImg"
				title="VideoTitle"
				author="VideoAuthor"
				likeVideo={() => {}}
				dislikeVideo={() => {}} />
		);
		expect(wrapper.state().liked).toEqual(false);

		wrapper.simulate('click');
		expect(wrapper.state().liked).toEqual(true);

		wrapper.simulate('click');
		expect(wrapper.state().liked).toEqual(false);
	});

	it('should call props.dislikeVideo when clicked and song is liked', () => {
		let dislikeInvoked = false;
		const cb = (videoId) => dislikeInvoked = videoId;
		const wrapper = shallow(
			<LikeButton
				id="VideoId"
				img="VideoImg"
				title="VideoTitle"
				author="VideoAuthor"
				likeVideo={() => {}}
				dislikeVideo={cb} />
		);

		wrapper.simulate('click');
		expect(dislikeInvoked).toEqual(false);
		wrapper.simulate('click');
		expect(dislikeInvoked).toEqual('VideoId');
	});

	it('should call props.likeVideo when clicked and song is not liked', () => {
		let likeInvoked = false;
		const cb = ({ id, img, title, author }) => {
			likeInvoked = `${id} ${img} ${title} ${author}`;
		};
		const wrapper = shallow(
			<LikeButton
				id="VideoId"
				img="VideoImg"
				title="VideoTitle"
				author="VideoAuthor"
				likeVideo={cb}
				dislikeVideo={() => {}} />
		);

		wrapper.simulate('click');
		expect(likeInvoked).toEqual('VideoId VideoImg VideoTitle VideoAuthor');
	});
});