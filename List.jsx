import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

export const List = ({ num, match, index }) => {
  return (
    <View>
      {match === index ? (
        <View style={styles.match}>
          <Text>{`Value: ${num}`}</Text>

          <Feather size={15} name={'thumbs-up'} color={'blue'} />
        </View>
      ) : (
        <Text style={styles.unMatch}>{`Value:?`}</Text>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  match: {
    flexDirection: 'row',
    backgroundColor: 'green',
    justifyContent: 'center',
    padding: 5,
    margin: 4,
  },
  unMatch: { padding: 5, backgroundColor: 'grey', margin: 4 },
});
