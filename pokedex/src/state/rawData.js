import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";
const listLimit = 12;

export const getSomePokemon = createAsyncThunk("GET_ALL_POKEMON", (data) => {
	if (data) {
		return fetch("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=2000")
			.then(res => res.json())
			.then(data => data.results)
			.then(results => results.filter(e => e.name.includes(data)))
			.then(coincidences => coincidences.splice(0, listLimit));
	} else {
		return fetch(`https://pokeapi.co/api/v2/pokemon/?offset=0&limit=${listLimit}`)
			.then(res => res.json())
			.then(data => data.results)
	};
});

export const getOnePokemon = createAsyncThunk("GET_ONE_POKEMON", (id) => {
	return fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
		.then(res => res.json())
		.then(data => data.results)
});

const rawDataReducer = createReducer([], {
    [getSomePokemon.fulfilled]: (state, action) => action.payload,
    [getOnePokemon.fulfilled]: (state, action) => action.payload,
});

export default rawDataReducer;