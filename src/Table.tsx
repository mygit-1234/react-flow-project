import React, { useState } from 'react';
import './App.css';

function Table() {

    const [appNotes, setAppNotes] = useState<string>("");
    const [decNotes, setDecNotes] = useState<string>("");

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
                    <th colSpan={3}>Credit card component</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td colSpan={3}><input style={{width: 295}} type='text' value={appNotes} placeholder="XXX XXX XXX XXX" onChange={handleAppNoteUpdates}/></td>
                </tr>
                <tr>
                    <td colSpan={2}><input type='text' value={decNotes} placeholder="Name on the card" onChange={handleDecNoteUpdates}/></td>
                    <td colSpan={1}><input type="text" placeholder="valid thru"></input></td>
                </tr>
            </tbody>
        </table>
    )
}

export default Table;