let pokeFetchController = null;
let abortSignal = null;

//Defining utility functions
const fecthingPokemon = async (pokemon) => {
	//Fetching each pokemon's main info
	const specie = await fetch(pokemon.url, abortSignal).then(res => res.json());
	const variety = await fetch(specie.varieties[0].pokemon.url, abortSignal).then(res => res.json());
	//Fetching pokemon details (for translations purposes)
	const abilities = await fetchingDetails(variety.abilities, "ability", 3);
	const moves = await fetchingDetails(variety.moves, "move", 3);
	const types = await fetchingDetails(variety.types, "type");
	return { ...specie, ...variety, abilities: [...abilities], moves: [...moves], types: [...types] };
};
const fetchingDetails = async (array, detailName, limit) => {
	let [ details, i, len ] = [ [], 0, array.length ];
	if (limit && len > limit) len = limit;
	while (i < len) {
		await fetch(array[i][detailName].url, abortSignal)
			.then(res => details.push(res.json()));
		i++;
	};
	return details;
};

//Core functionality
export const extractPokeInfo = async (data) => {
  if (pokeFetchController) pokeFetchController.abort();
	pokeFetchController = new AbortController();
	abortSignal = { signal: pokeFetchController.signal };
	let [ info, i, len ] = [ [], 0, data.length ];
	while (i < len) { info.push( await fecthingPokemon(data[i]) ); i++ };
	return info;
};