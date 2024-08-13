import React from "react";

interface VideoCardProps {
  videoUrl: string;
  description: string;
}

const VideoCard: React.FC<VideoCardProps> = ({ videoUrl, description }) => {
  return (
    <div className="max-w-sm rounded shadow-lg bg-white">
      <div>
        <video controls>
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="p-4">
        <p className="text-gray-700 text-base font-medium">{description}</p>
      </div>
    </div>
  );
};

export default VideoCard;
