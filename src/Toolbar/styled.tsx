import styled, { css } from "styled-components";

type ItemProps = {
  active?: boolean;
  disable?: boolean;
};

type RoundProps = {
  active: boolean;
  color: string;
};

export const ControlBar = styled.div`
  position: fixed;
  top: 0;
  left: 50%;
  height: 50px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  border-radius: 6px;
  box-shadow: 0 4px 6px 0 rgba(0, 0, 0, 0.2);
  border: solid 1px rgba(0, 0, 0, 0.2);
  background-color: rgba(34, 34, 34, 0.7);
  transform: translateX(-50%);
  box-sizing: border-box;
`;

export const ItemWrapper = styled.div`
  position: relative;
`;

export const Item = styled.div<ItemProps>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  border-radius: 4px;
  box-sizing: border-box;
  cursor: pointer;

  &:hover {
    border: solid 1px rgba(255, 255, 255, 0.2);
    background-color: rgba(0, 0, 0, 0.2);
  }

  &:active {
    border: solid 1px rgba(255, 255, 255, 0.3);
    background-color: rgba(0, 0, 0, 0.6);
  }

  ${({ active }) =>
    active &&
    css`
      border: solid 1px rgba(255, 255, 255, 0.3);
      background-color: rgba(0, 0, 0, 0.6);

      &:hover {
        border: solid 1px rgba(255, 255, 255, 0.3);
        background-color: rgba(0, 0, 0, 0.6);
      }
    `}
`;

export const Range = styled.input`
  width: 100px;
  height: 20px;
`;

export const Round = styled.span<RoundProps>`
  width: 20px;
  height: 20px;
  border: solid 1px rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  margin-right: 6px;

  &:last-child {
    margin-right: 0;
  }

  ${({ active }) =>
    active &&
    css`
      border: 2px solid #f9f9f9;
    `}

  ${({ color }) =>
    color &&
    css`
      background: ${color};
    `}
`;

export const Separator = styled.div`
  width: 1px;
  height: 50%;
  background-color: rgba(255, 255, 255, 0.2);
  margin: 0 10px;
`;
