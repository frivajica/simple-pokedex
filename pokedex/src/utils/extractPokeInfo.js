export const extractPokeInfo = async (array) => {
	const info = [];
	await array.forEach(async (pokemon) => {
		const a = await fetch(pokemon?.url).then(res => res.json());
		const b = await fetch(a.species.url).then(res => res.json());
		info.push({...a, ...b});
	});
	return info
};