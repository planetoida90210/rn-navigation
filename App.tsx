import { NavigationContainer } from '@react-navigation/native';
import RootStackNavigation from './app/navigation/RootStack';
import TabsNav from './app/navigation/TabNab';


export default function App() {
  return (
    <NavigationContainer>
      <TabsNav />
      {/* <RootStackNavigation /> */}
    </NavigationContainer>
  );
}