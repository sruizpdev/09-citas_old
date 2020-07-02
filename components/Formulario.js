import React, {useState} from 'react';
import {Text, StyleSheet, View, TextInput} from 'react-native';
const Formulario = () => {
  return (
    <>
      <View style={styles.formulario}>
        <View>
          <Text style={styles.label}>Paciente:</Text>
          <TextInput style={styles.input} />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  label: {
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 8,
  },
  input: {
    marginTop: 10,
    height: 50,
    borderWidth: 1,
    borderColor: '#e1e1e1',
    borderStyle: 'solid',
  },
  formulario: {
    backgroundColor: '#FFF',
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginHorizontal: '2.5%',
  },
});
export default Formulario;
