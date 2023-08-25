export const pascalToTitleCase = (pascal: string) => {
	return pascal.replace(/([a-z0-9])([A-Z])/g, '$1 $2');
};

export const capitalize = (str: string) => str[0].toUpperCase() + str.slice(1);
