import {} from "styled-components";
import theme from "./theme";

type Theme = typeof theme;

declare module "styled-components" {
  export interface DefaulTheme {
    colors: {
      "dark-blue-100": string;
      "dark-blue-200": string;
      "grayish-blue": string;
      white: string;
      "accent-red": string;
      "opaque-white": string;
    };
    fs: {
      "fs-100": string;
      "fs-200": string;
      "fs-300": string;
      "fs-400": string;
      "fs-500": string;
    };
  }
}
