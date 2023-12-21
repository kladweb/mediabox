import { Container, Toolbar } from "@mui/material";
import CardsPlayers from "../components/CardsPlayers";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { players } from "../data/dataIPTV";

function PageOperators() {
  const navigate = useNavigate();
  const params = useParams();
  const deviceNames = Object.keys(players);

  useEffect(() => {
    if (params.device && !deviceNames.includes(params.device)) {
      navigate('/');
    }
  }, []);

  return (
    <Container maxWidth="xl" >
      <Toolbar disableGutters sx={{flexWrap: 'wrap'}}>
        <CardsPlayers/>
      </Toolbar>
    </Container>
  )
}

export default PageOperators;