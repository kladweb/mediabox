import { Container, Toolbar } from "@mui/material";
import Manuals from "../components/Manuals/Manuals";

function PageManual() {
  return (
    <Container maxWidth="xl">
      <Toolbar disableGutters sx={{flexWrap: 'wrap'}}>
        <Manuals/>
      </Toolbar>
    </Container>
  )
}

export default PageManual;