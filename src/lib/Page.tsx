import React from "react";
import {css} from 'emotion';

export const enum ThemeColor {
  Light = "light",
  Dark = "dark",
  Medium = "medium"
}

interface ColorValue {
  foreground: string;
  background: string;
}

export interface Theme {
  colors: { [key in ThemeColor]: ColorValue };
}

export interface PartialTheme {
  colors?: { [key in ThemeColor]?: Partial<ColorValue> };
}

interface Props {
  children: React.ReactNode;
  theme?: PartialTheme;
}

function createTheme(theme: PartialTheme = {}): Theme {
  const colors = theme.colors || {
    [ThemeColor.Light]: {},
    [ThemeColor.Medium]: {},
    [ThemeColor.Dark]: {}
  };
  return {
    colors: {
      [ThemeColor.Light]: {
        foreground: "#222",
        background: "#EEE",
        ...colors[ThemeColor.Light]
      },
      [ThemeColor.Medium]: {
        foreground: "#EEE",
        background: "#888",
        ...colors[ThemeColor.Medium]
      },
      [ThemeColor.Dark]: {
        foreground: "#EEE",
        background: "#222",
        ...colors[ThemeColor.Dark]
      }
    }
  };
}

export const Themed = React.createContext<Theme>(createTheme());

export const Page = ({ theme, children }: Props) => (
  <Themed.Provider value={createTheme(theme)}>
    <div
      className={css`
        display: flex;
        flex-direction: column;
        height: 100%;
        width: 100%;
      `}
    >
      {children}
    </div>
  </Themed.Provider>
);
