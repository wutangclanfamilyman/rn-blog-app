import React from 'react'
import { View, Text } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import {AppHeaderIcon} from '../components/AppHeaderIcon'

export const AboutScreen = () => {
    return (
        <View>
            <Text style={{color: '#000'}}>This is application for blog</Text>
            <Text>Version: 1.0.0</Text>
        </View>
    )
}

AboutScreen.navigationOptions = ({navigation}) => ({
    headerTitle: 'About',
    headerLeft: () => (
        <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
            <Item title="Toggle drawer" iconName="ios-menu" onPress={() => navigation.toggleDrawer()} />
        </HeaderButtons>
    )
})