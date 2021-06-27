import React, { useState } from "react";
import { Painter } from 'Painter';
import { paletteColor } from "../lib/color";
import { ControlItem } from "./ControlItem";
import { RangeItem } from "./RangeItem";
import { ColorItem } from "./ColorItem";
import { ControlBar, Separator } from "./styled";
import { Icon } from "./Icons";

type ToolbarProps = {
  painter: Painter;
  useThickness?: boolean;
  minTickness?: number;
  maxTickness?: number;
  useColor?: boolean;
  colors?: string | string[];
};

export const Toolbar = ({
  painter,
  useThickness = true,
  minTickness = 1,
  maxTickness = 5,
  useColor = true,
  colors,
}: ToolbarProps) => {
  const [selectedItem, setSelectedItem] = useState("");
  const handleSelectItem = (item: string) => {
    setSelectedItem(selectedItem !== item ? item : "");
  };

  return (
    <>
      <ControlBar>
        {useThickness && (
          <>
            <RangeItem painter={painter} minTickness={minTickness} maxTickness={maxTickness} />
            <Separator />
          </>
        )}
        {useColor && (
          <>
            <ColorItem painter={painter} colors={colors || paletteColor} />
            <Separator />
          </>
        )}
        <ControlItem
          active={selectedItem === "allClear"}
          onSelectItem={handleSelectItem}
        >
          <Icon name="allClear" />
        </ControlItem>
        <ControlItem
          active={selectedItem === "save"}
          onSelectItem={handleSelectItem}
        >
          <Icon name="save" />
        </ControlItem>
      </ControlBar>
    </>
  );
};
