import React, { ChangeEvent, useState } from 'react'
import { ITask } from '../interfaces/Task'
import TodoTask from './TodoTask'

const TodoList = () => {
    const [todoList,setTodoList] = useState<ITask[]>([]);
    const [deadline,setDeadline] = useState<number>(0);
    const [task,setTask] = useState<string>("");

    const handleChange = (event:ChangeEvent<HTMLInputElement>):void => {
        event.preventDefault();
        if(event.target.name === 'task'){
          setTask(event.target.value);
        }else
        setDeadline(Number(event.target.value));
      }

    const completeTask = (taskNameToDelete:string): void =>{
        setTodoList(todoList.filter((task)=>{
          return task.taskName !== taskNameToDelete;
        }))
      }

      const addTask = ():void =>{
        const newTask = {taskName:task, deadline:deadline}
        setTodoList([...todoList, newTask]);
        setTask("");
        setDeadline(0);
      }

    return (
        <div >
          <input type="text" placeholder="Task..." name="task" value={task} onChange={handleChange}/>
          <input type="number" placeholder="Deadline (in Days)" name="deadline" value={deadline} onChange={handleChange}/>
          <button onClick={addTask}>Add Task</button>
           
            {todoList.map((task:ITask,key:number)=>{
              return <TodoTask key={key} selectedTask={task} completeTask={completeTask} />
            })}
          
        </div>
    )
}

export default TodoList
