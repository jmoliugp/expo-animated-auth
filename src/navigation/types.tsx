import { ParamListBase } from '@react-navigation/native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import * as React from 'react'
import { Route } from './routes'

export interface RootStackParamList extends ParamListBase {
  [Route.SignIn]: {}
  [Route.SignUp]: {}
}

export type RouteComponent<T extends keyof RootStackParamList> =
  React.FunctionComponent<NativeStackScreenProps<RootStackParamList, T>>
