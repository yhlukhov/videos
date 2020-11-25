import { useEffect, useState } from 'react';
import youtube from '../apis/youtube';

const useVideos = (defaultSearchTearm) => {
   const [videos, setVideos] = useState([])

   useEffect(() => {
      search(defaultSearchTearm)
   }, [defaultSearchTearm])

   const search = async (term) => {
      const response = await youtube.get('/search', {
         params: {
            q: term
         }
      });
      setVideos(response.data.items)
   }
   return [videos, search]
}

export default useVideos;