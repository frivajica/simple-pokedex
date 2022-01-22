import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import userReducer from "./user";
import listModeReducer from "./listMode";
import allPokemonReducer from "./allPokemon";
import somePokemonReducer from "./somePokemon";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import logger from 'redux-logger';

//Setup
const rootReducer = combineReducers({
  user: userReducer,
	listMode: listModeReducer,
  allPokemon: allPokemonReducer,
  somePokemon: somePokemonReducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: [ //Here is where reducers which we want to persist are listed
		"user",
		"listMode",
    "allPokemon",
    "somePokemon",
  ],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

//Exports
export const store = configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(logger),
  reducer: persistedReducer,
});
export const persistor = persistStore(store);