import { Container, Toolbar } from "@mui/material";
import CardsOperators from "../components/CardsOperators";

function PageOperators(): JSX.Element {
  return (
    <Container maxWidth="xl">
      <Toolbar disableGutters sx={{flexWrap: 'wrap'}}>
        <CardsOperators/>
      </Toolbar>
    </Container>
  )
}

export default PageOperators;