import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type InitialValue = {
  state: string;
};

const initialState: InitialValue = { state: 'Egor' };

const ExampleSlice = createSlice({
  name: 'example',
  initialState: initialState,
  reducers: {
    func: (state, action: PayloadAction<string>) => {
      state.state = action.payload;
    },
  },
});

export const ExampleSliceReducer = ExampleSlice.reducer;
export const { func } = ExampleSlice.actions;
