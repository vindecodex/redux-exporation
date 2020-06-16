import { createStore } from 'redux';
import reducer from './reducer';
import logger from './middleware/logger';
import api from './middleware/api';
// import myThunk from './middleware/myThunk';

// used in debugging
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

// configureStore is an improve method for createStore => it automatically configure the debugging tools.
export default function() {return configureStore({ 
	reducer,
	middleware: [
		...getDefaultMiddleware(), // it includes the thunk middleware already because of this
		logger('CONSOLE'),
		api
	]
});}
