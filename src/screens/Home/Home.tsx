import {useNavigation} from '@react-navigation/native'
import React from 'react'
import {Text, ScrollView} from 'react-native'
import * as UI from 'shared/ui'
import {ScreenRoutes} from 'shared/config'

export const Home = () => {
  const {navigate} = useNavigation()
  return <UI.Container />
}
