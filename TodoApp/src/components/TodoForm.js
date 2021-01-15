import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import Input from './Input';
import {connect} from 'react-redux';
import { addTodo, setTodoText, updateTodo } from '../actions';

//DispatchAddTodo is just a fictitious name, we can rename as we prefer 
const TodoForm = ({dispatchAddTodo, dispatchSetTodoText, todo, dispatchUpdateTodo}) => {

    const {text, id} = todo;

    const onChangeText = (text) => {
        dispatchSetTodoText(text)
    }

    const onPress = () => {
        if(id) {
            dispatchUpdateTodo(todo);
            dispatchSetTodoText('');
        } else {
            dispatchAddTodo(text);
        }
    }

    return (
        <View style={styles.formContainer}>
            <View style={styles.inputContainer}>
                <Input onChangeText={onChangeText} value={text} />
            </View>
            <View style={styles.buttonContainer}>
                <Button onPress={() => onPress()} title={id ? "Save" : 'Add'} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    formContainer: {
        flexDirection: 'row',
        paddingHorizontal: 5,
        paddingVertical: 5,
    },
    inputContainer: {
        flex: 4,
    },
    buttonContainer: {
        flex: 1,
    }
})

//When we need pass the literal parameter to the dispatch we can pass only one object

// const mapDispatchToProps = (dispatch) => {
//     return {
//         dispatchAddTodo: text => dispatch(addTodo(text))
//     }
// } 

const mapDispatchToProps = {
    dispatchAddTodo: addTodo,
    dispatchSetTodoText: setTodoText,
    dispatchUpdateTodo: updateTodo,
}

const mapStateToProps = (state) => {
    return {
        todo: state.editingTodo,
    }
}

//Does not read anything from the state but dispatch actions...
export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);