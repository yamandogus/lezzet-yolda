import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Tabs } from 'expo-router';
import React from 'react';

import { HapticTab } from '@/components/haptic-tab';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Ana Sayfa',
          tabBarIcon: ({ color }) => <MaterialIcons name="home" size={28} color={color} />,
        }}
      />
      <Tabs.Screen
        name="orders"
        options={{
          title: 'Siparişlerim',
          tabBarIcon: ({ color }) => <MaterialIcons name="shopping-cart" size={28} color={color} />,
        }}
      />
      <Tabs.Screen
        name="food-search"
        options={{
          title: 'Yemek Arama',
          tabBarIcon: ({ color }) => <MaterialIcons name="search" size={28} color={color} />,
        }}
      />
      <Tabs.Screen
        name="account"
        options={{
          title: 'Hesabım',
          tabBarIcon: ({ color }) => <MaterialIcons name="person" size={28} color={color} />,
        }}
      />
    </Tabs>
  );
}