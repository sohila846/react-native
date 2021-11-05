import React from 'react';
import {TextInput, View, Pressable,Text} from 'react-native';
import styles from './styles';
import {COLORS} from '../../common';


const SearchBar = ({value, onChange, onPress}) => {
  return (
    <View style={styles.container}>
      <TextInput
        value={value}
        onChangeText={onChange}
        style={styles.inputContainer}
        placeholder={'Enter movie name ...'}
        placeholderTextColor={COLORS.black}
      />
      <Pressable onPress={onPress} style={styles.iconContainer}>
        <Text style={{color:COLORS.independence}}
        >{'Go'}</Text>
        
      </Pressable>
    </View>
  );
};

export {SearchBar};
