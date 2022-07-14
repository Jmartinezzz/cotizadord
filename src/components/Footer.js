import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import colors from '../utils/colors';

export default function Footer({calculation}) {
  return (
    <View style={styles.viewfooter}>      
      <TouchableOpacity
        onPress={calculation}
        style={{
          backgroundColor: colors.PRIMARY_COLOR_DARK,
          borderRadius: 20,
          padding: 14,          
          width: '65%',
        }}>
        <Text style={styles.text}>Calcular</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  viewfooter: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: colors.PRIMARY_COLOR,
    height: 100,
    borderTopRightRadius: 35,
    borderTopLeftRadius: 35,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#FFF',
    textAlign: 'center',
  },
});
