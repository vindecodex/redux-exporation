import store from './store';
import { todoAdded, todoRemoved, todoDone } from './actionCreator';

const unsubscribe = store.subscribe(() => {
	console.log("Update!!!", store.getState());
})

store.dispatch(todoAdded('study react'));
store.dispatch(todoAdded('study redux'));
store.dispatch(todoAdded('study next'));
store.dispatch(todoAdded('study anyhting'));
store.dispatch(todoDone(2));
store.dispatch(todoRemoved(1))
