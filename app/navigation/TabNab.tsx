import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import RootStackNavigation from './RootStack';
import Feed from '../screens/Feed';
import {Ionicons} from '@expo/vector-icons';

type TabsParamList = {
    HomeTab: undefined;
    FeedTab: undefined;
}

const Tabs = createBottomTabNavigator<TabsParamList>();

const TabsNav = () => {
    return (
        <Tabs.Navigator>
            <Tabs.Screen name="HomeTab" component={RootStackNavigation} options={{headerShown: false, tabBarLabel: "Home", tabBarIcon: ({color, size}) => <Ionicons name="home" color={color} size={size} />}} />
            <Tabs.Screen name="FeedTab" component={Feed} options={{tabBarLabel: "Feed", tabBarIcon: ({color, size}) => <Ionicons name="newspaper" color={color} size={size} />}}  />
        </Tabs.Navigator>
    )
}

export default TabsNav;