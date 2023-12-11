import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Container, Toolbar } from "@mui/material";
import CardsDevice from "../components/CardsDevice";
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
        <CardsDevice/>
      </Toolbar>
    </Container>
  )
}

export default PageDevices;