"use client";
import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
*,
*::before,
*::after {
  box-sizing: border-box;
}

html{
    font-size: 62.5%;
    margin: 0;
    padding: 0;
}

body{
    text-rendering: optimizeSpeed;
    background: ${(props) => props.theme.colors["dark-blue-200"]};
}

button:hover{
    cursor: pointer;
    opacity: .9;
}

ul{
    padding: 0;
    margin: 0;
}

img,
picture {
  max-width: 100%;
  display: block;
}

input,
button,
textarea,
select {
  font: inherit;
}
`;
