// Action Creator from reduxjs/toolkit allows us not to create actions types separately
// while createSlice from reduxjs/toolkit allows us not to create action types and action creators separately
// Any practices may apply either use a [manual,createAction or createSlice]
import { createAction } from '@reduxjs/toolkit';

// ACTION CREATOR
export const apiRequestStarted = createAction('api/RequestStarted');
export const apiRequestSuccess = createAction('api/RequestSuccess');
export const apiRequestFailed = createAction('api/RequestFailed');
// To access the action type > apiRequestStarted.type
// To access the action on dispatch apiRequestStarted({ payload }) -> the object inside has alread a key of payload so no need to add payload key
