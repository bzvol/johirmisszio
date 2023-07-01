import { getDownloadURL, listAll, ref } from "firebase/storage";
import React, { SetStateAction, useEffect } from "react";
import { storage } from "./firebase";

export default function useCarousel(
  setImages: React.Dispatch<SetStateAction<string[]>>
) {
  useEffect(() => {
    (async () => {
      const carouselRef = ref(storage, "public/carousel");
      const { items } = await listAll(carouselRef);
      const images = await Promise.all(
        items.map(async (item) => await getDownloadURL(item))
      );

      setImages(images);
    })();
  });
}
