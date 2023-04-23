import { createSlice } from "@reduxjs/toolkit";

export const apidataSlice = createSlice({
  name: "post",
  initialState: {
    isLoading: true,
    post: [],
    error: "",
  },
  reducers: {
    setPostSuccess: (state, payload) => {
      state.post = payload.payload;
      state.isLoading = false;
      state.error = "";
    },
    setPostFailure: (state, payload) => {
      (state.post = []),
        (state.isLoading = false),
        (state.error = "something went wrong!");
    },
  },
});

export const { setPostSuccess, setPostFailure } = apidataSlice.actions;
export default apidataSlice.reducer;
