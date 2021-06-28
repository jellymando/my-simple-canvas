import React, { ReactElement, useState } from "react";
import { ItemWrapper, Round, Item } from "./styled";

type ControlItemProps = {
  title?: string;
  active?: boolean;
  disable?: boolean;
  onClickItem?: () => void;
  onClick?: () => void;
  children?: any;
};

export const ControlItem = ({
  title,
  active,
  disable,
  onClickItem,
  onClick = () => null,
  children
}: ControlItemProps) => {
  return (
    <ItemWrapper title={title}>
      <Item
        active={active}
        disable={disable}
        onClick={() => {
          if (onClickItem) {
            return onClickItem();
          }
          onClick();
        }}
        role="button"
      >
        {children}
      </Item>
    </ItemWrapper>
  );
};
