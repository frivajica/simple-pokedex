const language = "es";
const filterSingleItem = (attribute) => {
	return attribute.names.find(e => e.language.name === language);
}
export const filterByLanguage = (items) => {
	let [ list, i, len ] = [ [], 0, items.length ];
	while (i < len) {
		list.push(filterSingleItem(items[i]).name);
		i++;
	};
	return list;
};