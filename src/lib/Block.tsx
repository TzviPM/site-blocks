import React from "react";
import { css } from "emotion";
import { Themed, ThemeColor, ColorValue } from "./Page";

export const enum ConnectionStyle {
  Rounded = "rounded",
  Skewed = "skewed"
}

interface Props {
  children: React.ReactNode;
  shade?: ThemeColor;
  connection?: ConnectionStyle;
  connected?: boolean;
}

export const Block = ({ children, shade, connection, connected }: Props) => {
  return (
    <Themed.Consumer>
      {theme => {
        const color = theme.colors[shade || ThemeColor.Light];
        const style = css`
          display: block;
          padding: 2em;
          color: ${color.foreground};
          background: ${color.background};
          ${theme.condensed
            ? css`
                padding-left: 10em;
                padding-right: 10em;
              `
            : ""};
          ${connected
            ? css`
                margin-top: -6em;
                padding-top: 8em;
              `
            : ""};
        `;

        const connectorMarkup =
          connection == null ? null : (
            <Connector style={connection} color={color} />
          );

        return (
          <>
            <div className={style}>{children}</div>
            {connectorMarkup}
          </>
        );
      }}
    </Themed.Consumer>
  );
};

const Connector = ({
  style,
  color
}: {
  style: ConnectionStyle;
  color: ColorValue;
}) => {
  if (style === ConnectionStyle.Rounded) {
    return (
      <div
        className={css`
          height: 6em;
          background: ${color.background};
          clip-path: ellipse(50% 100% at 50% 0%);
        `}
      />
    );
  }
  if (style === ConnectionStyle.Skewed) {
    return (
      <div
        className={css`
          height: 6em;
          background: ${color.background};
          clip-path: polygon(100% 0, 0 0, 0 100%);
        `}
      />
    )
  }
};
