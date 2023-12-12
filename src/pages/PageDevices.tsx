import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Container, Toolbar } from "@mui/material";
import CardsDevices from "../components/CardsDevices";
import { operators } from "../data/dataIPTV";

function PageDevices() {
  const navigate = useNavigate();
  const params = useParams();
  const operatorsNames = Object.keys(operators).map(operator => operator.toLowerCase());

  useEffect(() => {
    if (params.operator && !operatorsNames.includes(params.operator)) {
      navigate('/');
    }
  }, [])
  return (
    <Container maxWidth="xl">
      <Toolbar disableGutters sx={{flexWrap: 'wrap'}}>
        <CardsDevices/>
      </Toolbar>
    </Container>
  )
}

export default PageDevices;