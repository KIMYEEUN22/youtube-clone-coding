import React, { useEffect, useState } from "react";
import Header from "./compoents/header/header";
import VideoList from "./compoents/video_list/video_list";
import styles from "./app.module.css";

function App({ youtube }) {
  const [videos, SetVideo] = useState([]);

  useEffect(() => {
    youtube
      .mostPopular() //
      .then((items) => SetVideo(items));
  }, []);

  const search = (input) => {
    youtube
      .search(input) //
      .then((items) => SetVideo(items));
  };

  return (
    <div className={styles.app}>
      <Header onSearch={search} />
      <VideoList videos={videos} />
    </div>
  );
}

export default App;
