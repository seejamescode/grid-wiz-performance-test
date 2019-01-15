import gridWiz from "grid-wiz";
import { createGlobalStyle } from "styled-components";
import PageTitle from "../components/PageTitle";
import Kirby from "../components/Kirby";
import gridConfig from "../data/gridConfig";
import kirbyPixelData from "../data/kirby1";

const title = "Attempt #2: Server-side render the grid CSS on page request.";

const GlobalStyle = createGlobalStyle`
  ${gridWiz({ ...gridConfig, support: "displayFlex" })}
`;

const Index = () => (
  <>
    <PageTitle>{title}</PageTitle>
    <Kirby kirbyPixelData={kirbyPixelData} />
    <GlobalStyle />
  </>
);

export default Index;
