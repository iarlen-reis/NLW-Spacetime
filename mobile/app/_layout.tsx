import { ImageBackground } from 'react-native'

import BlurBg from '../src/assets/bg-blur.png'
import Stripes from '../src/assets/stripes.svg'

import { styled } from 'nativewind'
import { StatusBar } from 'expo-status-bar'

import * as SecureStore from 'expo-secure-store'

import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto'

import { BaiJamjuree_700Bold } from '@expo-google-fonts/bai-jamjuree'
import { SplashScreen, Stack } from 'expo-router'
import { useEffect, useState } from 'react'

const StyledStripes = styled(Stripes)

const Layout = () => {
  const [isUserAuthenticated, setIsUserAuthenticated] = useState<
    null | boolean
  >(null)

  const [hasLoaderFonts] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
    BaiJamjuree_700Bold,
  })

  useEffect(() => {
    SecureStore.getItemAsync('token').then((token) => {
      setIsUserAuthenticated(!!token)
    })
  }, [])

  if (!hasLoaderFonts) {
    return <SplashScreen />
  }

  return (
    <ImageBackground
      source={BlurBg}
      className="relative flex-1 bg-gray-900"
      imageStyle={{ position: 'absolute', left: '-100%' }}
    >
      <StyledStripes className="absolute left-2" />
      <StatusBar style="light" />

      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: 'transparent' },
        }}
      >
        <Stack.Screen name="index" redirect={isUserAuthenticated} />
        <Stack.Screen name="new" />
        <Stack.Screen name="memories" />
      </Stack>
    </ImageBackground>
  )
}

export default Layout
