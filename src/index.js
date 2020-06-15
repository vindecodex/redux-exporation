import storeConfiguration from './store/storeConfiguration';
import { todoAdded, todoRemoved, todoDone } from './store/todos';
import { userAdded } from './store/users';

const store = storeConfiguration();

const unsubscribe = store.subscribe(() => {
	console.log("Update!!!", store.getState());
})

store.dispatch(todoAdded({ title: 'study react' }));
store.dispatch(todoAdded({ title: 'study redux' }));
store.dispatch(todoAdded({ title: 'study next' }));
store.dispatch(todoAdded({ title: 'study anyhting' }));
store.dispatch(userAdded({ name: 'vincent' }));
store.dispatch(todoDone({ id: 2 }));
store.dispatch(todoRemoved({ id: 1 }));
