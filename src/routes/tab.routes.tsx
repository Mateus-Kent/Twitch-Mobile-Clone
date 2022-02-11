import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'

import colors from '../styles/colors'

import { ComingSoon } from '../screens/ComingSoon'
import { Following } from '../screens/Following'

const { Navigator, Screen } = createBottomTabNavigator()

export function TabRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.purple,
        tabBarInactiveTintColor: colors.black,
        tabBarStyle: {
          height: 60,
          backgroundColor: colors.primary,
          borderTopWidth: 0,
          alignItems: 'center',
          justifyContent: 'center',
        },
        tabBarIconStyle: {
          flex: 0,
          width: 30,
          height: 30,
        },
        tabBarLabelStyle: {
          fontFamily: 'roboto_400',
          fontSize: 11,
          marginTop: 3,
        },
      }}
    >
      <Screen
        name="Following"
        component={Following}
        options={{
          tabBarIcon: ({ focused, size }) => {
            return (
              <Ionicons
                name="md-heart"
                size={size}
                color={focused ? colors.purple : colors.black}
              />
            )
          },
        }}
      />

      <Screen
        name="Discover"
        component={ComingSoon}
        options={{
          tabBarIcon: ({ focused, size }) => {
            return (
              <MaterialCommunityIcons
                name="compass-outline"
                size={size}
                color={focused ? colors.purple : colors.black}
              />
            )
          },
        }}
      />

      <Screen
        name="Browse"
        component={ComingSoon}
        options={{
          tabBarIcon: ({ focused, size }) => {
            return (
              <Ionicons
                name="md-browsers"
                size={size}
                color={focused ? colors.purple : colors.black}
              />
            )
          },
        }}
      />

      <Screen
        name="Esports"
        component={ComingSoon}
        options={{
          tabBarIcon: ({ focused, size }) => {
            return (
              <MaterialCommunityIcons
                name="trophy-outline"
                size={size}
                color={focused ? colors.purple : colors.black}
              />
            )
          },
        }}
      />
    </Navigator>
  )
}
