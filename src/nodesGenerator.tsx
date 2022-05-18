import { Node } from "react-flow-renderer";

let nodes:Node[] = [];

for (let i = 0; i < 100; i++){
    let xPosition = (i%9) * 100;
    let yPosition = (i/9) * 100;
    let backgroundColor = (i%2 === 0) ? '#4169e1' : '#00FF00';
    nodes.push({ id: `${i+1}`, 
                data: { label: `Node ${i + 1}` }, 
                position: { x: xPosition, y: yPosition },
                style: {backgroundColor: backgroundColor} } as Node)
}

export default nodes;