import React, { useEffect, useState } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { Card, CardMedia, CardActionArea, Skeleton } from '@mui/material';
import { appColors } from "../services/appColors";
import type { PropsListChannels } from "../types/typesBox";

function ListChannels({operator, activeCard, changeCard}: PropsListChannels): JSX.Element {
  const navigate: NavigateFunction = useNavigate();
  const [loaded, setLoaded] = useState<boolean>(false);
  const [isActive, setIsActive] = useState<boolean>(false);

  const handlerList = () => {
    setIsActive(!isActive);
    if (!isActive && operator !== activeCard) {
      navigate(`/lists`);
      changeCard('');
      setTimeout(() => {
        navigate(`/lists/${operator}`);
        changeCard(operator);
      }, 0);
    } else {
      navigate(`/lists`);
      changeCard('');
    }
  }

  useEffect(() => {
    if (operator !== activeCard) {
      setIsActive(false);
    } else {
      setIsActive(true);
    }
  }, [activeCard]);

  const card: JSX.Element = <Card
    sx={{
      cursor: 'default',
      width: {xs: '25vw', sm: 115},
      maxWidth: 115,
      height: 50,
      margin: {xs: '0.5rem', sm: '1rem'},
      display: 'flex',
      justifyContent: 'center',
      backgroundColor: appColors.light1,
      boxShadow: isActive ? 'none' : `3px 3px 10px ${appColors.dark2}`,
      transform: isActive ? 'translate(3px, 3px)' : 'none',
      transition: '0.2s'
    }}
    onClick={handlerList}
  >
    <CardActionArea>
      <CardMedia
        component="img"
        image={`/img/operators/${operator.toLowerCase()}.png`}
        alt={operator}
        onLoad={() => setLoaded(true)}
        sx={{
          m: '-1rem 0.1rem 0',
          p: '0',
          height: '5rem',
          objectFit: "contain",
          display: (loaded) ? 'block' : 'none',
        }}
        className='cardList'
      />
      {
        (!loaded) && <Skeleton variant="rounded" width={280} height='5rem' sx={{m: "auto"}}/>
      }
    </CardActionArea>
  </Card>

  return (
    <>
      {card}
    </>
  );
}

export default React.memo(ListChannels);
// export default ListChannels;