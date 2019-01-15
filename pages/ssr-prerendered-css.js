import { createGlobalStyle } from "styled-components";
import PageTitle from "../components/PageTitle";
import Kirby from "../components/Kirby";
import kirbyPixelData from "../data/kirby1";
import kirbyDisplayFlex from "../static/js/kirby-display-flex.js";

const title = "Attempt #3: Inline prerendered grid CSS.";

const GlobalStyle = createGlobalStyle`
  ${kirbyDisplayFlex}
`;

const Index = () => (
  <>
    <PageTitle>{title}</PageTitle>
    <Kirby kirbyPixelData={kirbyPixelData} />
    <GlobalStyle />
  </>
);

export default Index;
