import { Node } from "react-flow-renderer";

let nodes:Node[] = [];

for (let i = 0; i < 100; i++){
    let xPosition = (i%9) * 100;
    let yPosition = (i/9) * 100;
    nodes.push({ id: `${i+1}`, data: { label: `Node ${i + 1}` }, position: { x: xPosition, y: yPosition }} as Node)
}

export default nodes;