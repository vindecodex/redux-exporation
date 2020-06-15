import { createAction } from '@reduxjs/toolkit';

// ACTION CREATOR
export const apiRequestStarted = createAction('api/RequestStared');
export const apiRequestSuccess = createAction('api/RequestSucess');
export const apiRequestFailed = createAction('api/RequestFailed');
