import {
  combineReducers,
  configureStore,
  PreloadedState,
} from '@reduxjs/toolkit'
import reducers from './reducers'

const rootReducer = combineReducers(reducers)

export const store = configureStore({
  reducer: rootReducer,
})

export function setupStore(preloadedState?: PreloadedState<RootState>) {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  })
}

// export type RootStateType = ReturnType<typeof store.getState>
export type AppDispatch = AppStore['dispatch']
export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
