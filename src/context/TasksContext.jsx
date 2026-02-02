import { createContext } from "react";
import useTasks from "../hooks/useTasks";
import useInCompleteTaskScroll from "../hooks/useInCompleteTaskScroll";

export const TasksContext = createContext({})

export const TasksProvider = (props) => {
    const {children} = props

    const {
        tasks,
        filteredTasks, 
        deleteTask, 
        deleteAllTasks,
        toggleTaskComplete,
        newTaskTitle,
        setNewTaskTitle,
        searchQuery,
        setSearchQuery,
        newTaskInputRef,
        addTask,
    } = useTasks()

    const {
        firstIncompleteTaskId,
        firstIncompleteTaskRef,
    } = useInCompleteTaskScroll(tasks)
    
    return(
    <TasksContext.Provider
      value={{
        tasks,
        filteredTasks, 
        firstIncompleteTaskId,
        firstIncompleteTaskRef,
        deleteTask, 
        deleteAllTasks,
        toggleTaskComplete,
        newTaskTitle,
        setNewTaskTitle,
        searchQuery,
        setSearchQuery,
        newTaskInputRef,
        addTask,
      }}
      >
       {children}
        </TasksContext.Provider>
    )

}