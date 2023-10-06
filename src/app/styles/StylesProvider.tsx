"use client";
import { ThemeProvider as Theme_Provider } from "styled-components";
import StyledComponentsRegistry from "./registry";
import { GlobalStyles } from "./global-styles";
import theme from "./theme";

const StylesProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <StyledComponentsRegistry>
      <Theme_Provider theme={theme}>
        <GlobalStyles />
        {children}
      </Theme_Provider>
    </StyledComponentsRegistry>
  );
};

export default StylesProvider;
