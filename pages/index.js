import gridWiz from "grid-wiz";
import Link from "next/link";
import { createGlobalStyle, css } from "styled-components";
import PageTitle from "../components/PageTitle";
import Animation from "../components/Animation";

var yourGridCSS = css`
  ${gridWiz({
    prefix: "kirby--",
    support: "displayFlex",
    maxWidth: 1584,
    progressive: false,
    subgrid: true,
    breakpoints: [
      {
        name: "sm",
        size: 0,
        columns: 16,
        gutter: 0,
        margin: 0
      }
    ]
  })}
`;

const GlobalStyle = createGlobalStyle`
  ${yourGridCSS}

  p {
    max-width: 30rem;
  }
`;

const Index = () => (
  <>
    <PageTitle>
      Experiment: Finding the most user-centered and performant way to use CSS
      Grid fallback tools
    </PageTitle>
    <ul>
      <li>
        <Link href="/static-css">
          <a>Attempt #1: Requesting a static grid CSS file.</a>
        </Link>
      </li>
      <li>
        <Link href="/ssr-css">
          <a>Attempt #2: Server-side render the grid CSS on page request.</a>
        </Link>
      </li>
      <li>
        <Link href="/ssr-prerendered-css">
          <a>Attempt #3: Inline prerendered grid CSS.</a>
        </Link>
      </li>
      <li>
        <a href="/ssr-prerendered-css-dynamically">
          Attempt #4: Inline prerendered grid CSS based on requesting browser’s
          CSS Grid compatibility.
        </a>
      </li>
    </ul>
    <p>
      This website would have gotten a perfect Google Lighthouse score if the
      service worker was enabled. This is because it uses the{" "}
      <a
        href="https://github.com/pingboard/next-pwa-boilerplate"
        rel="noopener noreferrer"
        target="_blank"
      >
        Next.js PWA Boilerplate
      </a>
      . The boilerplate has service workers enabled by default and is free to
      use!
    </p>
    <Animation />
    <GlobalStyle />
  </>
);

export default Index;
