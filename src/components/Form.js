import React, {useState} from 'react';
import {StyleSheet, View, TextInput} from 'react-native';
import colors from '../utils/colors';
import SelectList from 'react-native-dropdown-select-list';

export default function Form({setQuantity, setPercent, setMonths}) {
  const [selected, setSelected] = useState('');
  const data = [
    {key: '6', value: '6 meses'},
    {key: '12', value: '12 meses'},
    {key: '18', value: '18 meses'},
    {key: '24', value: '24 meses'},
  ];
  return (
    <View style={styles.viewForm}>
      <View style={styles.viewInput}>
        <TextInput
          placeholder="Cantidad a pedir"
          keyboardType="numeric"
          style={styles.input}
          onChange={ e => setQuantity(e.nativeEvent.text)}
        />
        <TextInput
          placeholder="Interes %"
          keyboardType="numeric"
          style={[styles.input, styles.inputPercent]}
          onChange={ e => setPercent(e.nativeEvent.text)}
        />
      </View>
      <SelectList
        data={data}
        setSelected={setSelected}
        boxStyles={{borderColor: 'white', backgroundColor: 'white'}}
        placeholder="selecciona temporalidad"
        dropdownStyles={{backgroundColor: 'white'}}
        onSelect={() => setMonths(selected)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  viewForm: {
    position: 'absolute',
    bottom: 0,
    width: '90%',
    paddingHorizontal: 50,
    backgroundColor: colors.PRIMARY_COLOR_DARK,
    borderRadius: 30,
    height: 180,
    justifyContent: 'center',
  },
  viewInput: {
    flexDirection: 'row',
  },
  input: {
    height: 50,
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: colors.PRIMARY_COLOR,
    borderRadius: 6,
    width: '60%',
    marginRight: 5,
    marginLeft: -5,
    marginBottom: 10,
    color: '#000',
    paddingHorizontal: 20,
  },
  inputPercent: {
    width: '40%',
    marginLeft: 5,
  },
});

const inputSelectStyles = StyleSheet.create({
  inputIOS: {
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    color: 'black',
    paddingRight: 30,
    backgroundColor: '#FFF',
    marginLeft: -5,
    marginRight: -5,
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderwidth: 0.5,
    borderColor: 'gray',
    borderRadius: 9,
    color: 'black',
    paddingRight: 30,
    backgroundColor: '#FFF',
  },
});
