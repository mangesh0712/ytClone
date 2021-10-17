import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { videoReducer } from "./videoListReducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["video"],
};

const middlewares = [thunk, logger];

const reducers = combineReducers({
  video: videoReducer,
});

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = createStore(
  persistedReducer,
  applyMiddleware(...middlewares)
);

export const persistor = persistStore(store);
