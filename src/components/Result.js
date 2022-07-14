import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default function Result(props) {
  const {quantity, percent, months, total, errorMessage} = props;
  return (
    <View style={styles.content}>
      {total && (
        <View style={styles.boxResults}>
          <Text style={styles.title}>Resumen</Text>
          <DataResult title="Cantidad solicitada" value={`${quantity} $`} />          
          <DataResult title="Interes %" value={`${percent} %`} />          
          <DataResult title="Plazos" value={`${months} meses`} />          
          <DataResult title="Pago mensual" value={`${total.monthlyFee} $`} />          
          <DataResult title="Total a pagar" value={`${total.totalPayable} $`} />          
        </View>
      )}
      <View>
        <Text style={styles.error}>{errorMessage}</Text>
      </View>
    </View>
  );
}

function DataResult(props) {
  const {title, value} = props;
  return (
    <View style={styles.value}>
      <Text>{title}:</Text>
      <Text>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  error: {
    textAlign: 'center',
    fontSize: 20,
    color: '#F00',
    fontWeight: 'bold',
  },
  content: {
    marginHorizontal: 40,
  },
  boxResults: {
    padding: 30,
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  value: {
    flexDirection: 'row',
    justifyContent: 'space-between',    
    marginBottom: 15,
  },
});
