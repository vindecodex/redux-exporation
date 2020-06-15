import axios from 'axios';
import * as actions from '../api';

const api = ({ dispatch }) => next => async action => {
	if (action.type !== actions.apiRequestStarted.type) return next(action);

	next(action);

	const { url, onSuccess, onError } = action.payload;

	try {
		const resp = await axios.request({
			baseURL: 'http://localhost:1234/api',
			url
		});
		dispatch(actions.apiRequestSuccess({payload: resp.data}));
	} catch(error) {
		dispatch(actions.apiRequestFailed({payload: error.message}));
	}
}

export default api;
