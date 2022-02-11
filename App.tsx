import { StatusBar } from 'react-native'
import React from 'react'
import {
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
  useFonts,
} from '@expo-google-fonts/roboto'
import AppLoading from 'expo-app-loading'

import { Routes } from './src/routes'

export default function App() {
  const [fontsLoaded] = useFonts({
    roboto_400: Roboto_400Regular,
    roboto_500: Roboto_500Medium,
    roboto_700: Roboto_700Bold,
  })

  if (!fontsLoaded) {
    <StatusBar
      barStyle="light-content"
      backgroundColor="transparent"
      translucent
    />
    return <AppLoading />
  }
  return <Routes />
}
