export interface ITodo {
    id: number | string
    name: string
    desc: string
    time: string
}

export interface TodoState {
    todos: ITodo[]
}
