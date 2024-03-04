import { Container, Toolbar } from "@mui/material";
import ListsChannels from "../components/ListsChannels";

function PageChannels(): JSX.Element {
  return (
    <Container maxWidth="xl">
      <Toolbar disableGutters sx={{flexWrap: 'wrap'}}>
        <ListsChannels/>
      </Toolbar>
    </Container>
  )
}

export default PageChannels;