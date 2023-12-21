import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Container, Toolbar } from "@mui/material";
import CardsDevices from "../components/CardsDevices";
import { devices, operators, players } from "../data/dataIPTV";

function PageDevices() {
  const navigate = useNavigate();
  const params = useParams();
  const operatorNames = Object.keys(operators);

  useEffect(() => {
    if (params.operator && !operatorNames.includes(params.operator)) {
      navigate('/');
    }
  }, []);

  return (
    <Container maxWidth="xl">
      <Toolbar disableGutters sx={{flexWrap: 'wrap'}}>
        <CardsDevices/>
      </Toolbar>
    </Container>
  )
}

export default PageDevices;