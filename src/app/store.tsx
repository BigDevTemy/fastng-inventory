import { configureStore,combineReducers } from '@reduxjs/toolkit'
import messageReducer from './message'
import userDetailsReducer from './userDetails'
import machineattribute from './machineattribute'
import machine from './machine'
import machinetype from './machinetype'
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
const persistConfig = {
  key: 'root',
  storage,
}

const allReducers = combineReducers({
    message:messageReducer,
    userdetails:userDetailsReducer,
    machine:machine,
    machineattribute:machineattribute,
    machinetype:machinetype
})



const persistedReducer = persistReducer(persistConfig, allReducers)

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk]
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export const persistor = persistStore(store)