import { createStore } from 'redux';
import reducer from './todo';

// used in debugging
import { devToolsEnhancer } from 'redux-devtools-extension';

export default function storeConfiguration() {
	const store = createStore(reducer, devToolsEnhancer({ trace: true }));
	return store;
}
