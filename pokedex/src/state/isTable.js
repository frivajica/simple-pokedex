import { createAction, createReducer } from "@reduxjs/toolkit";

export const changeView = createAction("CHANGE_VIEW_MODE");

const isTableReducer = createReducer(true, {
    [changeView]: (state, action) => action.payload,
});

export default isTableReducer;