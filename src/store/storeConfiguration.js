import { createStore } from 'redux';
import reducer from './reducer';
import logger from './middleware/logger';
import api from './middleware/api';
// import myThunk from './middleware/myThunk';

// used in debugging
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

export default function() {return configureStore({ 
	reducer,
	middleware: [
		...getDefaultMiddleware(),
		logger('CONSOLE'),
		api
	]
});}
