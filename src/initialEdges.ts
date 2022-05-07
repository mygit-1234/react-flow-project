import {Edge, MarkerType} from 'react-flow-renderer';

export default [
    { id: 'e1-6', source: '1', target: '6', label: 'Yes NOI Issued', markerEnd: {type: MarkerType.Arrow}} as Edge,
    { id: 'e2-6', source: '2', target: '6', label: 'Yes AAN Issued', markerEnd: {type: MarkerType.Arrow}} as Edge,
    { id: 'e3-6', source: '3', target: '6', label: 'Yes AAN Issued', markerEnd: {type: MarkerType.Arrow}} as Edge,
    { id: 'e4-6', source: '4', target: '6', label: 'Yes AAN Issued', markerEnd: {type: MarkerType.Arrow}} as Edge,
    { id: 'e1-2', source: '1', target: '2', label: 'NO', markerEnd: {type: MarkerType.Arrow}} as Edge,
    { id: 'e2-3', source: '2', target: '3', label: 'NO', markerEnd: {type: MarkerType.Arrow}} as Edge,
    { id: 'e3-4', source: '3', target: '4', label: 'NO', markerEnd: {type: MarkerType.Arrow}} as Edge,
    { id: 'e4-5', source: '4', target: '5', label: 'NO', markerEnd: {type: MarkerType.Arrow}} as Edge,
];