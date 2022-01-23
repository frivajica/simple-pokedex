import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";
const listLimit = 12;

export const getSomePokemon = createAsyncThunk("GET_ALL_POKEMON", (data) => {
	if (data) {
		return fetch("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=2000")
			.then(res => res.json())
			.then(data => data.results)
			.then(results => {
				const names = results.map(e => e.name);
				return results.filter((e, i) => {
					return e.name.includes(data) && names.indexOf(e.name.split('-')[0]) === i
				})
			})
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