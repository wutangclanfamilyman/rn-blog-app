import React from 'react'
import { View, Text } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import {AppHeaderIcon} from '../components/AppHeaderIcon'

export const CreateScreen = () => {
    return (
        <View>
            <Text>Create Screen</Text>
        </View>
    )
}

CreateScreen.navigationOptions = ({navigation}) => ({
    headerTitle: 'Create',
    headerLeft: () => (
        <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
            <Item title="Toggle drawer" iconName="ios-menu" onPress={() => navigation.toggleDrawer()} />
        </HeaderButtons>
    )
})