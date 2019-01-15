import { createGlobalStyle } from "styled-components";
import PageTitle from "../components/PageTitle";
import Kirby from "../components/Kirby";
import kirbyPixelData from "../data/kirby1";
import kirbyDisplayFlex from "../static/js/kirby-display-flex.js";
import kirbyCSSVariables from "../static/js/kirby-css-variables.js";
import kirbyDisplayGrid from "../static/js/kirby-display-grid.js";

const title =
  "Attempt #4: Inline prerendered grid CSS based on requesting browser’s CSS Grid compatibility.";

const GlobalStyle = createGlobalStyle`
  ${props => props.browserSupportedCSS}
`;

const Index = ({ browserSupportedCSS, message }) => (
  <>
    <PageTitle>{title}</PageTitle>
    <p>{message}</p>
    <Kirby kirbyPixelData={kirbyPixelData} />
    <GlobalStyle browserSupportedCSS={browserSupportedCSS} />
  </>
);

Index.getInitialProps = async ({ req }) => {
  const {
    browser,
    isChrome,
    isEdge,
    isFirefox,
    isOpera,
    isSafari,
    version
  } = req.useragent;
  const uaVersion = Number(
    version
      .split(".")
      .slice(0, 2)
      .join(".")
  );

  let browserSupportedCSS = kirbyDisplayFlex;
  let browserSupportMode = "displayFlex, not cssVariables or displayGrid";

  if (
    (isChrome && uaVersion > 49) ||
    (isEdge && uaVersion > 15) ||
    (isFirefox && uaVersion > 31) ||
    (isOpera && uaVersion > 36) ||
    (isSafari && uaVersion > 9.1)
  ) {
    browserSupportedCSS = kirbyCSSVariables;
    browserSupportMode = "cssVariables, not displayFlex or displayGrid";
  }

  if (
    (isChrome && uaVersion > 57) ||
    (isFirefox && uaVersion > 52) ||
    (isOpera && uaVersion > 44) ||
    (isSafari && uaVersion > 10.1)
  ) {
    browserSupportedCSS = kirbyDisplayGrid;
    browserSupportMode = "displayGrid, not displayFlex or cssVariables";
  }

  const message = `The request for this page came from ${browser} v${uaVersion}. So we served the grid CSS file that uses ${browserSupportMode}. (If this is Edge 16 or greater, we do not send the displayGrid version because of an outstanding bug: https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/18676405/)`;

  return { browserSupportedCSS, message };
};

export default Index;
