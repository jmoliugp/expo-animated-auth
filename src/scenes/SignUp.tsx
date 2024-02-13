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

export const SignUp: RouteComponent<Route.SignUp> = ({ navigation }) => {
  const [triggerKey, setTriggerKey] = useState(0)

  const onSignUp = () => {
    setTriggerKey(prevKey => prevKey + 1)
  }

  return (
    <View className="w-full h-full bg-white">
      <StatusBar style="light" />
      <SnackBar message="Sign Up Action" triggerKey={triggerKey} />
      <Image className="absolute w-full h-full" source={BackgroundImage} />

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

      {/* title and form */}
      <View className="flex justify-around w-full h-full pt-48">
        {/* title */}
        <View className="flex items-center">
          <Animated.Text
            entering={FadeInUp.duration(1000).springify()}
            className="text-5xl font-bold tracking-wider text-white">
            Sign Up
          </Animated.Text>
        </View>

        {/* form */}
        <View className="flex items-center mx-5 space-y-4">
          <Animated.View
            entering={FadeInDown.duration(1000).springify()}
            className="w-full p-5 bg-black/5 rounded-2xl">
            <TextInput placeholder="Username" placeholderTextColor={'gray'} />
          </Animated.View>
          <Animated.View
            entering={FadeInDown.delay(200).duration(1000).springify()}
            className="w-full p-5 bg-black/5 rounded-2xl">
            <TextInput placeholder="Email" placeholderTextColor={'gray'} />
          </Animated.View>
          <Animated.View
            entering={FadeInDown.delay(400).duration(1000).springify()}
            className="w-full p-5 mb-3 bg-black/5 rounded-2xl">
            <TextInput
              placeholder="Password"
              placeholderTextColor={'gray'}
              secureTextEntry
            />
          </Animated.View>

          <Animated.View
            entering={FadeInDown.delay(600).duration(1000).springify()}
            className="w-full">
            <Pressable
              className="w-full p-3 mb-3 bg-sky-400 rounded-2xl"
              onPress={onSignUp}>
              <Text className="text-xl font-bold text-center text-white">
                Sign Up
              </Text>
            </Pressable>
          </Animated.View>

          <Animated.View
            entering={FadeInDown.delay(600).duration(1000).springify()}
            className="flex-row justify-center">
            <Text>Already have an account? </Text>
            <Pressable onPress={() => navigation.pop()}>
              <Text className="text-sky-600">Sign In</Text>
            </Pressable>
          </Animated.View>
        </View>
      </View>
    </View>
  )
}
