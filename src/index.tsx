import React, { useRef, useState, useEffect } from "react";
import { EventEmitter } from "events";
import { Painter } from "./Painter";
import { Toolbar } from "./Toolbar";

type SimpleCanvasProps = {
  width?: number;
  height?: number;
  onDraw?: () => void;
};

type SimpleCanvasToolbarProps = {
  useThickness?: boolean;
  minTickness?: number;
  maxTickness?: number;
  useColor?: boolean;
  colors?: string | string[];
};

const _painter = new Painter();
const _eventEmitter = new EventEmitter();

export const SimpleCanvas = ({
  width = 500,
  height = 600,
  onDraw = () => {}
}: SimpleCanvasProps) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (canvasRef.current) {
      _painter.setTarget({ target: canvasRef.current, onDraw });
      _eventEmitter.emit("setTarget");
    }
  }, [canvasRef]);

  return (
    <canvas
      id="my-simple-canvas"
      ref={canvasRef}
      width={width}
      height={height}
      style={{ border: "1px solid gray" }}
    ></canvas>
  );
};

export const SimpleToolbar = (props: SimpleCanvasToolbarProps) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    _eventEmitter.once("setTarget", () => setShow(true));

    return () => {
      _eventEmitter.off("setTarget", () => setShow(true));
    };
  }, []);

  return show && <Toolbar painter={_painter} {...props} />;
};
