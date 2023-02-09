import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from './Screens/Splash';
import HomeScreen from './Screens/HomeScreen';
import PermissionPage from './Screens/PermissionPage';
import {
  createStackNavigator,
  HeaderStyleInterpolators,
  StackCardInterpolationProps,
  StackNavigationOptions,
  TransitionSpecs,
} from '@react-navigation/stack';
import Login from './Screens/Login';
import { StatusBar } from 'react-native';
import MobileNumber from './Screens/MobileNumber';
import PhoneSetting from './Screens/PhoneSetting';
import ConformOtp from './Screens/ConformOtp';
import StatusScreen from './Screens/StatusScreen';
import IncomeReceive from './Screens/IncomeReceive';
import ReferralCode from './Screens/ReferralCode';
import Language from './Screens/Language';
import MyDrawer from './MyDrawer';
import Notification from './Screens/Notification';
import KycForm from './Screens/KycForm';
import BasicInfo from './Screens/BasicInfo';
import EmployInfo from './Screens/EmployInfo';



export const horizontalAnimation: StackNavigationOptions = {
  gestureDirection: 'horizontal',
  transitionSpec: {
    open: TransitionSpecs.TransitionIOSSpec,
    close: TransitionSpecs.TransitionIOSSpec,
  },
  headerStyleInterpolator: HeaderStyleInterpolators.forFade,
  cardStyleInterpolator: ({
    current,
    layouts,
  }: StackCardInterpolationProps) => {
    return {
      cardStyle: {
        transform: [
          {
            translateX: current.progress.interpolate({
              inputRange: [0, 1],
              outputRange: [layouts.screen.width, 0],
            }),
          },
        ],
      },
    };
  },
};

export const verticalAnimation: StackNavigationOptions = {
  gestureDirection: 'vertical',
  transitionSpec: {
    open: TransitionSpecs.TransitionIOSSpec,
    close: TransitionSpecs.TransitionIOSSpec,
  },
  headerStyleInterpolator: HeaderStyleInterpolators.forSlideUp,
  cardStyleInterpolator: ({
    current,
    layouts,
  }: StackCardInterpolationProps) => {
    return {
      cardStyle: {
        transform: [
          {
            translateY: current.progress.interpolate({
              inputRange: [0, 1],
              outputRange: [layouts.screen.height, 0],
            }),
          },
        ],
      },
    };
  },
};

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#000" />
      <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={horizontalAnimation} />
        <Stack.Screen name='PermissionPage' component={PermissionPage} options={horizontalAnimation} />
        <Stack.Screen name='Login' component={Login} options={horizontalAnimation} />
        <Stack.Screen name='MobileNumber' component={MobileNumber} options={verticalAnimation} />
        <Stack.Screen name='PhoneSetting' component={PhoneSetting} />
        <Stack.Screen name='ConformOtp' component={ConformOtp} options={verticalAnimation} />
        <Stack.Screen name='StatusScreen' component={StatusScreen} options={horizontalAnimation} />
        <Stack.Screen name='IncomeReceive' component={IncomeReceive} options={verticalAnimation} />
        <Stack.Screen name='ReferralCode' component={ReferralCode} options={horizontalAnimation} />
        <Stack.Screen name='Language' component={Language} options={horizontalAnimation} />
        <Stack.Screen name='MainHome' component={MyDrawer} options={verticalAnimation} />
        <Stack.Screen name='Notification' component={Notification} options={horizontalAnimation} />
        <Stack.Screen name='KycForm' component={KycForm} options={horizontalAnimation} />
        <Stack.Screen name='BasicInfo' component={BasicInfo} options={horizontalAnimation} />
        <Stack.Screen name='EmployInfo' component={EmployInfo} options={horizontalAnimation} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
