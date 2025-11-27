import { configureStore } from "@reduxjs/toolkit";
import { 
  persistStore, 
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import { combineReducers } from 'redux';

import roleReducer from "./slices/roleSlice";
import membersReducer from "./slices/membersSlice";

// --- Persistence Configuration ---
const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  whitelist: ['role', 'members'], // Slices to persist
};

// 2. Combine all reducers
const rootReducer = combineReducers({
    role: roleReducer,
    members: membersReducer,
});

// 3. Create the persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);



export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

// 4. Create the persistor object (used in App.js)
export const persistor = persistStore(store);