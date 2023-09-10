import React from 'react'
import {useNavigation} from '@react-navigation/native'
import {Text, ScrollView} from 'react-native'
import {ScreenRoutes} from 'shared/config'

export const Login = () => {
  const {navigate} = useNavigation()
  return (
    <ScrollView contentContainerStyle={{flexGrow: 1, alignItems: 'center'}}>
      <Text onPress={() => navigate(ScreenRoutes.Lesson1)}>{'lesson 1'}</Text>
    </ScrollView>
  )
}
