import { Box, Container, Toolbar } from "@mui/material";
import MainInfo from "../components/MainInfo";
import Counter from "../components/Counter";

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