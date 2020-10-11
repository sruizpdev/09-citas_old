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
import Formulario from './components/Formulario';

const App = () => {
  const [citas, setCitas] = useState([
    {id: '1', paciente: 'Hook', propietario: 'Juan', sintomas: 'no come'},
    {id: '2', paciente: 'React', propietario: 'Pepe', sintomas: 'no duerme'},
    {id: '3', paciente: 'Redux', propietario: 'Sergio', sintomas: 'no canta'},
  ]);

  const eliminarPaciente = (id) => {
    setCitas((citasActuales) => {
      return citasActuales.filter((cita) => cita.id !== id);
    });
  };
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Administrador de citas</Text>
        <Formulario />
        <Text style={styles.title}>
          {citas.length > 0 ? 'Administra tus citas' : 'No hay citas'}
        </Text>
        <FlatList
          data={citas}
          renderItem={({item}) => (
            <Cita eliminarPaciente={eliminarPaciente} cita={item} />
          )}
          keyExtractor={(cita) => cita.id}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#76448A',
    flex: 1,
  },
  title: {
    textAlign: 'center',
    color: '#FFF',
    marginTop: 20,
    marginBottom: 10,
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default App;
