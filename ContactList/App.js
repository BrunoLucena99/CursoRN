import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {StatusBar, View} from 'react-native';
import PeoplePage from './src/pages/PeoplePage';
import PeopleDetailPage from './src/pages/PeopleDetailPage';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="dark" />
      <Stack.Navigator 
        screenOptions={{
          headerTintColor: '#FFF',
          headerTitleAlign: 'center',
          headerTitleStyle: {fontSize: 25},
          headerStyle:{
            backgroundColor: '#6CA2F7',
            borderBottomWidth: 1,
            borderBottomColor: '#C5C5C5',
          }
        }}
      >
        <Stack.Screen 
          name="PeoplePage" 
          component={PeoplePage}
          options={{title: 'Lista de Contatos'}}
        />
        <Stack.Screen 
          name="PeopleDetailPage"
          component={PeopleDetailPage}
          options={({route}) => ({title: route.params.name.first, headerTitleAlign: 'left'})}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
