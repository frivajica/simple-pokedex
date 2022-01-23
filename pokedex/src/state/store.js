import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import userReducer from "./user";
import isTableReducer from "./isTable";
import rawDataReducer from "./rawData";
import dataReducer from "./data";
import storage from "redux-persist/lib/storage";
import logger from 'redux-logger';

//Setup
const rootReducer = combineReducers({
  user: userReducer,
	isTable: isTableReducer,
  rawData: rawDataReducer,
  data: dataReducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: [ //Here is where reducers which we want to persist are listed
		"user",
		"isTable",
    "processedData",
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