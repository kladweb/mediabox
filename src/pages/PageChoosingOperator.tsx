import { Container, Toolbar } from "@mui/material";
import ChoosingOperator from "../components/ChoosingOperator";

function PageChoosingOperator(): JSX.Element {
  return (
    <Container maxWidth="xl">
      <Toolbar disableGutters sx={{flexWrap: 'wrap'}}>
        <ChoosingOperator/>
      </Toolbar>
    </Container>
  )
}

export default PageChoosingOperator;