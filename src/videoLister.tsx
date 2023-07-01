import React, {useEffect} from "react";
import axios from "axios";
import {videosArrayType} from "./App";

export default function useVideoLister(
  setVasPredVideos: React.Dispatch<React.SetStateAction<videosArrayType>>,
  setJanosEvVideos: React.Dispatch<React.SetStateAction<videosArrayType>>
) {
  useEffect(() => {
    Promise.all([vasPredVideosReq(), janosEvVideosReq()]).then(responses => {
      const vasPredItems = responses[0].data.items
      const janosEvItems = responses[1].data.items

      const vasPredVideosList = generateVideoData(vasPredItems, playlistId.VASPRED);
      setVasPredVideos(vasPredVideosList)

      const janosEvVideosList = generateVideoData(janosEvItems, playlistId.JANOSEV)
      setJanosEvVideos(janosEvVideosList)
    }).catch(console.error)
  }, [setVasPredVideos, setJanosEvVideos])
}

const generateVideoData = (items: any[], listId: string): videosArrayType => items.map((item: any) => {
  const title = item.snippet.title
  const videoId = item.snippet.resourceId.videoId
  const videoLink = `https://www.youtube.com/watch?v=${videoId}&list=${listId}`
  const date = new Date(Date.parse(item.snippet.publishedAt))

  return {title, date, videoLink, videoId}
});

const API_KEY = process.env.REACT_APP_YT_API_KEY
const playlistId = {
  VASPRED: "PLfCg3yltQMK6xXRrxgvgK8PPUB0qffzdZ",
  JANOSEV: "PLfCg3yltQMK6juwGjWbp07G_Ln1LqdTz1"
}

const vasPredVideosReq = () => axios.get("https://www.googleapis.com/youtube/v3/playlistItems", {
  params: {
    part: "snippet",
    playlistId: playlistId.VASPRED,
    maxResults: 3,
    key: API_KEY
  }
})
const janosEvVideosReq = () => axios.get("https://www.googleapis.com/youtube/v3/playlistItems", {
  params: {
    part: "snippet",
    playlistId: playlistId.JANOSEV,
    maxResults: 3,
    key: API_KEY
  }
})