import {create} from 'zustand'

const useTodoStore = create((set) => ({
    todoList: [],
    add: (item) => set(state => {
        console.log(item)
        if(!state.todoList.includes(item)){
            return {todoList: [...state.todoList, item]}
        }
        // console.log(state.todoList)
        return {todoList: state.todoList}
    }),
    remove: (item) => set(state => state)
}))

export {useTodoStore};