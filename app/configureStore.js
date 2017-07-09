import { createStore } from 'redux';
import formApp from './reducers';

export default function configureStore(preloadedState) {
  return createStore(
    formApp,
    preloadedState
  );
}
