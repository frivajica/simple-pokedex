export const extractPokeInfo = async (data) => {
	const info = [];
	let fun = async (pokemon) => {
		let a = await fetch(pokemon?.url).then(res => res.json());
		let b = await fetch(a.species.url).then(res => res.json());
		info.push({...a, ...b})
	};
	let i = 0;
	let len = data.length;
	while (i < len) {
		await fun(data[i]);
		i++;
	};
	return info
};