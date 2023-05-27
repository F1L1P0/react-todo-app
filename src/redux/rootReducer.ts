import { combineReducers } from '@reduxjs/toolkit'
import todoReducer from './todoSlice'

export const rootReducer = combineReducers({
    todo: todoReducer,
})

export type RootState = ReturnType<typeof rootReducer>
