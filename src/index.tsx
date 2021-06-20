import React, { useRef, useEffect } from 'react';
import { Painter } from "./Painter";
import { ToolBar } from "./Toolbar";

type SimplePainterProps = {
    width?: number;
    height?: number;
}

export const SimpleCanvas = ({ width = 500, height = 600 }: SimplePainterProps) => {
    const painter = new Painter();
    const canvasRef = useRef(null);

    useEffect(() => {
        if (canvasRef.current) painter.setTarget(canvasRef.current);
      }, [canvasRef]);

    return (
        <>
            <ToolBar painter={painter} />
            <canvas id="my-simple-canvas" ref={canvasRef} width={width} height={height} style={{ border: "1px solid gray" }}></canvas>
        </>
    )
}
