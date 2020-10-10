/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import Cita from './components/Cita';

const App = () => {
  const [citas, setCitas] = useState([
    {id: '1', paciente: 'Hook', propietario: 'Juan', sintomas: 'no come'},
    {id: '2', paciente: 'React', propietario: 'Pepe', sintomas: 'no duerme'},
    {id: '3', paciente: 'Redux', propietario: 'Sergio', sintomas: 'no canta'},
  ]);

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Appointment Manager</Text>

        <FlatList
          data={citas}
          renderItem={({item}) => <Cita cita={item} />}
          keyExtractor={(cita) => cita.id}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#B03A2E',
    flex: 1,
  },
  title: {
    textAlign: 'center',
    color: '#FFF',
    marginTop: 20,
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default App;
