import React, { ReactElement, useState } from "react";
import { ItemWrapper, Round, Item } from "./styled";
import { Icon } from "./Icons";

type ControlItemProps = {
  icon?: string;
  title?: string;
  text?: string;
  active?: boolean;
  disable?: boolean;
  dropdown?: ReactElement;
  activeDropdown?: boolean;
  hidden?: boolean;
  palette?: string;
  color?: string;
  onSelectItem?: (item: string) => void;
  onClick?: () => void;
};

export const ControlItem = ({
  icon,
  title,
  text,
  active,
  disable,
  dropdown,
  activeDropdown,
  hidden,
  palette,
  color,
  onSelectItem,
  onClick = () => null,
}: ControlItemProps) => {
  const [openDropdown, setOpenDropdown] = useState(false);
  const toggleDropdown = () => setOpenDropdown(!openDropdown);
  const onCloseDropdown = () => setOpenDropdown(false);

  return !hidden ? (
    <ItemWrapper title={title || icon}>
      <Item
        color={color}
        active={active}
        disable={disable}
        onClick={() => {
          if (onSelectItem) {
            if (icon) onSelectItem(icon);
            if (color) onSelectItem("palette");
          }

          if (activeDropdown) {
            onClick();
            return;
          }

          if (dropdown) toggleDropdown();
          else onClick();
        }}
        role="button"
      >
        {icon && <Icon name={icon} />}
        {color && <Round color={color} />}
      </Item>
    </ItemWrapper>
  ) : null;
};
