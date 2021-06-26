import React, { useRef, useState, useEffect } from 'react';
import { Painter } from "./Painter";
import { Toolbar } from "./Toolbar";

type SimpleCanvasProps = {
    width?: number;
    height?: number;
}

type SimpleCanvasToolbarProps = {
    painter: Painter;
    useThickness?: boolean;
    minTickness?: number;
    maxTickness?: number;
    useColor?: boolean;
    colors?: string | string[];
  };

const painter = new Painter();
  
export const SimpleCanvas = ({ width = 500, height = 600 }: SimpleCanvasProps) => {
    const canvasRef = useRef(null);

    useEffect(() => {
        if (canvasRef.current) painter.setTarget(canvasRef.current);
      }, [canvasRef]);

    return (
      <canvas id="my-simple-canvas" ref={canvasRef} width={width} height={height} style={{ border: "1px solid gray" }}></canvas>
    )
}

export const SimpleToolbar = (props: SimpleCanvasToolbarProps) => {
    const [show, setShow] = useState(false);

    useEffect(()=>{
      SimpleCanvas && setShow(true);
    }, [SimpleCanvas]);

    return (
      show && <Toolbar painter={painter} {...props} />
    )
  }