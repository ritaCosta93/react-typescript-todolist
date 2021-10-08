import { ITask } from "./Task";

export interface TodoProps {
    selectedTask: ITask;
    completeTask(taskNameToDelete:string): void;
}