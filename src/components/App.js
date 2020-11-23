import React from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import youtube from '../apis/youtube';
import VideoDetails from './VideoDetails';

class App extends React.Component {
    state = { videos: [], selectedVideo: null }

    onSearch = async (term) => {
        const response = await youtube.get('/search', {
            params: {
                q: term
            }
        });
        this.setState({ videos: response.data.items, selectedVideo: response.data.items[0] })
    }

    onVideoSelect = (video) => {
        this.setState({ selectedVideo: video })
        console.log(this.state.selectedVideo);
    }

    render() {
        return (
            <div className="ui container">
                <SearchBar search={this.onSearch} />
                <div className="ui grid">
                    <div className="row">
                        <div className="eleven wide column"><VideoDetails video={this.state.selectedVideo} /></div>
                        <div className="five wide column"><VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect} /></div>
                    </div>
                </div>
            </div>
        );
    }
    
}

export default App;