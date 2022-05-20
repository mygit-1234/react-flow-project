import ReactFlow, { ReactFlowProvider, useNodesState, useEdgesState, addEdge, Connection, MiniMap } from 'react-flow-renderer';
import './App.css'

import initialNodes from './nodesGenerator';
import initialEdges from './edgesGenerator';

const MultipleNodes = () => {
    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
    const onConnect = (params: Connection) => setEdges((eds) => addEdge(params, eds));

    return (
      <div className='parent-container'>
        <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            defaultZoom={1.5}
            zoomOnScroll={false}
            zoomOnDoubleClick={false}
            style={{ maxHeight: "100%", maxWidth: "100%", overflow: "scroll" }}
            attributionPosition="bottom-left"
            onConnect={onConnect}
        >
            <MiniMap/>
        </ReactFlow>
      </div>  
    );
};

export default function () {
    return (
        <ReactFlowProvider>
            <MultipleNodes />
        </ReactFlowProvider>
    );
}
