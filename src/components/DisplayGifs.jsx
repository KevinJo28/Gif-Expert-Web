 
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import useApi from '../hooks/useApi'
import ImageItem from './ImageItem';
const DisplayGif = ({category})=>{
    const url = `https://api.giphy.com/v1/gifs/search?api_key=SRgVYxxZ0n3XxqRw4yxI7MH1a86C1C1K&q=${category}&limit=100`
    const {loading, data} = useApi(url);
    
    return (
      <div className="containerGifs">
        {loading
          ? data.map((img) => (
              <ImageItem
                key={img.id}
                title={img.title}
                url={img.images.downsized_medium.url}
              />
            ))
          : console.log("No cargo")}
          <ImageItem></ImageItem>
      </div>
    );
}

export default DisplayGif;