import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../../auth/Login';
import SignUp from '../../auth/SignUp';
import Toast from 'react-native-toast-message';
import Home from '../../Screens/Home';
import About from '../../Screens/About';
import LoanCategory from '../../Screens/LoanCategory';
import Category from '../../Screens/Category';
import Multiple from '../../Screens/Multiple';
import ConstructionLoan from '../../Screens/ConstructionLoan';
import BusinessLoan from '../../Screens/BusinessLoan';
import EducationLoan from '../../Screens/EducationLoan';
import WeddingLoan from '../../Screens/WeddingLoan';
export default function AppNavigation() {

  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignUp">
        <Stack.Screen name="SignUp" options={{ headerShown: false }} component={SignUp} />
        <Stack.Screen name="Login" options={{ headerShown: false }}  component={Login} />
        <Stack.Screen name="LoanCategory" options={{headerShown:false}} component={LoanCategory} />
        <Stack.Screen name="Category" options={{headerShown:false}} component={Category} />
        <Stack.Screen name="Multiple" options={{headerShown:false}} component={Multiple} />
        <Stack.Screen name="ConstructionLoan" options={{headerShown:false}} component={ConstructionLoan} />
        <Stack.Screen name="BusinessLoan" options={{headerShown:false}} component={BusinessLoan} />
        <Stack.Screen name="EducationLoan" options={{headerShown:false}} component={EducationLoan} />
        <Stack.Screen name="WeddingLoan" options={{headerShown:false}} component={WeddingLoan} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="About" component={About} />
      </Stack.Navigator>
      <Toast />
    </NavigationContainer>



  )
}
