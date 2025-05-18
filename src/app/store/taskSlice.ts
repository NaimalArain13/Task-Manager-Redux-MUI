import {createSlice, nanoid, PayloadAction} from "@reduxjs/toolkit";

export interface Task{
    id:string,
    task:string,
    completed:boolean
}
export const taskSlice = createSlice({
    name:"Task",
    initialState:[{id:"0", task:"Coding at Night", completed:false}] as Task[],
    reducers:{
        addTask:(state, action:PayloadAction<string>)=>{
            state.push({id:nanoid(), task:action.payload,completed:false})
        },
        toggleTask:(state, action:PayloadAction<string>)=>{
            const task=state.find(t=>t.id==action.payload)
            if(task){
                task.completed=!task.completed
            }
        },
        deleteTask:(state, action:PayloadAction<string>)=>{
            return state.filter(t=>t.id!==action.payload)
        }
    }
})

export const {addTask, toggleTask, deleteTask} = taskSlice.actions

export default taskSlice.reducer