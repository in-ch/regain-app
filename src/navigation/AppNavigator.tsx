import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '@screens/HomeScreen';

const AppStack = createStackNavigator();
const AppNavigator = () => (
  <AppStack.Navigator>
    <AppStack.Screen name="Home" component={HomeScreen} />
  </AppStack.Navigator>
);

export default AppNavigator;
