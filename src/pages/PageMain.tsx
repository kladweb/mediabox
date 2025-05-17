import { Container, Toolbar } from "@mui/material";
import MainInfo from "../components/MainInfo";

function PageMain(): JSX.Element {
  return (
    <Container maxWidth="xl">
      <Toolbar disableGutters sx={{flexWrap: 'wrap'}}>
        <MainInfo/>
      </Toolbar>
    </Container>
  )
}

export default PageMain;