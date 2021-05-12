import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import DashBoard from './DashBoard';
import History from './History';


const Tab = createBottomTabNavigator();
const MainScreen = () => {
    return( 
        

            <Tab.Navigator
                initialRouteName="Dashboard"
                tabBarOptions={{
                activeTintColor: '#fdc66c',
                activeBackgroundColor: '#2e2b5a',
                inactiveBackgroundColor : '#2e2b5a',
                inactiveTintColor:'#7c3be1',
                }}
            >
                <Tab.Screen
                name="Dashboard"
                component={DashBoard}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size }) => (
                    <Icon name="person" color={color} size={size} />
                    ),
                }}
                />
                <Tab.Screen
                name="History"
                component={History}
                options={{
                    tabBarLabel: 'History',
                    tabBarIcon: ({ color, size }) => (
                    <Icon name="albums" color={color} size={size} />
                    ),
                    
                }}
                />
                
            </Tab.Navigator>
        
    )

}
export default MainScreen;

