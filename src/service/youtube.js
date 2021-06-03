class Youtube {
  constructor(key) {
    this.key = key;
    this.getRequestOptions = {
      method: "GET",
      redirect: "follow",
    };
  }

  mostPopular() {
    return fetch(
      `https://www.googleapis.com/youtube/v3/videos?key=AIzaSyAD6OwbwNDmOemjFq6v52VfXwoh2M2uTLg&part=snippet&chart=mostPopular&maxResults=30&key=${this.key}`,
      this.getRequestOptions
    )
      .then((response) => response.json())
      .then((result) => result.items);
  }

  search(query) {
    return fetch(
      `https://www.googleapis.com/youtube/v3/search?key=AIzaSyAD6OwbwNDmOemjFq6v52VfXwoh2M2uTLg&part=snippet&maxResults=30&q=${query}&type=video&key=${this.key}`,
      this.getRequestOptions
    )
      .then((response) => response.json())
      .then((result) =>
        result.items.map((item) => ({ ...item, id: item.id.videoId }))
      );
  }
}

export default Youtube;
