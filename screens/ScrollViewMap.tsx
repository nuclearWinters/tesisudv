import React, {FC, useState} from 'react';
import {View, ScrollView, FlatList} from 'react-native';
import {generatedUserList} from '../utils';
import {ScrollViewMapProps} from '../App';
import {User} from '../components/User';

export const ScrollViewMap: FC<ScrollViewMapProps> = () => {
  const [users, setUsers] = useState(generatedUserList);
  return (
    <View>
      {/*<ScrollView>
          {users.map(({description, id, name, isOn}, idx) => {
            return (
              <User
                key={idx}
                id={id}
                name={name}
                description={description}
                setUsers={setUsers}
                isOn={isOn}
              />
            );
          })}
        </ScrollView>*/}
      {
        <FlatList
          data={users}
          keyExtractor={(_, idx) => String(idx + 1)}
          renderItem={({item: {id, name, description, isOn}}) => {
            return (
              <User
                name={name}
                id={id}
                description={description}
                setUsers={setUsers}
                isOn={isOn}
              />
            );
          }}
        />
      }
    </View>
  );
};
