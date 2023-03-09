import { API_URL, getAuthUrl } from '@/config/api.config';
import { EnumSecureStore, IAuthResponse } from '@/shared/types/auth.interface';
import axios from 'axios';
import { getItemAsync } from 'expo-secure-store';
import { saveToStorage } from '../auth/auth.helper';

export const getNewTokens = async () => {
	try {
		const refreshToken = await getItemAsync(EnumSecureStore.REFRESH_TOKEN);
		const response = await axios.post<
			string,
			{
				data: IAuthResponse;
			}
		>(
			API_URL + getAuthUrl('/login/access-token'),
			{ refreshToken },
			{
				headers: {
					'Content-Type': 'application/json',
				},
			}
		);

		if (response.data.accessToken) {
			await saveToStorage(response.data);
		}

		return response;
	} catch (error) {}
};

/* api / auth helper

import Cookies from 'js-cookie';

import { IAuthResponse, ITokens } from '@/store/user/user.interface';

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


*/
