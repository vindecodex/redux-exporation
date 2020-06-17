import axios from 'axios';
import * as actions from '../api';

const api = ({ dispatch }) => next => async action => {
	if (action.type !== actions.apiRequestStarted.type) return next(action);

	const { url, onRequest, onSuccess, onError } = action.payload;

	if(onRequest) dispatch({type: onRequest});

	const { url, onSuccess, onError, data, method } = action.payload;
	next(action);


	try {
		const resp = await axios.request({
			baseURL: 'http://localhost:1234/api',
			url,
			data,
			method
		});
		dispatch(actions.apiRequestSuccess(action.payload));
		// serializing type of action
		if (onSuccess) dispatch({type: onSuccess, payload: resp.data});
	} catch(error) {
		// serializing type of action
		dispatch(actions.apiRequestFailed(error.message));
		if (onError) dispatch({type: onError, payload: error.message});
	}
}

export default api;
