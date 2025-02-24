import {createStackNavigator} from '@react-navigation/stack';
import AppNavigator from '@navigation/AppNavigator';
import AuthNavigator from '@navigation/AuthNavigator';

const RootNavigator = () => {
  const RootStack = createStackNavigator();
  const isLoggedIn = false;
  return (
    <RootStack.Navigator initialRouteName="Auth">
      {isLoggedIn ? (
        <RootStack.Screen name="App" component={AppNavigator} />
      ) : (
        <RootStack.Screen name="Auth" component={AuthNavigator} />
      )}
    </RootStack.Navigator>
  );
};

export default RootNavigator;
