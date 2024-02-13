import { StatusBar } from 'expo-status-bar'
import 'nativewind'
import React from 'react'
import { Image, Pressable, Text, TextInput, View } from 'react-native'
import BackgroundImage from '../../assets/background.png'
import LightImage from '../../assets/light.png'
import { Route } from '../navigation/routes'
import { RouteComponent } from '../navigation/types'

export const SignIn: RouteComponent<Route.SignIn> = ({ navigation }) => {
  return (
    <View className="w-full h-full bg-white">
      <StatusBar style="light" />

      <Image
        className="absolute w-full h-full"
        source={BackgroundImage}></Image>

      {/* lights */}
      <View className="absolute flex-row justify-around w-full ">
        <Image source={LightImage} className="h-[225] w-[90]" />
        <Image source={LightImage} className="h-[160] w-[65] opacity-75" />
      </View>

      {/* Title and form */}
      <View className="flex justify-around w-full h-full pt-40 pb-10">
        {/* title */}
        <View className="flex items-center">
          <Text className="text-5xl font-bold tracking-wider text-white">
            Sign-In
          </Text>
        </View>

        {/* form */}
        <View className="flex items-center mx-5 space-y-4">
          <View className="w-full p-5 bg-black/5 rounded-2xl">
            <TextInput placeholder="Email" placeholderTextColor={'gray'} />
          </View>
          <View className="w-full p-5 mb-3 bg-black/5 rounded-2xl">
            <TextInput
              placeholder="Password"
              placeholderTextColor={'gray'}
              secureTextEntry
            />
          </View>

          <View className="w-full">
            <Pressable className="w-full p-3 mb-3 bg-sky-400 rounded-2xl">
              <Text className="text-xl font-bold text-center text-white">
                Sign In
              </Text>
            </Pressable>
          </View>

          <View className="flex-row justify-center">
            <Text>Don't have an account? </Text>
            <Pressable onPress={() => navigation.navigate(Route.SignUp)}>
              <Text className="text-sky-600">Sign Up</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  )
}
