"use client";
import styled from "styled-components";

export const Heading = styled.h3`
  font-size: ${(props) => props.theme.fs["fs-500"]};
  font-weight: 400;
  margin-bottom: 2.5rem;
`;

export const Ul = styled.ul`
  display: grid;
  column-gap: 1.5rem;
  grid-template-columns: repeat(auto-fill, minmax(164px, 1fr));

  @media (min-width: 500px) {
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  }

  @media (min-width: 900px) {
    column-gap: 4rem;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  }
`;
