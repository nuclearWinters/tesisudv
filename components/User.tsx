import React, {FC} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TextInput,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import react from '../imgs/react.png';

const {width} = Dimensions.get('screen');

interface IProps {
  id: string;
  name: string;
  description: string;
  setUsers: React.Dispatch<
    React.SetStateAction<
      {
        id: string;
        name: string;
        description: string;
        isOn: boolean;
      }[]
    >
  >;
  isOn: boolean;
}

export const User: FC<IProps> = React.memo(
  ({name, description, setUsers, id, isOn}) => {
    return (
      <View style={styles.box}>
        <TouchableOpacity>
          <Image source={react} style={styles.image} />
        </TouchableOpacity>
        <View>
          <TextInput
            value={name}
            style={styles.name}
            onChangeText={(text) => {
              setUsers((state) => {
                const date = new Date();
                date.setSeconds(date.getSeconds() + 2);
                while (new Date().getTime() < date.getTime()) {}
                const updatedUsers = state.map((user) =>
                  user.id === id ? {...user, name: text} : user,
                );
                return updatedUsers;
              });
            }}
          />
          <Text
            style={styles.description}
            ellipsizeMode="tail"
            numberOfLines={4}>
            {description}
          </Text>
          <TouchableOpacity
            style={isOn ? styles.buttonOn : styles.buttonOff}
            onPress={() => {
              setUsers((state) => {
                const updatedUsers = state.map((user) =>
                  user.id === id ? {...user, isOn: !user.isOn} : user,
                );
                return updatedUsers;
              });
            }}>
            <Text style={styles.buttonText}>{isOn ? 'On' : 'Off'}</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  },
);

const styles = StyleSheet.create({
  box: {
    marginVertical: 10,
    marginHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    elevation: 10,
    paddingVertical: 12,
  },
  image: {
    borderRadius: 100,
    height: 80,
    width: 80,
    marginHorizontal: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    paddingVertical: 0,
    paddingHorizontal: 0,
  },
  description: {
    width: width - 40 - 20 - 80,
  },
  buttonOn: {
    backgroundColor: 'forestgreen',
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 2,
    marginTop: 6,
    borderRadius: 10,
  },
  buttonOff: {
    backgroundColor: 'red',
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 2,
    marginTop: 6,
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
  },
});
