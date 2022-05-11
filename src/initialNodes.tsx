import TextUpdaterNode from "./TextUpdaterNode";
import Table from "./Table";
import { Node } from "react-flow-renderer";

export default [
    { id: '1', data: { label: 'Credit History Valid ?' }, position: { x: 100, y: 100 }} as Node,
    { id: '2', data: { label: 'Vantage Score < 300' }, position: { x: 100, y: 200 }},
    { id: '3', data: { label: 'Vantage Score < 600' }, position: { x: 100, y: 300 }},
    { id: '4', data: { label: 'Vantage Score < 600' }, position: { x: 100, y: 400 }},
    { id: '5', data: { label: <TextUpdaterNode label='Approved'/> }, position: { x: 300, y: 500 }},
    { id: '6', data: { label: <TextUpdaterNode label='Denied'/> }, position: { x: 500, y: 500 }} as Node,
    { id: '7', data: { label: <Table/> }, position: { x: 300, y: 600 }, style: {height: 150, width: 210}} as Node,
  ];