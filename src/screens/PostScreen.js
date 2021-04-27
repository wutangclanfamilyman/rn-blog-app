import React, {useEffect} from 'react'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import {AppHeaderIcon} from '../components/AppHeaderIcon'
import { View, StyleSheet, Text, Image, Button, ScrollView, Alert} from 'react-native'
import {DATA} from '../data'
import {THEME} from '../theme'

export const PostScreen = ({navigation}) => {
    
    const postId = navigation.getParam('postId')

    const post = DATA.find(p => p.id === postId)

    const removeHandler = () => {
        Alert.alert(
            'Delete post',
            'Are you sure want delete this post?',
            [
                {
                    text: 'Cancel',
                    style: 'cancel'
                },
                {text: 'Delete', style: 'destructive', onPress: () => {} }
            ],
            {cancelable: false}
        )
    }

    return (
        <ScrollView>
            <Image source={{uri: post.img}} style={styles.image} />
            <View style={styles.textWrap}>
                <Text style={styles.title}>{post.text}</Text>
            </View>
            <Button title="Delete" color={THEME.DANGER_COLOR} onPress={removeHandler} />
        </ScrollView>
    )
}

PostScreen.navigationOptions = ({navigation}) => {
    
    const date = navigation.getParam('date')
    const booked = navigation.getParam('booked')
    const iconName = booked ? 'ios-star' : 'ios-star-outline';

    return {
        headerTitle: 'Post ' + new Date(date).toLocaleDateString(),
        headerRight: () => (
            <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
                <Item title="Take photo" iconName={iconName} onPress={() => console.log('Press photo')} />
            </HeaderButtons>
        ),
        headerStyle: {
            backgroundColor: 'red'
        },
        headerTintColor: '#fff'
    }
}

const styles = StyleSheet.create({
    center: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        width: '100%',
        height: 200
    },
    textWrap: {
        padding: 10
    },
    title: {
        fontSize: 14
    }
})