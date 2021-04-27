import React from 'react'
import {createAppContainer} from 'react-navigation'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import {createStackNavigator} from 'react-navigation-stack'
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs'
import {createDrawerNavigator} from 'react-navigation-drawer'
import {MainScreen} from '../screens/MainScreen'
import {PostScreen} from '../screens/PostScreen'
import {BookedScreen} from '../screens/BookedScreen'
import {AboutScreen} from '../screens/AboutScreen'
import {CreateScreen} from '../screens/CreateScreen'
import {Ionicons} from '@expo/vector-icons'
import { Platform } from 'react-native'

import {THEME} from '../theme'

const defaultNavigatorOptions = {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? THEME.MAIN_COLOR : '#fff'
        },
        headerTintColor: Platform.OS === 'android' ? '#fff' : THEME.MAIN_COLOR
    }
}

const BlogNavigator = createStackNavigator({
    Main: MainScreen,
    Post: PostScreen
}, defaultNavigatorOptions)

const BookedNavigatior = createStackNavigator({
    Booked: BookedScreen,
    Post: PostScreen
}, defaultNavigatorOptions
)

const bottomTabsConfig = {
    Post: {
        screen: BlogNavigator,
        navigationOptions: {
            tabBarLabel: 'All',
            tabBarIcon: info => <Ionicons name="ios-albums" color={info.tintColor} size={25} />
        }
    },
    Booked: {
        screen: BookedNavigatior,
        navigationOptions: {
            tabBarLabel: 'Bookmarked',
            tabBarIcon: info => <Ionicons name="ios-star" color={info.tintColor} size={25} />
        }
    }
}

const BottomNavigator = Platform.OS === 'android' ? createMaterialBottomTabNavigator(bottomTabsConfig, {
    activeTintColor: '#fff',
    shifting: true,
    barStyleLight: {
        backgroundColor: THEME.MAIN_COLOR
    }
}) : createBottomTabNavigator(bottomTabsConfig, {
    tabBarOptions: {
        activeTintColor: THEME.MAIN_COLOR
    }
})

const AboutNavigator = createStackNavigator({
    About: AboutScreen
}, defaultNavigatorOptions)

const CreateNavigator = createStackNavigator({
    Create: CreateScreen
}, defaultNavigatorOptions)

const MainNavigator = createDrawerNavigator({
    Posts: {
        screen: BottomNavigator,
        navigationOptions: {
            drawerLabel: 'Main page'
        }
    },
    About: {
        screen: AboutNavigator,
        navigationOptions: {
            drawerLabel: 'About'
        }
    },
    Create: {
        screen: CreateNavigator,
        navigationOptions: {
            drawerLabel: 'Create post'
        }
    }
}, {
    contentOptions: {
        activeTintColor: THEME.MAIN_COLOR,
        itemStyle: {
            marginTop: 40
        }
    }
})

export const AppNavigation = createAppContainer(MainNavigator);