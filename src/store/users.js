import { createSlice } from '@reduxjs/toolkit';

let id = 0;
const initialState = [];

const slice = createSlice({
	name: "user",
	initialState,
	reducers: {
		userAdded: function(user, action) {
			user.push({
				id: ++id,
				name: action.payload.name
			});
		},
		userRemoved: function(user, action) {
			// for faster lookup better to use object for this example will just use array
			// for sorting better to use array
			// also if wanted to use lookup and sorting we can combine it with object that contains the object and a separated id
			// example
			// const object = {
			// 	 users: {
			// 	 	 [user.id]: {...},
			// 	 	 usersID: [1,3,5,3] // we can use this to sort the objects
			// 	 }
			// }
			const userIndex = user.findIndex(user => user.id === action.payload.id);
			user.splice(userIndex,1);
		}
	}
});

export const { userAdded, userRemoved } = slice.actions;
export default slice.reducer;
