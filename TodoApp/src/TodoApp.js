import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import devToolsEnhancer from 'remote-redux-devtools';

import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import rootReducer from './reducers';

const store = createStore(rootReducer, devToolsEnhancer());

const TodoApp = () => {
    return (
        <Provider store={store} >
            <SafeAreaView>
                <StatusBar barStyle="default" />
                <TodoForm />
                <TodoList />
            </SafeAreaView>
        </Provider>
    )
};

export default TodoApp;