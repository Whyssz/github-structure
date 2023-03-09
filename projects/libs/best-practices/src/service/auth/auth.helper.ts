import Cookies from 'js-cookie';

export const saveToStorage = (data: IAuthResponse) => {
	saveTokenStorage(data);
	localStorage.setItem('user', JSON.stringify(data.user));
};

export const saveTokenStorage = (data: ITokens) => {
	Cookies.set('accessToken', data.accessToken);
	Cookies.set('refreshToken', data.refreshToken);
};

export const removeTokenStorage = () => {
	Cookies.remove('accessToken');
	Cookies.remove('refreshToken');
};


/* react-native
export const getAccessToken = async () => {
	const accessToken = await getItemAsync(EnumSecureStore.ACCESS_TOKEN);

	return accessToken || null;
};

export const saveTokensStorage = async (data: ITokens) => {
	await setItemAsync(EnumSecureStore.ACCESS_TOKEN, data.accessToken);
	await setItemAsync(EnumSecureStore.REFRESH_TOKEN, data.refreshToken);
};

export const deleteTokensStorage = async () => {
	await deleteItemAsync(EnumSecureStore.ACCESS_TOKEN);
	await deleteItemAsync(EnumSecureStore.REFRESH_TOKEN);
};

export const getUserFromStorage = async () => {
	try {
		return JSON.parse(
			(await AsyncStorage.getItem(EnumAsyncStorage.USER)) || '{}'
		);
	} catch (error) {
		return null;
	}
};

export const saveToStorage = async (data: IAuthResponse) => {
	await saveTokensStorage(data);

	try {
		await AsyncStorage.setItem(
			EnumAsyncStorage.USER,
			JSON.stringify(data.user)
		);
	} catch (error) {}
};
*/
