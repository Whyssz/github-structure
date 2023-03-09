import { IUser } from '@/shared/types/user.types';

export interface IUserState {
	email: string;
	isAdmin: boolean;
}

export interface ITokens {
	accessToken: string;
	refreshToken: string;
}

export interface IInitialState {
	user: IUserState | null;
	isLoading: boolean;
}

export interface IEmailPassword {
	email: string;
	password: string;
}

export interface IAuthResponse extends ITokens {
	user: IUser & {
		isAdmin: boolean;
	};
}

/*
	export interface PizzaState {
		status: PizzaStatus; // PizzaStatus.FETCH_IDLE
		items: Pizza[];
	};
	
	export enum PizzaStatus {
		FETCH_IDLE = 'idle',
		FETCH_LOADING = 'loading',
		FETCH_ERROR = 'error',
	}

	export interface Pizza {
		id: string;
		title: string;
		price: number;
		imageUrl: string;
		sizes: number[];
		types: number[];
		rating: number;
		change?: boolean;
	};
*/