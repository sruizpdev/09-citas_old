import React from 'react';
import {Text, View, StyleSheet, TouchableHighlight} from 'react-native';
const Cita = ({cita, eliminarPaciente}) => {
  const dialogoEliminar = (id) => {
    eliminarPaciente(id);
  };

  return (
    <View style={styles.cita}>
      <View>
        <Text style={styles.label}>Paciente</Text>
        <Text style={styles.texto}>{cita.paciente}</Text>
      </View>
      <View>
        <Text style={styles.label}>Propietario</Text>
        <Text style={styles.texto}>{cita.propietario}</Text>
      </View>
      <View>
        <Text style={styles.label}>Sintomas</Text>
        <Text style={styles.texto}>{cita.sintomas}</Text>
      </View>

      <View>
        <TouchableHighlight
          onPress={() => dialogoEliminar(cita.id)}
          style={styles.btnEliminar}>
          <Text style={styles.textoEliminar}>Elimnar &times;</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cita: {
    backgroundColor: '#FFF',
    borderBottomColor: '#e1e1e1',
    borderStyle: 'solid',
    borderBottomWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  label: {fontSize: 18, marginTop: 20, fontWeight: 'bold'},
  texto: {fontSize: 18},
  btnEliminar: {
    padding: 10,
    backgroundColor: 'red',
    marginVertical: 10,
  },
  textoEliminar: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
  },
});
export default Cita;
