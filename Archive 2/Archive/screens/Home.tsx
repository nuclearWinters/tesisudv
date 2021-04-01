import React, {FC} from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import {HomeProps} from '../App';

export const Home: FC<HomeProps> = ({navigation}) => {
  return (
    <View>
      <TouchableOpacity
        style={styles.buttonBox}
        onPress={() => {
          navigation.navigate('ScrollViewMap');
        }}>
        <Text>Go to ScrollViewMap</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonBox: {
    borderWidth: 1,
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 20,
    marginHorizontal: 20,
    marginVertical: 10,
    borderColor: '#999',
  },
});
