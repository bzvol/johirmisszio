import { getDownloadURL, listAll, ref } from "firebase/storage";
import React, { SetStateAction, useEffect } from "react";
import { storage } from "./firebase";

export default function useCarousel(
  setImages: React.Dispatch<SetStateAction<string[]>>
) {
  useEffect(() => {
    const carouselRef = ref(storage, "public/carousel");
    listAll(carouselRef)
      .then((res) => {
        const images = res.items.map(async (item) => await getDownloadURL(item));
        Promise.all(images).then((urls) => setImages(urls));
      })
      .catch(console.error);
  }, [setImages]);
}
