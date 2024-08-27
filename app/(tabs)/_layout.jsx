import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Ionicons from '@expo/vector-icons/Ionicons';
import Colors from '../../constants/Colors';

export default function TabLayout() {
    return (
        <Tabs screenOptions={{
            tabBarActiveTintColor: Colors.PRIMARY,
        }}>
            <Tabs.Screen name='home' options={{
                title: 'Home',
                headerShown: false,
                tabBarShowLabel: false,
                tabBarIcon: ({ color }) => <FontAwesome name="home" size={28} color={color} />
            }} />
            <Tabs.Screen name='favorite' options={{
                title: 'Favorite',
                headerShown: false,
                tabBarShowLabel: false,
                tabBarIcon: ({ color }) => <FontAwesome name="heart" size={24} color={color} />
            }} />
            <Tabs.Screen name='inbox' options={{
                title: 'Inbox',
                headerShown: false,
                tabBarShowLabel: false,
                tabBarIcon: ({ color }) => <Ionicons name="chatbox" size={24} color={color} />
            }} />
            <Tabs.Screen name='profile' options={{
                title: 'Profile',
                headerShown: false,
                tabBarShowLabel: false,
                tabBarIcon: ({ color }) => <Ionicons name="person-sharp" size={24} color={color} />
            }} />
        </Tabs>
    )
}