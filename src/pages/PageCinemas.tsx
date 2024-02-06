import { Container, Toolbar } from "@mui/material";
import CardsCinemas from "../components/CardsCinemas";

function PageCinemas(): JSX.Element {

  return (
    <Container maxWidth="xl">
      <Toolbar disableGutters sx={{flexWrap: 'wrap'}}>
        <CardsCinemas/>
      </Toolbar>
    </Container>
  )
}

export default PageCinemas;