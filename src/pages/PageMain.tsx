import { Container, Toolbar } from "@mui/material";
import CardsDevice from "../components/CardsDevice";
import MainInfo from "../components/MainInfo";


function PageMain() {
  return (
    <Container maxWidth="xl">
      <Toolbar disableGutters sx={{flexWrap: 'wrap'}}>
        <MainInfo/>
      </Toolbar>
    </Container>
  )
}

export default PageMain;