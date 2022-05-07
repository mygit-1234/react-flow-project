import React, { useState, useCallback } from 'react';
import { Handle, Position } from 'react-flow-renderer';
import './App.css';

function TextUpdaterNode(props: {label: string}) {
  const onChange = useCallback((evt: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(evt.target.value);
  }, []);

  const [inputValue, setInputValue] = useState(props.label);

  return (
    <div className="text-updater-node">
      <Handle type="target" position={Position.Top} />
      <div>
        <input id="text" name="text" onChange={onChange} value={inputValue}/>
      </div>
      <Handle type="source" position={Position.Bottom} id="b" />
    </div>
  );
}

export default TextUpdaterNode;