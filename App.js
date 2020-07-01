import React, {useState} from 'react';
import {Text, StyleSheet, View, FlatList} from 'react-native';
import Cita from './components/Cita';

const App = () => {
  const [citas, setCita] = useState([
    {
      id: '1',
      paciente: 'Hook',
      propietario: 'Juan',
      sintomas: 'No come',
    },
    {
      id: '2',
      paciente: 'Redux',
      propietario: 'Ana',
      sintomas: 'No duerme',
    },
    {
      id: '3',
      paciente: 'Native',
      propietario: 'Sergio',
      sintomas: 'No canta',
    },
  ]);

  return (
    <>
      <View style={styles.contenedor}>
        <Text style={styles.titulo}>Administrador de citas</Text>

        <FlatList
          data={citas}
          renderItem={({item}) => <Cita item={item} />}
          keyExtractor={cita => cita.id}
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
    marginTop: 40,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#FFF',
  },
});
export default App;
