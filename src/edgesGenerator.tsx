import { Edge, MarkerType } from "react-flow-renderer";

let edges:Edge[] = [];

for (let i = 0; i < 99; i++){
    edges.push({ id: `e${i}-${i+1}`, source: `${i}`, target: `${i+1}`, markerEnd: {type: MarkerType.Arrow}} as Edge)
}

export default edges;