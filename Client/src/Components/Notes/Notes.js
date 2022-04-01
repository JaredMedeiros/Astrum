import './Notes.scss'
import {EditTextarea} from 'react-edit-text';
import 'react-edit-text/dist/index.css';

export default function Notes() {
    return (
        <div className = 'notes'>
            <h2 className = 'notes__title'>Notes:</h2>
            <EditTextarea className = 'notes__text-area' placeholder = 'add session notes'/>
        </div>    
    )
}