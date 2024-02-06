import { useEffect } from "react";
import { NavigateFunction, Params, useNavigate, useParams } from "react-router-dom";
import { Container, Toolbar } from "@mui/material";
import CardsPlayers from "../components/CardsPlayers";
import { players } from "../data/dataIPTV";

function PagePlayers(): JSX.Element {
  const navigate: NavigateFunction = useNavigate();
  const params: Readonly<Params<string>> = useParams();
  const deviceNames: string[] = Object.keys(players);

  useEffect(() => {
    if (params.device && !deviceNames.includes(params.device)) {
      navigate('/');
    }
  }, []);

  return (
    <Container maxWidth="xl">
      <Toolbar disableGutters sx={{flexWrap: 'wrap'}}>
        <CardsPlayers/>
      </Toolbar>
    </Container>
  )
}

export default PagePlayers;