import { errorCatch } from '../service/api/error.api';
import { toastr } from 'react-redux-toastr';

export const toastrError = (error: any, title?: string) => {
	const message = errorCatch(error);
	toastr.error(title || 'Error request', message);
	throw message;
};
