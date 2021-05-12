import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import DashBoard from './screens/DashBoard'
import MainScreen from './screens/MainScreen'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {createStore, combineReducers} from 'redux';
import salaryReducer from './store/reducer/salary';
import {Provider} from 'react-redux';
import History from './screens/History'

const Stack = createStackNavigator();
const rootReducer = combineReducers({
  balance : salaryReducer
})
const store = createStore(rootReducer);

const App = () => {
  
  

  return (
    
     <NavigationContainer>
         <Provider store= {store}>
       <Stack.Navigator screenOptions={{headerTransparent:true,headerShown:false}}>
        <Stack.Screen
          name="Mainscreen"
          component={MainScreen}          
        />
        
        
        <Stack.Screen name="History" component={History} />
        </Stack.Navigator>
        </Provider>
         
     </NavigationContainer>
    
  );
};

const styles = StyleSheet.create({
  contentContainer:{
    flex:1,
    
  }
});

export default App;
