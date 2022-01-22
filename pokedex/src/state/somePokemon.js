import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";

export const getOnePokemon = createAsyncThunk("GET_ONE_POKEMON", (data) => {
	return data;
});

export const searchPokemon = createAsyncThunk("SEARCH_POKEMON", (data) => {
	const queryString =
		data
			? "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=2000"
			: "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=8"
	return fetch(queryString)
		.then(res => res.json())
		.then(data => data.results)
		.then(results => results.filter(e => e.name.includes(data)));
});

const somePokemonReducer = createReducer([], {
		[getOnePokemon.fulfilled]: (state, action) => action.payload,
		[searchPokemon.fulfilled]: (state, action) => action.payload,
});

export default somePokemonReducer;