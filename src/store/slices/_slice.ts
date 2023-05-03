import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "..";

interface sliceInitialState {
  datas: Array<any> | undefined;
  isLoading: boolean;
  data: any;
}

const initialState: sliceInitialState = {
  datas: [],
  isLoading: false,
  data: {},
};

const Slice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  // extraReducers: (builder) => {
  //   // get all DATA
  //   builder.addCase(getAllNAME.pending, (state, action) => {
  //     state.isLoading = true;
  //   });

  //   builder.addCase(getAllNAME.fulfilled, (state, { payload }) => {
  //     state.isLoading = false;
  //     state.datas = payload;
  //   });
  //   builder.addCase(getAllNAME.rejected, (state, action) => {
  //     state.isLoading = false;
  //   });

  //   // get DATA by id
  //   builder.addCase(getNAMEById.pending, (state, action) => {
  //     state.isLoading = true;
  //   });

  //   builder.addCase(getNAMEById.fulfilled, (state, { payload }) => {
  //     state.isLoading = false;
  //     state.data = payload;
  //   });
  //   builder.addCase(getNAMEById.rejected, (state, action) => {
  //     state.isLoading = false;
  //   });
  //   // delete DATA by id
  //   builder.addCase(deleteNAMEById.pending, (state, action) => {
  //     state.isLoading = true;
  //   });
  //   builder.addCase(deleteNAMEById.fulfilled, (state, { payload }) => {
  //     state.isLoading = false;
  //     state.datas = payload;
  //   });
  //   builder.addCase(deleteNAMEById.rejected, (state, action) => {
  //     state.isLoading = false;
  //   });
  //   // create DATA
  //   builder.addCase(createNAME.pending, (state, action) => {
  //     state.isLoading = true;
  //   });
  //   builder.addCase(createNAME.fulfilled, (state, { payload }) => {
  //     state.isLoading = false;
  //     state.data = payload;
  //   });
  //   builder.addCase(createNAME.rejected, (state, action) => {
  //     state.isLoading = false;
  //   });

  //   // edit DATA
  //   builder.addCase(editNAME.pending, (state, action) => {
  //     state.isLoading = true;
  //   });
  //   builder.addCase(editNAME.fulfilled, (state, { payload }) => {
  //     state.isLoading = false;
  //   });
  //   builder.addCase(editNAME.rejected, (state, action) => {
  //     state.isLoading = false;
  //   });
  // },
});

export default Slice.reducer;
