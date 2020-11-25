import React from 'react';

const VideoDetails = ({ video }) => {
   if (video) {
      const url = `https://www.youtube.com/embed/${video.id.videoId}`;
      return (
         <div>
            <div className="ui embed">
               <iframe src={url} />
            </div>
            <div className="ui segment">
               <h4 className="ui header">{video.snippet.title}</h4>
               <p>{video.snippet.description}</p>
            </div>
         </div>
      );
   } else {
      return <div>Loading...</div>;
   }
}

export default VideoDetails;