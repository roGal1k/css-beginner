import { createStore } from 'redux';
import rootReducer from './reducers'; // Подставьте путь к вашему корневому редьюсеру

const store = createStore(rootReducer);

export default store;