import { configureStore } from '@reduxjs/toolkit'
// eslint-disable-next-line import/named
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

import { rootReducer } from './rootReducer'

export const store = configureStore({
    reducer: rootReducer,
    devTools: true,
})

export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
export type RootState = ReturnType<typeof store.getState>
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
