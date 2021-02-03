import React, { useEffect, useState, useCallback } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { List } from './List';
import { Input } from './Input';
import { Feather } from '@expo/vector-icons';

export const GuessTheNumber = ({ length, max }) => {
  const [randList, setRandList] = useState([]);
  const [inputValue, setInputValue] = useState(null);
  const [match, setMatch] = useState(null);
  const [unlock, setUnlock] = useState(false);

  const refreshGame = useCallback(() => {
    randomArray(length, max);
  }, [length, max]);

  useEffect(() => {
    refreshGame();
  }, []);

  const randomArray = (length, max) => {
    const duplicate = [];

    while (max > 0) {
      const x = Math.floor(Math.random() * length + 1);
      if (duplicate.includes(x)) continue;
      else {
        duplicate.push(x);
        max--;
      }
    }
    setRandList(duplicate);
    /* setRandList(
      [...new Array(max)].map(() => Math.round(Math.random() * length))
    ); */
  };

  const onChangeText = (text) => {
    setInputValue(() => parseInt(text));
    setMatch(() => -1);
  };

  const onPressGuess = () => {
    setMatch(randList.findIndex((num) => num === inputValue));
  };

  const onPressRefresh = () => {
    setMatch(() => -1);
    setUnlock(false);
    refreshGame();
  };
  const onUnlock = () => {
    setUnlock(true);
  };
  console.log(randList);

  return (
    <View style={styles.wrapper}>
      <View style={styles.title}>
        <Text>{'Guess The Number Game'}</Text>
      </View>
      <Input
        onChange={onChangeText}
        onGuess={onPressGuess}
        onRefresh={onPressRefresh}
      />
      {unlock
        ? randList.map((num, index) => (
            <List num={num} match={index} index={index} key={index} />
          ))
        : randList.map((num, index) => (
            <List num={num} match={match} index={index} key={index} />
          ))}

      <TouchableOpacity style={styles.unlock} onPress={onUnlock}>
        <Text>{'Unlock'}</Text>
        <Feather size={15} name={'lock-open'} color={'blue'} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: { backgroundColor: '#a0e5fa', marginTop: 30, borderRadius: 10 },
  title: { padding: 20 },
  unlock: {
    alignItems: 'center',
    padding: 10,
  },
});
