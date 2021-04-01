import 'react-native-get-random-values';
import {v4 as uuidv4} from 'uuid';

export const userList = (
  length: number,
): {
  isOn: boolean;
  id: string;
  name: string;
  description: string;
}[] =>
  Array.from({length: length}, () => ({
    isOn: true,
    id: uuidv4(),
    name: 'Usuario',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque facilisis a orci sed ultricies. Proin sit amet consequat turpis. Vivamus sit amet ligula a odio iaculis maximus eu eget magna.',
  }));

export const generatedUserList = userList(100);
