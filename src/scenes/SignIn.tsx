import 'nativewind'
import React, { useState } from 'react'
import { Image, Pressable, Text, TextInput, View } from 'react-native'
import Animated, { FadeInDown, FadeInUp } from 'react-native-reanimated'
import { StatusBar } from 'expo-status-bar'

import BackgroundImage from '../../assets/background.png'
import LightImage from '../../assets/light.png'
import { Route } from '../navigation/routes'
import { RouteComponent } from '../navigation/types'
import { SnackBar } from '../components/Snackbar'
import ThemeSwitch from '../components/ThemeSwitch'
import { useColorScheme } from 'nativewind'

export const SignIn: RouteComponent<Route.SignIn> = ({ navigation }) => {
  const [triggerKey, setTriggerKey] = useState(0)
  const { colorScheme, toggleColorScheme } = useColorScheme() // Temp.

  const onSignIn = () => {
    // setTriggerKey(prevKey => prevKey + 1)
    toggleColorScheme()
  }

  return (
    <View className="w-full h-full bg-white dark:bg-gray-900">
      <StatusBar style="light" />
      <SnackBar message="Sign In Action" triggerKey={triggerKey} />
      <Image
        className="absolute w-full h-full"
        source={BackgroundImage}></Image>

      {/* <ThemeSwitch /> */}
      {/* lights */}
      <View className="absolute flex-row justify-around w-full -mt-4">
        <Animated.Image
          entering={FadeInUp.delay(200).duration(9000).springify().damping(3)}
          source={LightImage}
          className="h-[225] w-[90]"
        />
        <Animated.Image
          entering={FadeInUp.delay(400).duration(9000).springify().damping(3)}
          source={LightImage}
          className="h-[160] w-[65] opacity-75"
        />
      </View>

      {/* Title and form */}
      <View className="flex justify-around w-full h-full pt-40 pb-10">
        {/* title */}
        <View className="flex items-center">
          <Animated.Text
            accessibilityRole="text"
            entering={FadeInUp.duration(1000).springify()}
            className="text-5xl font-bold tracking-wider text-white dark:text-gray-200">
            Sign In
          </Animated.Text>
        </View>

        {/* form */}
        <View className="flex items-center mx-5 space-y-4">
          <Animated.View
            entering={FadeInDown.duration(1000).springify()}
            className="w-full p-5 bg-black/5 rounded-2xl dark:bg-gray-800 dark:text-white dark:placeholder-gray-400">
            <TextInput placeholder="Email" placeholderTextColor={'gray'} />
          </Animated.View>
          <Animated.View
            entering={FadeInDown.delay(200).duration(1000).springify()}
            className="w-full p-5 mb-3 bg-black/5 rounded-2xl dark:bg-gray-800 dark:text-white dark:placeholder-gray-400">
            <TextInput
              placeholder="Password"
              placeholderTextColor={'gray'}
              secureTextEntry
            />
          </Animated.View>

          <Animated.View
            entering={FadeInDown.delay(400).duration(1000).springify()}
            className="w-full">
            <Pressable
              accessibilityRole="button"
              className="w-full p-3 mb-3 bg-sky-400 rounded-2xl active:opacity-80 dark:bg-sky-500 dark:active:bg-sky-600 dark:active:opacity-80"
              onPress={onSignIn}>
              <Text className="text-xl font-bold text-center text-white dark:text-gray-200">
                Sign In
              </Text>
            </Pressable>
          </Animated.View>

          <Animated.View
            entering={FadeInDown.delay(600).duration(1000).springify()}
            className="flex-row justify-center dark:text-gray-300">
            <Text className="dark:placeholder-gray-400">
              Don't have an account?{' '}
            </Text>
            <Pressable
              className="active:opacity-60"
              onPress={() => navigation.push(Route.SignUp)}>
              <Text className="text-sky-600 dark:text-gray-200">Sign Up</Text>
            </Pressable>
          </Animated.View>
        </View>
      </View>
    </View>
  )
}
