import { filterByLanguage } from "./languageFilter";
let pokeFetchController = null;
let abortSignal = null;

//Defining utility functions
const fecthingPokemon = async (pokemon) => {
	//Fetching each pokemon's main info
	const specie = await fetch(pokemon.url, abortSignal).then(res => res.json());
	const variety = await fetch(specie.varieties[0].pokemon.url, abortSignal).then(res => res.json());
	//Fetching pokemon details (for translations purposes)
	const name = filterByLanguage([specie]);
	const abilities = filterByLanguage(await fetchingDetails(variety.abilities, "ability", 3));
	const types = filterByLanguage(await fetchingDetails(variety.types, "type", 2));
	const movesInfo = await fetchingDetails(variety.moves, "move", 3);
	const nThMoveType = filterByLanguage(await fetchingDetails(movesInfo, "type"));
	const moves = filterByLanguage(movesInfo).map((e, i) => {
		return { name: e, type: nThMoveType[i], power: movesInfo[i].power, accuracy: movesInfo[i].accuracy }
	});
	const img = Object.values(variety.sprites);
	
	return { abilities, moves, types, name, img, id: specie.id };
};
const fetchingDetails = async (array, detailName, limit) => {
	let [ details, i, len ] = [ [], 0, array.length ];
	if (limit && len > limit) len = limit;
	while (i < len) {
		await fetch(array[i][detailName].url, abortSignal)
			.then(res => res.json())
			.then(res => details.push(res));
		i++;
	};
	return details;
};

//Core functionality
export const extractPokeInfo = async (data) => {
	//Prevent overlaping with previous fetches
  if (pokeFetchController) pokeFetchController.abort();
	pokeFetchController = new AbortController();
	abortSignal = { signal: pokeFetchController.signal };
	
	//Iterate
	let [ info, i, len ] = [ [], 0, data.length ];
	while (i < len) { info.push( await fecthingPokemon(data[i]) ); i++ };
	return info;
};