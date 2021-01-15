import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const Input = ({value, onChangeText}) => (
    <TextInput 
        style={styles.input}
        onChangeText={(val) => onChangeText(val)}
        value={value}
    />
)

const styles = StyleSheet.create({
    input: {
        borderColor: '#000',
        borderWidth: 1,
        padding: 2,
    }
})

export default Input;