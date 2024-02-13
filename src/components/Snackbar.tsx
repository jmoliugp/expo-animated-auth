import React, { useEffect } from 'react'
import { Text } from 'react-native'
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated'

interface Props {
  message: string
  triggerKey: number
}

export const SnackBar: React.FC<Props> = ({ message, triggerKey }) => {
  const opacity = useSharedValue(0)

  useEffect(() => {
    opacity.value = withTiming(1, { duration: 500 })

    const timeoutId = setTimeout(() => {
      opacity.value = withTiming(0, { duration: 500 })
    }, 3000)

    return () => clearTimeout(timeoutId)
  }, [triggerKey])

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
    }
  })

  return (
    <Animated.View
      className="absolute left-0 right-0 z-10 items-center justify-center p-3 bg-black bottom-16"
      style={animatedStyle}>
      <Text className="text-white">{message}</Text>
    </Animated.View>
  )
}
