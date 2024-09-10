import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Taxa } from "../../common/types";
interface ITaxaState {
  taxa: Taxa[];
}
const initialState: ITaxaState = {
  taxa: [],
};
const taxaSlice = createSlice({
  name: "taxa",
  initialState,
  reducers: {
    setTaxa(state, action: PayloadAction<Taxa[]>) {
      state.taxa = action.payload;
    },
  },
});

// export const fetchTaxa = createAsyncThunk("taxa/fetchTaxas", async () => {
//   const response = await fetchTaxa();
//   return response;
// });
export default taxaSlice.reducer;
export const { setTaxa } = taxaSlice.actions;
export const selectTaxa = (state: ITaxaState) => state.taxa;
export const findTaxaById = (state: ITaxaState, id: number) =>
  state.taxa.find((t) => t.acceptedNo === id);
