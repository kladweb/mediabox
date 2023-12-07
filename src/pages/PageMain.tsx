import { Container, Toolbar } from "@mui/material";
import CardsDevice from "../components/CardsDevice";


function PageMain() {
  return (
    <Container maxWidth="xl">
      <Toolbar disableGutters sx={{flexWrap: 'wrap'}}>
        <CardsDevice/>
      </Toolbar>
    </Container>
  )
}

export default PageMain;