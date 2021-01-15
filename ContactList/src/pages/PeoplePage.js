import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, SafeAreaView, ActivityIndicator } from 'react-native';
import axios from 'axios';
import PeopleList from '../components/PeopleList';

const PeoplePage = ({props, navigation}) => {
    const [people, setPeople] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
      setIsLoading(true);
      function fetchData() {
        axios.get('https://randomuser.me/api/?nat=br&results=30').then((res) => {
          const {results} = res.data;
          setPeople(results);
          setIsLoading(false);
        }).catch((err) => {
          setIsLoading(false);
          setError(true);
        })
      }
  
      fetchData();
  
    }, [setPeople]);
  
    return (
      <SafeAreaView style={styles.container}>
        {
          isLoading
          ? <ActivityIndicator size="large" color="#6CA2F7" />
          : error
            ? <Text style={styles.errorText}>Ops! Algo deu Errado :(</Text>
            : <PeopleList people={people} />
        }
      </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
    },
    errorText: {
      color: 'red',
      alignSelf: 'center',
      fontSize: 20,
      fontWeight: 'bold',
    }
});

export default PeoplePage;