import { Container, Toolbar } from "@mui/material";
import CardsPlayers from "../components/CardsPlayers";

function PageOperators() {
  return (
    <Container maxWidth="xl">
      <Toolbar disableGutters sx={{flexWrap: 'wrap'}}>
        <CardsPlayers/>
      </Toolbar>
    </Container>
  )
}

export default PageOperators;