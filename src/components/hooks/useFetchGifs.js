import { useState,useEffect } from "react"
import { getGifs } from "../../helpers/getGifs";

export const useFetchGifs = (category) => {
    const [images, setimages] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const getImages = async() => {
      const newImages= await getGifs(category);
      console.log('holi', newImages)
      setimages(newImages)
      setLoading(false);
    }
    useEffect(()=> {
      getImages();
  
    },[])
    return {
        images: images,
        isLoading:isLoading,
    }
}