import { createStore } from 'redux';
import reducer from './reducer';
import logger from './middleware/logger';
import myThunk from './middleware/myThunk';

// used in debugging
import { configureStore } from '@reduxjs/toolkit';

export default function() {return configureStore({ 
	reducer,
	middleware: [
		logger('CONSOLE'),
		myThunk
	]
});}
