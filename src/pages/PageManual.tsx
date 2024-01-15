import { Container, Toolbar } from "@mui/material";
import Manual from "../components/Manuals/Manual";

function PageManual() {
  return (
    <Container maxWidth="xl">
      <Toolbar disableGutters sx={{flexWrap: 'wrap'}}>
        <Manual/>
      </Toolbar>
    </Container>
  )
}

export default PageManual;