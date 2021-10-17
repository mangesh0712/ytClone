export const videolistMapped = (videoList) => {
  const transformedVideoList = videoList.map((video) => {
    return {
      title: video.snippet.title,
      thumbnail: video.snippet.thumbnails.high,
      channelName: video.snippet.channelTitle,
      videoId: video.id.videoId,
    };
  });
  return transformedVideoList;
};
