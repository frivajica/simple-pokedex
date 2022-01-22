import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";

export const catchEmAll = createAsyncThunk("GET_ALL_POKEMON", () => {
	return fetch("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=2000")
		.then(res => res.json())
		.then(data => data.results);
});

const allPokemonReducer = createReducer([], {
    [catchEmAll.fulfilled]: (state, action) => action.payload,
});

export default allPokemonReducer;