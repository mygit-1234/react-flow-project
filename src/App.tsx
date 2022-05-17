import ReactFlow, { ReactFlowProvider, useNodesState, useEdgesState, addEdge, Connection } from 'react-flow-renderer';

import initialNodes from './initialNodes';
import initialEdges from './initialEdges';

const App = () => {
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
            style={{ maxHeight: "100%", overflow: "scroll" }}
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
