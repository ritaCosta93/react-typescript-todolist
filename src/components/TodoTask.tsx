import React from 'react'
import { TodoProps } from '../interfaces/Todo'



const TodoTask = ({selectedTask, completeTask}:TodoProps) => {
    return (
        <div className="task">
            <div className="content">
                <span>{selectedTask.taskName}</span>
                <span>{selectedTask.deadline}</span>
            </div>
            <button onClick={()=>completeTask(selectedTask.taskName)}>Delete</button>
        </div>
    )
}

export default TodoTask
