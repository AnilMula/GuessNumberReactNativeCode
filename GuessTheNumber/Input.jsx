import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import { Feather } from '@expo/vector-icons';
export const Input = ({ onChange, onGuess, onRefresh }) => {
  return (
    <View>
      <View style={styles.textInputWrapper}>
        <TextInput
          style={styles.textInput}
          onChangeText={(text) => onChange(text)}
          placeholder={'guess a number'}
        />

        <TouchableOpacity style={styles.refresh} onPress={onRefresh}>
          <Text>{'New game'}</Text>
          <Feather size={15} name={'refresh-cw'} color={'red'} />
        </TouchableOpacity>
      </View>
      <View style={{ alignItems: 'center' }}>
        <TouchableOpacity style={styles.guess} onPress={onGuess}>
          <Text>{' Guess'}</Text>
          <Feather size={15} name={'gift'} color={'red'} />
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  guess: {
    alignItems: 'center',
    backgroundColor: '#2970f2',

    padding: 5,
    width: 70,
    margin: 10,
    borderRadius: 20,
  },
  textInput: { height: 40, borderColor: 'gray', borderWidth: 1 },
  refresh: {
    alignItems: 'center',
    padding: 10,
  },
  textInputWrapper: { flexDirection: 'row', justifyContent: 'center' },
});
