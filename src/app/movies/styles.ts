"use client";

import styled from "styled-components";

export const Wrapper = styled.section`
  width: min(1240px, 100% - 3.2rem);
  margin-inline: auto;

  @media (min-width: 1100px) {
    padding-left: 3.2rem;
    margin-left: 17.2rem;
  }
`;

export const LoadingStateWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70vh;
`;
