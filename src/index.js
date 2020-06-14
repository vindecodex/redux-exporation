import storeConfiguration from './store/storeConfiguration';
import * as actions from './store/todo';

const store = storeConfiguration();

const unsubscribe = store.subscribe(() => {
	console.log("Update!!!", store.getState());
})

store.dispatch(actions.todoAdded('study react'));
store.dispatch(actions.todoAdded('study redux'));
store.dispatch(actions.todoAdded('study next'));
store.dispatch(actions.todoAdded('study anyhting'));
store.dispatch(actions.todoDone(2));
store.dispatch(actions.todoRemoved(1));
