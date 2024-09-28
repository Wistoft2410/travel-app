import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import colors from '../travel-app/assets/colors/colors';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return(
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home}/>
      <Tab.Screen name="Liked" component={Liked}/>
      <Tab.Screen name="Profile" component={Profile}/>
    </Tab.Navigator>
  )
}
const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textColor}>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}
export default App; 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textColor: {
    color: colors.white,
    
  }
});