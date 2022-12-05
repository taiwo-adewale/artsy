import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface StateType {
  isTrue: boolean;
}

const initialState: StateType = {
  isTrue: false,
};

const stateSlice = createSlice({
  name: "state",
  initialState,
  reducers: {
    setIsTrue: (state, action: PayloadAction<boolean>) => {
      state.isTrue = action.payload;
    },
  },
});

export const { setIsTrue } = stateSlice.actions;

export default stateSlice.reducer;
