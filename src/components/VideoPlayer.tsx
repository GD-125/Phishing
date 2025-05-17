import React from 'react';

interface VideoPlayerProps {
  videoId: string;
  title: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoId, title }) => {
  return (
    <div className="w-full aspect-video rounded-lg overflow-hidden shadow-lg mx-auto my-8 max-w-4xl">
      <iframe
        className="w-full h-full"
        src="https://www.youtube-nocookie.com/embed/X_YCFzvLZZE"
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoPlayer;