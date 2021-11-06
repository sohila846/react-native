import React from 'react';
import {TextInput, View, Pressable,Text} from 'react-native';
import styles from './styles';
import {COLORS} from '../../common';
import Icon from 'react-native-vector-icons/Entypo';

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
      <Icon name="magnifying-glass" size={30} color={COLORS.black} />
        
      </Pressable>
    </View>
  );
};

export {SearchBar};
