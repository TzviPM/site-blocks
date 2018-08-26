import React from "react";
import { css } from "emotion";
import {Themed, ThemeColor} from './Page';

interface Props {
  children: React.ReactNode;
  shade?: ThemeColor;
  condensed?: boolean;
}

export const Block = ({ children, shade, condensed }: Props) => {
  return <Themed.Consumer>
    {theme => {
      const color = shade || ThemeColor.Light;
      const style = css`
        display: block;
        padding: 2em;
        color: ${theme.colors[color].foreground};
        background: ${theme.colors[color].background};
        ${condensed ? 
          css`
            padding-left: 10em;
            padding-right: 10em;
          `
          : ''
        }
      `;
      return <div className={style}>{children}</div>
    }}
  </Themed.Consumer>;
};

function classes(
  base: string,
  opts: {
    [key: string]: boolean;
  }
) {
  const optsString = Object.keys(opts)
    .filter(key => opts[key])
    .join(" ");
  return `${base} ${optsString}`;
}
