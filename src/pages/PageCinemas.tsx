import { useEffect } from "react";
import { Container, Toolbar } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { players } from "../data/dataIPTV";
import CardsCinemas from "../components/CardsCinemas";

function PageCinemas() {
  const navigate = useNavigate();
  const params = useParams();
  const deviceNames = Object.keys(players);

  // useEffect(() => {
  //   if (params.cinema && !deviceNames.includes(params.device)) {
  //     navigate('/blank');
  //   }
  // }, []);

  return (
    <Container maxWidth="xl">
      <Toolbar disableGutters sx={{flexWrap: 'wrap'}}>
        <CardsCinemas/>
      </Toolbar>
    </Container>
  )
}

export default PageCinemas;