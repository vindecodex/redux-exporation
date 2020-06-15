// We know that dispatch only accepts pure objects
// But what if we are going to dispatch a function during api call
// With this we can run function with api call in promise / async
const myThunk = store => next => action => {
	// first check the action if it is a function
	// if it is a function we can execute that function
	// if it is already an object then we can return it directly
	if (typeof action === "function") {
		// we can destructure store so that we can avoid dot notation.
		// but for this example i just use the dot notation.
		action(store.getState, store.dispatch);
	} else {
		next(action);
	}
}

export default myThunk;
