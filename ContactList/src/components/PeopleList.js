import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import PeopleListItem from './PeopleListItem';
import {useNavigation} from '@react-navigation/native';

const PeopleList = props => {
  const navigation = useNavigation();
  return (
    <FlatList style={styles.container} 
      data={props.people}
      renderItem={({item}) => <PeopleListItem person={item} navigation={navigation} />}
      keyExtractor={(item, index) => index.toString()}
    />
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E2F9FF',
  },
})

export default PeopleList;