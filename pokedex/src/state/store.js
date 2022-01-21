import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import usuarioReducer from "./usuario";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
//Setup
const rootReducer = combineReducers({
  usuario: usuarioReducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: [ //Here is where reducers which we want to persist are listed
		"usuario",
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