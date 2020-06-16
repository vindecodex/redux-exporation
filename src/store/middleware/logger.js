const logger = param => store => next => action => {
	// console.log('store', store);
	// console.log('next', next);
	// console.log('action', action);
	// console.log('param', param);
	console.log(action.payload);
	next(action);
}

export default logger;
