import React, { useState } from 'react';
import "../css/Learn.css";
const Learn = () => {
  const [videos] = useState([
    {
      id: 1,
      title: 'Archer’s Pose: Akarna Dhanurasana',
      thumbnail: 'https://www.theyogacollective.com/wp-content/uploads/2020/04/archers-pose-for-pose-page-1200x851.jpeg',
      url: 'https://www.youtube.com/embed/bxO4MK8YDWE',
    },
    {
      id: 2,
      title: 'Monkey Pose: Hanumanasana',
      thumbnail: 'https://www.theyogacollective.com/wp-content/uploads/2019/11/Full.-Splits-Hanumanasana-1200x800.jpeg',
      url: 'https://www.youtube.com/embed/3ir0DFG5oMQ',
    },
    {
      id: 3,
      title: 'Peacock Pose: Mayurasana',
      thumbnail: 'https://www.theyogacollective.com/wp-content/uploads/2020/04/Advanced-Arm-Balance-1-1200x800.jpeg',
      url: 'https://www.youtube.com/embed/ASNK54226ts',
    },
    {
      id: 4,
      title: 'Warrior I: Virabhadrasana I',
      thumbnail: 'https://www.theyogacollective.com/wp-content/uploads/2019/10/Warrior-1-for-Pose-Page-1200x800.jpeg',
      url: 'https://www.youtube.com/embed/NytDpa2r34g',
    },
    {
      id: 5,
      title: 'Crow Pose: Bakansana',
      thumbnail: 'https://www.theyogacollective.com/wp-content/uploads/2020/04/AdobeStock_144091279-1200x800.jpeg',
      url: 'https://www.youtube.com/embed/ja2eab4sWlM',
    },
    {
      id: 6,
      title: 'Side Plank Pose: Vasisthasana',
      thumbnail: 'https://www.theyogacollective.com/wp-content/uploads/2019/11/AdobeStock_175561075-1200x800.jpeg',
      url: 'https://www.youtube.com/embed/_ByCVx-WxfQ',
    },
  ]);

  const [currentVideo, setCurrentVideo] = useState(null);

  const openVideo = (videoUrl) => {
    setCurrentVideo(videoUrl);
  };

  const closeVideo = () => {
    setCurrentVideo(null);
  };

  return (
    <div className="container">
      <h1 className="my-0">Learn</h1>
      <div className="row my-3">
        {videos.map((video) => (
          <div className="col-md-4" key={video.id}>
            <div className="card mb-4 my-5">
              <img
                src={video.thumbnail}
                className="card-img-top"
                alt={video.title}
                style={{ cursor: 'pointer' }}
                onClick={() => openVideo(video.url)}
              />
              <div className="card-body">
                <h5 className="card-title">{video.title}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Video Modal */}
      {currentVideo && (
        <div className="modal show" style={{ display: 'block', backgroundColor: 'rgba(0, 0, 0, 0.8)' }}>
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Watch Video</h5>
                <button type="button" className="btn-close" onClick={closeVideo}></button>
              </div>
              <div className="modal-body">
                <iframe
                  width="100%"
                  height="400px"
                  src={currentVideo}
                  title="Video Player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Learn;
