import storeConfiguration from './store/storeConfiguration';
import * as actions from './store/todo';

const store = storeConfiguration();

const unsubscribe = store.subscribe(() => {
	console.log("Update!!!", store.getState());
})

store.dispatch(actions.todoAdded({ title: 'study react' }));
store.dispatch(actions.todoAdded({ title: 'study redux' }));
store.dispatch(actions.todoAdded({ title: 'study next' }));
store.dispatch(actions.todoAdded({ title: 'study anyhting' }));
store.dispatch(actions.todoDone({ id: 2 }));
store.dispatch(actions.todoRemoved({ id: 1 }));
