import React from 'react';
import {render} from 'react-dom';
import {Page, ThemeColor, Block} from './lib'

render(
  <Page>
    <Block condensed>
      <h1>This is site-blocks</h1>
    </Block>
    <Block condensed shade={ThemeColor.Dark}>
      It's really cool.
    </Block>
    <Block condensed>
      And here's why...
    </Block>
    <Block condensed shade={ThemeColor.Medium}>
      <ul>
        <li>Composable blocks</li>
        <li>Blocks</li>
        <li>More blocks</li>
      </ul>
    </Block>
  </Page>,
  document.getElementById('app'),
);