import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../../store";

const getAllNAME = createAsyncThunk(
  "getAllNAME",
  async (params: { perPage: number; page: number }, { rejectWithValue }) => {
    try {
      // console.log('params', params);

      const result = await axios.get(
        `http://localhost:8080/*NAME*?perPage=${params.perPage}&page=${params.page}`
      );
      return result.data;
    } catch (e) {
      rejectWithValue(e);
    }
  }
);

const getNAMEById = createAsyncThunk(
  "get NAME by id",
  async (params: { id: string | undefined }, { rejectWithValue }) => {
    try {
      const result = await axios.get(
        `http://localhost:8080/*NAME*/${params.id}`
      );
      return result.data;
    } catch (e) {
      rejectWithValue(e);
    }
  }
);

const deleteNAMEById = createAsyncThunk(
  "delete NAME by id",
  async (params: { id: string }, { rejectWithValue }) => {
    try {
      const result = await axios.delete(
        `http://localhost:8080/*NAME*/${params.id}`
      );
      return result.data;
    } catch (e) {
      rejectWithValue(e);
    }
  }
);

const createNAME = createAsyncThunk(
  "create NAME",
  async (params: any, { rejectWithValue }) => {
    try {
      const result = await axios.post(`http://localhost:8080/*NAME*`, params);
      return result.data;
    } catch (e) {
      rejectWithValue(e);
    }
  }
);

const editNAME = createAsyncThunk(
  "edit NAME",
  async (params: any, { rejectWithValue }) => {
    try {
      const result = await axios.patch(
        `http://localhost:8080/*NAME*/${params.id}`,
        params
      );
      return result.data;
    } catch (e) {
      rejectWithValue(e);
    }
  }
);

export const selectNAME = (state: RootState) => state.NAME;

export { createNAME, deleteNAMEById, getAllNAME, editNAME, getNAMEById };
