import { Container, Toolbar } from "@mui/material";
import CardsOperator from "../components/CardsOperator";

function PageOperator() {
  return (
    <Container maxWidth="xl">
      <Toolbar disableGutters sx={{flexWrap: 'wrap'}}>
        <CardsOperator/>
      </Toolbar>
    </Container>
  )
}

export default PageOperator;