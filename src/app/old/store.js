import { createStore } from 'redux';
import { reducer } from './reducers';

//Store - это хранилище всех данных в приложении. Любые данные, мы будем хранить в этом обьекте.
//reducer - функция, которая будет изменять store
export const store = createStore(reducer);

//подписаться на изменение нашего store
store.subscribe(() => {
    console.log(store.getState());
});
