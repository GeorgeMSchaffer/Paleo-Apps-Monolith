import { configureStore } from '@reduxjs/toolkit'
import  intervalSliceReducer  from './intervalSlice'
export default configureStore({
    reducer: {intervalSliceReducer},
})