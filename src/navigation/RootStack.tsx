import { NavigationContainer, ParamListBase } from '@react-navigation/native'
import {
  NativeStackScreenProps,
  createNativeStackNavigator,
} from '@react-navigation/native-stack'
import * as React from 'react'
import { SignIn } from '../scenes/SignIn'
import { SignUp } from '../scenes/SignUp'
import { Route } from './routes'
import { RootStackParamList } from './types'

const Stack = createNativeStackNavigator<RootStackParamList>()

export const RootStack: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={Route.SignIn}
        screenOptions={{ headerShown: false }}>
        <Stack.Screen name={Route.SignIn} component={SignIn} />
        <Stack.Screen name={Route.SignUp} component={SignUp} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
