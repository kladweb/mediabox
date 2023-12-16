import { useState } from "react";
import { CardMedia } from "@mui/material";

function ImageManual({image}: any) {

  // {xs: 'none', md: 'flex'},
  // window.innerWidth

  const [scaleImg, setScaleImg] = useState(15);
  const [cursor, setCursor] = useState('zoom-in');

  const handlerZoom = () => {
    if (scaleImg === 15) {
      setScaleImg((window.innerWidth <= 900) ? 98 : 70);
      setCursor('zoom-out');
    } else {
      setScaleImg(15);
      setCursor('zoom-in');
    }
  }

  return (
    <CardMedia
      component="img"
      image={`/img/manuals/${image}`}
      alt={image}
      onClick={handlerZoom}
      sx={{
        margin: "0.25em auto 0.5em",
        objectFit: "contain",
        cursor: `${cursor}`,
        width: `${scaleImg}%`,
        transition: '0.2s ease-in-out'
      }}
    />
  )
}

export default ImageManual;