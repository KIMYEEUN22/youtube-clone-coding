import React, { useEffect, useState } from "react";
import Header from "./compoents/header/header";
import VideoList from "./compoents/video_list/video_list";
import styles from "./app.module.css";
import VideoDetail from "./compoents/video_detail/video_detail";

function App({ youtube }) {
  const [videos, SetVideo] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const selectVideo = (video) => {
    setSelectedVideo(video);
  };

  useEffect(() => {
    youtube
      .mostPopular() //
      .then((items) => SetVideo(items));
  }, []);

  const search = (input) => {
    youtube
      .search(input) //
      .then((items) => SetVideo(items));
    setSelectedVideo(null);
  };

  return (
    <div className={styles.app}>
      <Header onSearch={search} />
      <section className={styles.content}>
        {selectedVideo && (
          <div className={styles.detail}>
            <VideoDetail video={selectedVideo} />
          </div>
        )}
        <div className={styles.list}>
          <VideoList
            videos={videos}
            onVideoClick={selectVideo}
            display={selectedVideo ? "list" : "grid"}
          />
        </div>
      </section>
    </div>
  );
}

export default App;
