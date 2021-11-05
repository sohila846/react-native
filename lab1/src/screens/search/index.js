
import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import {SearchBar} from '../../components';
import styles from './styles';

export default function Search() {
  const [value, setValue] = useState('');

  return (
    <View style={styles.container}>
      <SearchBar
       value={value}
       onChange={val => setValue(val)}
        onPress={() => {}}
      />
    </View>
  );
}
