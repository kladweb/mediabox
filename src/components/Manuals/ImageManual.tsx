import { useState } from "react";
import { CardMedia } from "@mui/material";

function ImageManual({image}: any) {
  const scaleBig = (window.innerWidth <= 900) ? 98 : 70;
  const scaleSmall = (window.innerWidth <= 900) ? 35 : 15;
  const [scaleImg, setScaleImg] = useState(scaleSmall);
  const [cursor, setCursor] = useState('zoom-in');

  const handlerZoom = () => {
    if (scaleImg <= scaleSmall) {
      setScaleImg(scaleBig);
      setCursor('zoom-out');
    } else {
      setScaleImg(scaleSmall);
      setCursor('zoom-in');
    }
  }

  return (
    <CardMedia
      component="img"
      image={`/img/manuals/${image}`}
      // alt={image.split('_')[1]}
      alt={image}
      onClick={handlerZoom}
      sx={{
        margin: {xs: '0 auto 0.25rem', md: '0.5em auto 1em'},
        objectFit: "contain",
        cursor: `${cursor}`,
        width: `${scaleImg}%`,
        transition: '0.2s ease-in-out'
      }}
    />
  )
}

export default ImageManual;