type Mods = Record<string, boolean | string>;

export const classNames = (
	cls: string,
	mods: Mods,
	additional: string[]
): string => {
	return [
		cls,
		...additional,
		...Object.entries(mods).reduce((acc, [key, value]) => {
			if (Boolean(value)) {
				return acc.concat(key);
			}
			return acc;
		}, []),
	].join(' ');
};
