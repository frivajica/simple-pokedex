import { createAction, createReducer } from "@reduxjs/toolkit";

export const changeView = createAction("CHANGE_VIEW_MODE");

const listModeReducer = createReducer("lista", {
    [changeView]: (state, action) => action.payload,
});

export default listModeReducer;