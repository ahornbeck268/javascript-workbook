import React from 'react';

const VideoDetail = ({video}) => {
  if (!video) {
    return <div className='video-detail'>Waiting...</div>;
}

  const videoId = video.id;
  const Url = `https://www.youtube.com/embed/${videoId}`;
  return(
    <div className="video-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
       <iframe className="embed-responsive-item" src={Url}></iframe>
      </div>
      <div className="details">
        <div>{video.snippet.title}</div>
        <div>{video.snippet.description}</div>
         {/*above two lines targeting specific data from youtube and displaying with the search results   */}
    </div>
  </div>
  );
};
export default VideoDetail;