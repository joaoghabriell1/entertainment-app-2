"use client";
import styled from "styled-components";

export const Wrapper = styled.li`
  &:hover {
    cursor: pointer;
  }
  list-style: none;
  margin-bottom: 1.6rem;
  @media (min-width: 900px) {
    margin-bottom: 2.4rem;
  }
`;

export const ThumbContainer = styled.div`
  height: 110px;
  overflow: hidden;
  border-radius: 0.8rem;
  img {
    min-height: 100%;
    width: 100%;
    object-fit: cover;
  }
  @media (min-width: 500px) {
    height: 140px;
  }
  @media (min-width: 900px) {
    height: 174px;
  }
`;

export const Info = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-block: 8px 4px;
  color: ${(props) => props.theme.colors["opaque-white"]};

  font-size: ${({ theme }) => theme.fs["fs-100"]};

  @media (min-width: 500px) {
    font-size: ${({ theme }) => theme.fs["fs-200"]};
  }
`;

export const Title = styled.h3`
  font-size: ${(props) => props.theme.fs["fs-300"]};
  font-weight: 500;
  @media (min-width: 500px) {
    font-size: 1.8rem;
  }
`;
