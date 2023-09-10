import React from 'react'
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated'
import {GestureDetector, Gesture} from 'react-native-gesture-handler'
import {StyleSheet, View} from 'react-native'
import * as UI from 'shared/ui'

const SQUARE = 100.0
const CIRCLE_RADIUS = 150.0

type Context = {
  translateX: number
  translateY: number
}

export const Lesson1 = () => {
  const translateX = useSharedValue(0)
  const translateY = useSharedValue(0)
  const ctx = useSharedValue<Context>({
    translateX: 0,
    translateY: 0,
  })

  const squareGestureHandler = Gesture.Pan()
    .onStart(() => {
      ctx.value.translateX = translateX.value
      ctx.value.translateY = translateY.value
    })
    .onUpdate(e => {
      translateX.value = e.translationX + ctx.value.translateX
      translateY.value = e.translationY + ctx.value.translateY
    })
    .onEnd(() => {
      const distance = Math.sqrt(translateX.value ** 2 + translateY.value ** 2)
      if (distance < CIRCLE_RADIUS + SQUARE / 2) {
        translateX.value = withSpring(0)
        translateY.value = withSpring(0)
      }
    })

  const squareStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {translateX: translateX.value},
        {translateY: translateY.value},
      ],
    }
  }, [])

  return (
    <UI.Container>
      <View style={styles.circle}>
        <GestureDetector gesture={squareGestureHandler}>
          <Animated.View style={[styles.square, squareStyle]} />
        </GestureDetector>
      </View>
    </UI.Container>
  )
}

const styles = StyleSheet.create({
  square: {
    width: SQUARE,
    height: SQUARE,
    borderRadius: SQUARE / 2,
    backgroundColor: 'lightgreen',
  },
  circle: {
    width: CIRCLE_RADIUS * 2,
    height: CIRCLE_RADIUS * 2,
    borderRadius: CIRCLE_RADIUS,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 5,
    borderColor: 'lightgreen',
  },
})
