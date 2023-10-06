"use client";

import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  @media (min-width: 700px) {
    justify-content: flex-start;
    flex-direction: row;
  }
`;

export const PosterContainer = styled.div`
  margin-inline: auto;
  overflow: hidden;
  border-radius: 1rem;
  min-width: 250px;
  img {
    width: 100%;
    object-fit: cover;
  }
  @media (min-width: 700px) {
    margin-inline: unset;
    min-width: 300px;
    min-height: 540px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  @media (min-width: 900px) {
    min-width: 400px;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 700px) {
    max-width: 45rem;
    padding-left: 3.2rem;
  }
`;

export const TitleWrapper = styled.div`
  text-align: center;
  @media (min-width: 700px) {
    text-align: start;
  }
`;

export const MovieTitle = styled.h3`
  font-size: ${(props) => props.theme.fs["fs-500"]};
  font-weight: 400;
  font-size: 2.8rem;
`;

export const Tagline = styled.span`
  font-size: 1.6rem;
  color: ${(props) => props.theme.colors["opaque-white"]};
  padding-bottom: 1rem;
`;
export const StatsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  border-block: 0.1px solid hsla(0, 0%, 100%, 0.17);
  padding-block: 1.6rem;
  span {
    font-size: 1.6rem;
    display: grid;
  }
`;

export const Score = styled.div`
  text-align: center;
  padding-block: 1.6rem;
  h3 {
    font-size: 3.8rem;
    font-weight: 600;
  }
  @media (min-width: 700px) {
    text-align: start;
  }
`;

export const StatsTitle = styled.span`
  color: #d1d6e4;
  opacity: 0.8;
`;

export const Popularity = styled.span``;

export const Synopsis = styled.p`
  h3 {
    font-size: 2.3rem;
    font-weight: 400;
    margin-bottom: 0.5rem;
  }
  p {
    text-align: justify;
    font-size: 1.6rem;
    color: ${(props) => props.theme.colors["opaque-white"]};
  }
  margin-top: 1rem;
`;
