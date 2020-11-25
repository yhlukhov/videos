import React, { useEffect, useState } from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetails from './VideoDetails';
import useVideos from '../hooks/useVideos';

const App = () => {
    
    const [selectedVideo, setSelectedVideo] = useState(null)
    const [videos, search] = useVideos('buildings')

    useEffect(()=>{
        setSelectedVideo(videos[0])
    }, [videos])

    return (
        <div className="ui container">
            <SearchBar onSearch={search} />
            <div className="ui grid">
                <div className="row">
                    <div className="eleven wide column"><VideoDetails video={selectedVideo} /></div>
                    <div className="five wide column"><VideoList videos={videos} onVideoSelect={setSelectedVideo} /></div>
                </div>
            </div>
        </div>
    );
}

export default App;



// class App extends React.Component {
//     state = { videos: [], selectedVideo: null }

//     componentDidMount() {
//         this.onSearch('react')
//     }

//     onSearch = async (term) => {
//         const response = await youtube.get('/search', {
//             params: {
//                 q: term
//             }
//         });
//         this.setState({ videos: response.data.items, selectedVideo: response.data.items[0] })
//     }

//     onVideoSelect = (video) => {
//         this.setState({ selectedVideo: video })
//         console.log(this.state.selectedVideo);
//     }

//     render() {
//         return (
//             <div className="ui container">
//                 <SearchBar onSearch={this.onSearch} />
//                 <div className="ui grid">
//                     <div className="row">
//                         <div className="eleven wide column"><VideoDetails video={this.state.selectedVideo} /></div>
//                         <div className="five wide column"><VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect} /></div>
//                     </div>
//                 </div>
//             </div>
//         );
//     }
    
// }