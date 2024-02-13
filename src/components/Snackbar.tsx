import React, { useEffect } from 'react'
import { Text } from 'react-native'
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated'

interface Props {
  message: string
  isVisible: boolean
}

export const SnackBar: React.FC<Props> = ({ message, isVisible }) => {
  const opacity = useSharedValue(0)

  useEffect(() => {
    if (isVisible) {
      opacity.value = withTiming(1, { duration: 500 })

      setTimeout(() => {
        opacity.value = withTiming(0, { duration: 500 })
      }, 3000)
    }
  }, [isVisible, opacity])

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
    }
  })

  return (
    <Animated.View
      className="absolute left-0 right-0 items-center justify-center p-3 bg-black bottom-12"
      style={animatedStyle}>
      <Text className="text-white">{message}</Text>
    </Animated.View>
  )
}
