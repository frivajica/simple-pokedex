import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import { extractPokeInfo } from "../utils/extractPokeInfo"

export const processData = createAsyncThunk("PROCESS_DATA", (data) => {
	return extractPokeInfo(data);
});

const dataReducer = createReducer([], {
		[processData.fulfilled]: (state, action) => action.payload,
});

export default dataReducer;