import React from 'react';
import {ScrollViewMap} from './screens/ScrollViewMap';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, StackScreenProps} from '@react-navigation/stack';
import {Home} from './screens/Home';

type RootStackParamList = {
  ScrollViewMap: undefined;
  Home: undefined;
};

export type ScrollViewMapProps = StackScreenProps<
  RootStackParamList,
  'ScrollViewMap'
>;

export type HomeProps = StackScreenProps<RootStackParamList, 'Home'>;

const Stack = createStackNavigator<RootStackParamList>();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="ScrollViewMap" component={ScrollViewMap} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
