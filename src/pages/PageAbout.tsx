import { Container, Toolbar } from "@mui/material";
import AboutUs from "../components/AboutUs";

function PageAbout() {
  return (
    <Container maxWidth="xl">
      <Toolbar disableGutters sx={{flexWrap: 'wrap'}}>
        <AboutUs/>
      </Toolbar>
    </Container>
  )
}

export default PageAbout;