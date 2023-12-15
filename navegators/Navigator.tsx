import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from '../screens/LoginScreen';
import GameScreen from '../screens/GameScreen';
import ScoreScreen from '../screens/ScoreScreen';
import RegisterScreen from '../screens/RegisterScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();


function MyTabs() {
  return (
    <Tab.Navigator initialRouteName='Lista'>
      <Tab.Screen name="Game" component={ GameScreen } />
      <Tab.Screen name="Score" component={ ScoreScreen } />
    </Tab.Navigator>
  );
}
function MyStack() {
  return (
      <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
          <Stack.Screen name="HOME" component={MyTabs} />
      </Stack.Navigator>
  )
}

export default function BottomNavigator (){
    return(
        <NavigationContainer>
            <MyStack/>
        </NavigationContainer>
    )
}