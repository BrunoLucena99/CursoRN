import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const TaskListItem = ({item, onPressTask, onLongPressTodo}) => (
    <TouchableOpacity onLongPress={() => onLongPressTodo()} onPress={onPressTask} >
        <View style={styles.line}>
            <Text style={[
              styles.lineText,
              item.done ? styles.lineThrough : null
            ]}>
                {item.text}
            </Text>
        </View>
    </TouchableOpacity>
);


const styles = StyleSheet.create({
  line: {
    height: 60,
    borderBottomWidth: 1,
    borderBottomColor: '#BBB',
    flexDirection: 'row',
    alignItems: 'center',
  },
  lineThrough: {
    textDecorationLine: 'line-through',
  },
  lineText: {
    fontSize: 20,
    paddingLeft: 15,
    flex: 7,
  },
})

export default TaskListItem;