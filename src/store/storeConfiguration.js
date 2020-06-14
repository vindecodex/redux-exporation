import { createStore } from 'redux';
import reducer from './todo';

// used in debugging
import { configureStore } from '@reduxjs/toolkit';

export default function() {return configureStore({ reducer });}
