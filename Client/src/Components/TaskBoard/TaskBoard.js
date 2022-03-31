import React from 'react';
import './TaskBoard.scss';
import addOne from '../../assets/rename.png'
import goBack from '../../assets/goBackArrow.png'
import { EditText } from 'react-edit-text'
import 'react-edit-text/dist/index.css'

export default function TaskBoard() {
    return (
        <div className = 'taskboard'>
            <h1 className = 'taskboard__title'>
                <strong>Task Board —</strong> Project B
                {/* change this dynamically */}
            </h1>
            <div className = 'taskboard__content-wrapper'>
                <div className = 'taskboard__task-list-border'>
                    <main className = 'taskboard__task-list'>
                        <div className = 'taskboard__task-line'>
                            <p className = 'taskboard__task-name'><strong>Task A</strong></p>
                            <EditText className = 'taskboard__task-status' placeholder = 'status'/>
                        </div>
                        <div className = 'taskboard__task-line'>
                            <p className = 'taskboard__task-name'><strong>Task B</strong></p>
                            <EditText className = 'taskboard__task-status' placeholder = 'status'/>
                        </div>
                        <div className = 'taskboard__task-line'>
                            <p className = 'taskboard__task-name'><strong>Task C</strong></p>
                            <EditText className = 'taskboard__task-status' placeholder = 'status'/>
                        </div>
                        <div className = 'taskboard__task-line'>
                            <p className = 'taskboard__task-name'><strong>Task D</strong></p>
                            <EditText className = 'taskboard__task-status' placeholder = 'status'/>
                        </div>
                        <div className = 'taskboard__task-line'>
                            <p className = 'taskboard__task-name'><strong>Task E</strong></p>
                            <EditText className = 'taskboard__task-status' placeholder = 'status'/>
                        </div>
                        <div className = 'taskboard__task-line'>
                            <p className = 'taskboard__task-name'><strong>Task E</strong></p>
                            <EditText className = 'taskboard__task-status' placeholder = 'status'/>
                        </div>
                        <div className = 'taskboard__task-line'>
                            <p className = 'taskboard__task-name'><strong>Task E</strong></p>
                            <EditText className = 'taskboard__task-status' placeholder = 'status'/>
                        </div>
                        <div className = 'taskboard__task-line'>
                            <p className = 'taskboard__task-name'><strong>Task E</strong></p>
                            <EditText className = 'taskboard__task-status' placeholder = 'status'/>
                        </div>
                        <div className = 'taskboard__task-line'>
                            <p className = 'taskboard__task-name'><strong>Task E</strong></p>
                            <EditText className = 'taskboard__task-status' placeholder = 'status'/>
                        </div>
                    </main>
                </div>
                <img src = {addOne} className = 'taskboard__add' alt = 'add a task' />
            </div>
            <img src = {goBack} className = 'taskboard__go-back' alt = 'go back to project dashboard' />
        </div>
    )
}