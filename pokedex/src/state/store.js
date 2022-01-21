import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import userReducer from "./user";
import listModeReducer from "./listMode";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

//Setup
const rootReducer = combineReducers({
  user: userReducer,
	listMode: listModeReducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: [ //Here is where reducers which we want to persist are listed
		"user",
		"listMode",
  ],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

//Exports
export const store = configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
  reducer: persistedReducer,
});
export const persistor = persistStore(store);