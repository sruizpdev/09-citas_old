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
    {id: '1', paciente: 'Ana', propietario: 'Sergio', sintomas: 'No come'},
    {id: '2', paciente: 'Ana', propietario: 'Sergio', sintomas: 'No come'},
    {id: '3', paciente: 'Ana', propietario: 'Sergio', sintomas: 'No come'},
  ]);
  return (
    <>
      <View style={styles.contenedor}>
        <Text style={styles.titulo}>Administrador de citas</Text>

        <FlatList
          data={citas}
          renderItem={({item}) => <Cita item={item} />}
          keyExtractor={(cita) => cita.id}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    backgroundColor: '#AA076B',
    flex: 1,
  },
  titulo: {
    color: '#FFF',
    textAlign: 'center',
    marginTop: 40,
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default App;
