import React, { useState } from 'react';
import './App.css';

function Table() {

    const [approvals, setApprovals] = useState<number>(1);
    const [declines, setDeclines] = useState<number>(0);

    const [appNotes, setAppNotes] = useState<string>("");
    const [decNotes, setDecNotes] = useState<string>("");

    const handleApprovals = () => {
        setApprovals(approvals => approvals + 1);
    }

    const handleDeclines = () => {
        setDeclines(declines => declines + 1);
    }

    const handleAppNoteUpdates = (evt: React.ChangeEvent<HTMLInputElement>) => {
        setAppNotes(evt.target.value);
    }

    const handleDecNoteUpdates = (evt: React.ChangeEvent<HTMLInputElement>) => {
        setDecNotes(evt.target.value);
    }

    return (
        <table>
            <thead>
                <tr>
                    <th>Approved</th>
                    <th>Denied</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{approvals}</td>
                    <td>{declines}</td>
                </tr>
                <tr>
                    <td><input className='embeddedbtn' type='text' value={appNotes} onChange={handleAppNoteUpdates}/></td>
                    <td><input className='embeddedbtn' type='text' value={decNotes} onChange={handleDecNoteUpdates}/></td>
                </tr>
                <tr>
                    <td><input className='embeddedbtn' type='button' value='Approve' onClick={handleApprovals}/></td>
                    <td><input className='embeddedbtn' type='button' value='Decline' onClick={handleDeclines}/></td>
                </tr>
            </tbody>
        </table>
    )
}

export default Table;