import { configureStore } from "@reduxjs/toolkit";
import crudReducer from "./UserCrudSlice"




export const store = configureStore({
    reducer: {
        crud: crudReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;