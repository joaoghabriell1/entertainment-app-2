"use client";
import styled from "styled-components";

export const Logo = styled.div``;

export const Header = styled.header`
  background: ${(props) => props.theme.colors["dark-blue-100"]};
  padding: 1.8rem;
  font-size: ${(props) => props.theme.fs["fs-300"]};
  padding-inline: 3.2rem;
  display: flex;
  align-items: center;

  @media (min-width: 500px) {
    margin: 2.4rem;
    border-radius: 1rem;
  }

  @media (min-width: 1100px) {
    position: fixed !important;
    top: 3.2rem;
    left: 3.2rem;
    bottom: 3.2rem;
    margin: 0;
    flex-direction: column;
    position: absolute;
  }
`;

export const Navbar = styled.nav`
  display: flex;
  justify-content: center;
  flex: 1;
  ul {
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    margin: 0;
    gap: 1rem;
  }
  li {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  @media (min-width: 1100px) {
    justify-content: center;
    ul,
    li {
      flex-direction: column;
    }
  }
`;
