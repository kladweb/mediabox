import React, { useState } from "react";
import { appColors } from "../services/appColors";
import { Box, Skeleton } from "@mui/material";
import type { PropsImageChannel } from "../types/typesBox";

function ListChannel({index, srcImgChannel, altImgChannel, nameImgChannel}: PropsImageChannel) {

  const [imageLoaded, setImageLoaded] = useState<boolean>(false);
  const handlerErrorImg = (e: any) => {
    const target = e.target as HTMLTextAreaElement;
    target.setAttribute('src', '/img/channels/noimage.png');
  }

  const handlerLoadImg = () => {
    setImageLoaded(true);
  }

  return (
    <Box key={index} component="div"
         sx={{
           display: 'block',
           m: '0.2rem 0.5rem',
           width: '21rem',
           textAlign: 'left',
           backgroundColor: appColors.light11,
           borderRadius: '0.5rem'
         }}
    >
      <Box
        component="img"
        src={srcImgChannel}
        alt={altImgChannel}
        sx={{
          display: `${imageLoaded ? 'inline-block' : 'none'}`,
          m: {xs: '0.2rem 0.5rem', md: '0.5rem'},
          height: {xs: '2rem', md: '3rem'},
          maxWidth: {xs: '25%', md: '25%'},
          objectFit: "contain",
          borderRadius: {xs: '3px', md: '5px'},
          verticalAlign: 'middle'
        }}
        onError={handlerErrorImg}
        onLoad={handlerLoadImg}
      />
      {
        (imageLoaded ? null :
            <Skeleton variant="rounded" sx={{
              display: 'inline-block',
              m: {xs: '0.2rem 0.5rem', md: '0.5rem'},
              height: {xs: '2rem', md: '3rem'},
              width: {xs: '25%', md: '25%'},
              verticalAlign: 'middle'
            }}/>
        )
      }

      <Box component="div" sx={{display: 'inline-block', width: '70%', verticalAlign: 'middle'}}>
        <Box component="span" sx={{wordWrap: 'break-word'}}
        >
          {nameImgChannel}
        </Box>
      </Box>
    </Box>
  );
}

export default React.memo(ListChannel);