import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import Feed from "../screens/Feed";

const RootStack = createNativeStackNavigator();

const RootStackNavigation = () => {
  return (
    <RootStack.Navigator>
      <RootStack.Screen name="Home" component={Home} />
      <RootStack.Screen name="Feed" component={Feed} />
    </RootStack.Navigator>
  );
}

export default RootStackNavigation;