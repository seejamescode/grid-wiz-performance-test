import Head from "next/head";
import PageTitle from "../components/PageTitle";
import Kirby from "../components/Kirby";
import kirbyPixelData from "../data/kirby1";

const title = "Attempt #1: Requesting a static grid CSS file.";

const Index = () => (
  <>
    <Head>
      <title>{title}</title>
      <link
        rel="stylesheet"
        type="text/css"
        href="./static/css/kirby-display-flex.css"
        media="screen"
      />
    </Head>
    <PageTitle>{title}</PageTitle>
    <Kirby kirbyPixelData={kirbyPixelData} />
  </>
);

export default Index;
