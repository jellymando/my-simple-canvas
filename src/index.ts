import Painter from "./Painter";
import { ToolBar, ControlItem } from "./Toolbar";

const $canvas = document.getElementById("canvas") as HTMLCanvasElement;
const painter = new Painter();
painter.setTarget($canvas);

export default Painter;
export { ToolBar, ControlItem };
