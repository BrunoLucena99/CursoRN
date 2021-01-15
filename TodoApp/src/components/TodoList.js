import React from 'react';
import { View, StyleSheet } from 'react-native';
import {connect} from 'react-redux';
import {toggleTodo, setEditingTodo} from '../actions';

import TaskListItem from './TaskListItem';

//Todos is passed by props....
const TodoList = ({todos, dispatchToggleTodo, dispatchSetEditingTodo}) => {

    return (
        <View>
            { todos.map(todo => (
                <TaskListItem
                    key={todo.id}
                    item={todo}
                    onPressTask={() => dispatchToggleTodo(todo.id)} 
                    onLongPressTodo={() => dispatchSetEditingTodo(todo)}
                />
            ))}
        </View>
    )
};

const styles = StyleSheet.create({
    
});

const mapStateToProps = (state) => {
    const {todos} = state;
    return {todos};
}

const mapDispatchToProps = {
    dispatchToggleTodo: toggleTodo,
    dispatchSetEditingTodo: setEditingTodo,
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);