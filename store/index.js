// @ts-check
import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import { persistReducer, persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { settingsReducer } from './settings'

const persistConfig = {
  key: 'redux-example',
  version: 1,
  storage: AsyncStorage,
}

const baseReducer = combineReducers({
  settings: settingsReducer,
})

const persistedReducer = persistReducer(persistConfig, baseReducer)

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})
  
const persistor = persistStore(store)
  
export { store, persistor }