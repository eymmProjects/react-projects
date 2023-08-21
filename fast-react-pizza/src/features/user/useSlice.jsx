import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  username: '',
};

const useSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateName(state, action) {
      state.username = action.payload;
    },
  },
});

export const { updateName } = useSlice.actions;

export default useSlice.reducer;
