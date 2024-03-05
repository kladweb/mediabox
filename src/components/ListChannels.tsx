import { useEffect, useState } from "react";
import { NavigateFunction, NavLink, Outlet, useNavigate } from "react-router-dom";
import { Card, CardContent, CardMedia, Typography, CardActionArea, Skeleton } from '@mui/material';
import { appColors } from "../services/appColors";
import { operators } from "../data/dataIPTV";
import type { PropsListChannels } from "../types/typesBox";

export default function ListChannels({operator, aktiveCard, changeCard}: PropsListChannels): JSX.Element {
  const navigate: NavigateFunction = useNavigate();
  const [loaded, setLoaded] = useState<boolean>(false);
  const [isActive, steIsActive] = useState<boolean>(false);

  const handlerList = () => {
    steIsActive(!isActive);
    if (!isActive && operator !== aktiveCard) {
      navigate(`/lists/${operator}`);
      changeCard(operator);
    } else {
      navigate(`/lists`);
      changeCard('');
    }
  }

  useEffect(() => {
    if (operator !== aktiveCard) {
      steIsActive(false);
    }
  }, [aktiveCard]);

  const card: JSX.Element = <Card
    sx={{
      cursor: 'default',
      width: {xs: '30vw', sm: 115},
      maxWidth: 115,
      height: 80,
      margin: {xs: '0.5rem', sm: '1rem'},
      display: 'flex',
      justifyContent: 'center',
      backgroundColor: appColors.light1,
      boxShadow: isActive ? 'none' : `3px 3px 10px ${appColors.dark2}`,
      transform: isActive ? 'translate(3px, 3px)' : 'none',
      transition: '0.2s',
      ':hover': {
        // boxShadow: `0`,
        // transform: 'translate(3px, 3px)',
        transition: '0.1s',
      },
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
          m: '0 0.1rem',
          p: '0',
          height: '5rem',
          objectFit: "contain",
          display: (loaded) ? 'block' : 'none',
        }}
        className='cardList'
      />
      <CardMedia
        component="img"
        image={`/img/operators/${operator.toLowerCase()}.png`}
        alt={operator}
        onLoad={() => setLoaded(true)}
        sx={{
          m: '0 0.1rem',
          p: '0',
          height: '5rem',
          objectFit: "contain",
          display: (loaded) ? 'block' : 'none',
          filter: 'grayscale(100%)',
        }}
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