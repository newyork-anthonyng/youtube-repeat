import React, { Component } from 'react';
import HeaderContainer from './containers/HeaderContainer';
import VideoPlayerContainer from './containers/VideoPlayerContainer';
import SearchResultListContainer from './containers/SearchResultListContainer';
import FavoritesListContainer from './containers/FavoritesListContainer';

class App extends Component {
	render() {
		return (
			<div>
				<HeaderContainer />
				<VideoPlayerContainer />
				<SearchResultListContainer />
				<FavoritesListContainer />
			</div>
		);
	}
}

export default App;
