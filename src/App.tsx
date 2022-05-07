import ReactFlow, { ReactFlowProvider, useNodesState, useEdgesState, addEdge, Connection } from 'react-flow-renderer';

import initialNodes from './initialNodes';
import initialEdges from './initialEdges';

const App = () => {
    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
    const onConnect = (params: Connection) => setEdges((eds) => addEdge(params, eds));

    return (
      <div style={{height:1000, width: 1000}}>
        <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            defaultZoom={1.5}
            minZoom={0.2}
            maxZoom={4}
            attributionPosition="bottom-left"
            onConnect={onConnect}
        />
      </div>  
    );
};

export default function () {
    return (
        <ReactFlowProvider>
            <App />
        </ReactFlowProvider>
    );
}
