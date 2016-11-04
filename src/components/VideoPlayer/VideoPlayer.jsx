import React, { PropTypes } from 'react';
import Video from '../Video/Video';
import TimeSlider from '../TimeSlider/TimeSlider';

const VideoPlayer = ({ videoId, videoLength, onSliderChange }) => {
	const containerStyle = {
		backgroundColor: 'white',
		display: 'inline-block',
		float: 'left',
		padding: '12px 15px 20px 15px'
	};

	return (
		<div style={containerStyle}>
			<Video videoId={videoId} />
			<TimeSlider
				videoLength={videoLength}
				onSliderChange={onSliderChange} />
		</div>
	);
};

VideoPlayer.propTypes = {
	videoId: PropTypes.string.isRequired,
	videoLength: PropTypes.number.isRequired,
	onSliderChange: PropTypes.func.isRequired
};

export default VideoPlayer;
