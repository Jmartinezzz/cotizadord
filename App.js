import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  StatusBar,
  Button,
} from 'react-native';
// importar variables
import colors from './src/utils/colors';
// importar componentes
import Form from './src/components/Form';
import Footer from './src/components/Footer';
import Result from './src/components/Result';

export default function App() {
  const [quantity, setQuantity] = useState(null);
  const [percent, setPercent] = useState(null);
  const [months, setMonths] = useState(null);
  const [total, setTotal] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  useEffect(() => {
    if (quantity && percent && months) {
      calculation();
    } else {
      reset();
    }
  }, [quantity, percent, months]);

  const calculation = () => {
    reset();
    if (!quantity || !percent || !months) {
      setErrorMessage('todos los campos son obligatorios');
    } else {
      const interest = percent / 100;
      const fee = (
        quantity /
        ((1 - Math.pow(interest + 1, -months)) / interest)
      ).toFixed(2);
      setTotal({
        monthlyFee: fee,
        totalPayable: (fee * months).toFixed(2),
      });
    }
  };

  const reset = () => {
    setErrorMessage('');
    setTotal(null);
  };
  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.safeArea}>
        <View
          style={{
            backgroundColor: colors.PRIMARY_COLOR,
            height: 220,
            width: '100%',
            borderBottomLeftRadius: 35,
            borderBottomRightRadius: 35,
            zIndex: -1,
            position: 'absolute',
          }}
        />
        <Text style={styles.titleApp}>Cotizador de Prestamos</Text>
        <Form
          setQuantity={setQuantity}
          setPercent={setPercent}
          setMonths={setMonths}
        />
      </SafeAreaView>

      <Result
        errorMessage={errorMessage}
        quantity={quantity}
        percent={percent}
        months={months}
        total={total}
      />

      <Footer calculation={calculation} />
    </>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    height: 290,
    alignItems: 'center',
  },
  titleApp: {
    fontSize: 27,
    fontWeight: 'bold',
    color: '#FFF',
    marginTop: 17,
  },
});
