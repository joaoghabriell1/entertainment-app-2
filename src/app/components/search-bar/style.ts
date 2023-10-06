"use client";

import styled from "styled-components";

export const Wrapper = styled.div`
  width: min(1100px, 100% - 3.2rem);
  margin-block: 3.2rem;
  form {
    display: flex;
    width: 100%;
  }
  button {
    background: none;
    border: 0;
  }
  input {
    width: 100%;
    padding-left: 1.6rem;
    font-size: ${(props) => props.theme.fs["fs-500"]};
    background: none;
    border: 0;
    color: #ffffff;
    outline: none;
    font-weight: 300;
  }
`;
