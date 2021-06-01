import React, { useEffect, useState } from "react";
import Header from "./compoents/header/header";
import VideoList from "./compoents/video_list/video_list";
import styles from "./app.module.css";

function App() {
  const [videos, SetVideo] = useState([]);
  useEffect(() => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      "https://www.googleapis.com/youtube/v3/videos?key=AIzaSyAD6OwbwNDmOemjFq6v52VfXwoh2M2uTLg&part=snippet&chart=mostPopular&maxResults=30&key=AIzaSyAD6OwbwNDmOemjFq6v52VfXwoh2M2uTLg",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => SetVideo(result.items))
      .catch((error) => console.log("error", error));
  }, []);
  return (
    <div className={styles.app}>
      <Header />
      <VideoList videos={videos} />
    </div>
  );
}

export default App;
