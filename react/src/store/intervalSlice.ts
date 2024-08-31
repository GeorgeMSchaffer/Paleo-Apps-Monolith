import {Interval} from '../common/types.ts'
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
export const intervalSlice = createSlice({
   name: 'interval',
   initialState: {
       intervals : [] as Interval[]
   },
   reducers:{
         addInterval: (state, action: PayloadAction<any>) => {
              // @ts-ignore
             state.intervals.push(action.payload);
         },
         removeInterval: (state, action: PayloadAction<number>) => {
              state.intervals = state.intervals.filter((interval) => interval.id !== action.payload);
         },
         // updateInterval: ({intervals:Interval, action: PayloadAction<any>) => {
         //      const index = intervals.findIndex((interval) => interval.id === action.payload.id);
         //      if(index !== -1){
         //        intervals[index] = action.payload;
         //      }
         // }
   }

});
export const {addInterval, removeInterval} = intervalSlice.actions;
export default intervalSlice.reducer;