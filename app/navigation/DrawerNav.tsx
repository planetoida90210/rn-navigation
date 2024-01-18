import { DrawerContentScrollView, DrawerItem, DrawerItemList, createDrawerNavigator } from "@react-navigation/drawer";
import Home from "../screens/Home";
import Feed from "../screens/Feed";
import Profile from "../screens/Profile";
import { useNavigation } from "@react-navigation/native";

type DrawerStackParamList = {
    Home: undefined;
    Feed: undefined;
    Profile: undefined;
}

const Drawer = createDrawerNavigator<DrawerStackParamList>();

function CustomDrawerContent(props: any) {
    const navigation = useNavigation()
    return (
        <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
            <DrawerItem label="Help" onPress={() => alert('Link to help')} />
            <DrawerItem label="Reset Navigation" onPress={() => navigation.goBack()} />
        </DrawerContentScrollView>
    );
}

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator drawerContent={CustomDrawerContent}>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Feed" component={Feed} />
      <Drawer.Screen name="Profile" component={Profile} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigation;