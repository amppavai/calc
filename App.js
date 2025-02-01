/*
Tee yksinkertainen laskinsovellus React Native:lla.
Sovelluksen toiminta:
Kaksi TextInput komponenttia, johon voi syöttää numeroita.
Käytä niissä numero näppäimistöä estämään tekstin syöttö.
Kun '+' painiketta painetaan lasketaan syötettyjen numeroiden summa ja tulos näytetään sovelluksessa.
Kun '-' painiketta painetaan lasketaan syötettyjen numeroiden erotus ja tulos näytetään sovelluksessa.
*/
import { useState } from 'react';
import React from 'react';
import { StyleSheet, Text, TextInput, SafeAreaView, View, TouchableOpacity } from 'react-native';

export default function App() {

  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");
  const [result, setResult] = useState("");
  const [operator, setOperator] = useState("");
  //error handling:
  /*
  if is NaN etc -> ALert("warning")
  */
  const handlePress = (value) => {
    if (value === '+' || value === '-') {
      setOperator(value);
    } else if (value === '=') {
      if (operator === '+') {
        const res = parseFloat(value1) + parseFloat(value2);
        setResult("Result: " + res.toString());
      } else if (operator === '-') {
        const res = parseFloat(value1) - parseFloat(value2);
        setResult("Result: " + res.toString());
      }
      setValue1('');
      setValue2('');
      setOperator('');
    } else {
      if (value === 'back') {
        setResult("Result: ");
      } else {
        if (operator === '') {
          setValue1(value1 + value);
        } else {
          setValue2(value2 + value);
        }
      }
    }
  };

  return (
    <SafeAreaView style={styles.main}>

      <TextInput
        style={styles.screen}
        value={result}
        onChangeText={result => setResult(result)}
      />
      <View>
        <TextInput
          style={styles.input}
          placeholder='Enter first value'
          keyboardType='numeric'
          value={value1}
          editable={false}
        />
        <TextInput
          style={styles.input}
          placeholder='Enter second value'
          keyboardType='numeric'
          value={value2}
          editable={false}
        />
      </View>
      <View style={styles.operator_buttons_group}>
        <TouchableOpacity style={styles.single_operator_button} onPress={() => handlePress('+')}>
          <Text style={styles.button_text}>+</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.operator_buttons_group}>
        <TouchableOpacity style={styles.single_operator_button} onPress={() => handlePress('-')}>
          <Text style={styles.button_text}>-</Text>
        </TouchableOpacity>
      </View>


      <View style={styles.btn_row}>
        <TouchableOpacity style={styles.buttons} onPress={() => handlePress('1')}>
          <Text style={styles.button_text}>
            1
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttons} onPress={() => handlePress('2')}>
          <Text style={styles.button_text}>
            2
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttons} onPress={() => handlePress('3')}>
          <Text style={styles.button_text}>
            3
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttons}>
          <Text style={styles.button_text}>
            -
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.btn_row}>
        <TouchableOpacity style={styles.buttons} onPress={() => handlePress('4')}>
          <Text style={styles.button_text}>
            4
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttons} onPress={() => handlePress('5')}>
          <Text style={styles.button_text}>
            5
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttons} onPress={() => handlePress('6')}>
          <Text style={styles.button_text}>
            6
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttons}>
          <Text style={styles.button_text}>
            ,
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.btn_row}>
        <TouchableOpacity style={styles.buttons} onPress={() => handlePress('7')}>
          <Text style={styles.button_text}>
            7
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttons} onPress={() => handlePress('8')}>
          <Text style={styles.button_text}>
            8
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttons} onPress={() => handlePress('9')}>
          <Text style={styles.button_text}>
            9
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttons} onPress={() => handlePress('back')}>
          <Text style={styles.button_text}>
            BACK
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.btn_row}>
        <TouchableOpacity style={styles.buttons} onPress={() => handlePress('.')}>
          <Text style={styles.button_text}>
            .
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttons} onPress={() => handlePress('0')}>
          <Text style={styles.button_text}>
            0
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttons}>
          <Text style={styles.button_text}>
            _
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttons} onPress={() => handlePress('=')}>
          <Text style={styles.button_text}>
            CHECK
          </Text>
        </TouchableOpacity>
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 2,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center'
  },
  screen: {
    width: '100%',
    height: 200,
    color: 'black',
    textAlign: 'center',
    fontSize: 32
  },
  btn_row: {
    flexDirection: 'row',
    width: '97%'
  },
  buttons: {
    width: 100,
    height: 80,
    backgroundColor: '#dcdcdc',
    justifyContent: 'center',
    alignItems: 'center'
  },
  button_text: {
    color: '#000000',
    fontSize: 30,
  },
  operator_buttons_group: {
    flex: 2,
    width: 150,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    backgroundColor: '#00bfff',
    color: 'black',
    borderRadius: 10,
    padding: 20
  },
  single_operator_button: {
    marginHorizontal: 20,
  },
  input: {
    height: 40,
    width: 200,
    margin: 12,
    padding: 10,
    borderWidth: 1
  },
  input_layout: {
    textAlign: 'center',
    marginVertical: 10
  }
});
