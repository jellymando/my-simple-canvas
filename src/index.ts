import Painter from "./Painter";

const $canvas = document.getElementById("canvas") as HTMLCanvasElement;
const painter = new Painter();
painter.setTarget($canvas);

export default Painter;
export { Painter };
