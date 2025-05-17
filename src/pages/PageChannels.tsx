import { Container, Toolbar } from "@mui/material";
import ListsChannels from "../components/ListsChannels";
import ScrollUp from "../components/ScrollUp";

function PageChannels(): JSX.Element {




  return (
    <>
      <ScrollUp/>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{flexWrap: 'wrap'}}>
          <ListsChannels/>
        </Toolbar>
      </Container>
    </>
  )
}

export default PageChannels;