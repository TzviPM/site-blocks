import React from "react";
import { render } from "react-dom";
import { Page, ThemeColor, Block, ConnectionStyle } from "./lib";
import { injectGlobal } from "emotion";

injectGlobal`
  html, body, #app {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    font-family: 'Comic Sans MS'
  }
`;

render(
  <Page theme={{
    colors: {
      dark: {
        background: 'darkred',
        foreground: '#EEE',
      },
    },
    condensed: true
  }}>
    <Block shade={ThemeColor.Dark} connection={ConnectionStyle.Rounded}>
      <h1>This is site-blocks</h1>
    </Block>
    <Block connected>It's really cool.</Block>
    <Block connection={ConnectionStyle.Skewed}>And here's why...</Block>
    <Block shade={ThemeColor.Medium} connected>
      <ul>
        <li>Composable blocks</li>
        <li>Blocks</li>
        <li>More blocks</li>
      </ul>
    </Block>
  </Page>,
  document.getElementById("app")
);
