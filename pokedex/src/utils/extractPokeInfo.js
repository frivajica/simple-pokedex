export const extractPokeInfo = async (data) => {
	let [ info, i, len ] = [[], 0, data.length];
	const fun = async (pokemon) => {
		const a = await fetch(pokemon?.url).then(res => res.json());
		const b = await fetch(a.species.url).then(res => res.json());
		info.push({...a, ...b})
	};
	while (i < len) {
		await fun(data[i]);
		i++;
	};
	return info
};