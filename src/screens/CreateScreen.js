import React, {useState} from 'react'
import { View, Text, StyleSheet, TextInput, Button, Image, ScrollView, TouchableWithoutFeedback, Keyboard } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import {useDispatch} from 'react-redux'
import {AppHeaderIcon} from '../components/AppHeaderIcon'
import { addPost } from '../store/actions/post'
import { THEME } from '../theme'

export const CreateScreen = ({navigation}) => {

    const dispatch = useDispatch()
    const img = 'https://static.coindesk.com/wp-content/uploads/2019/01/shutterstock_1012724596-860x430.jpg'

    const [text, setText] = useState(''); 

    const createPostHandler = () => {

        const post = {
            date: new Date().toJSON(),
            text: text,
            img: img,
            booked: false
        }

        dispatch(addPost(post))

        navigation.navigate('Main')
    }

    return (
        <ScrollView>
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                <View style={styles.wrapper}>
                    <Text style={styles.title}>Create Screen</Text>
                    <TextInput style={styles.textarea} placeholder="Enter text..." value={text} onChangeText={setText} multiline />
                    <Image style={styles.image} source={{uri: img}} />
                    <Button title={'Create'} color={THEME.MAIN_COLOR} onPress={createPostHandler} />
                </View>
            </TouchableWithoutFeedback>
        </ScrollView>
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

const styles = StyleSheet.create({
    wrapper: {
        padding: 10
    },
    title: {
        fontSize: 20,
        textAlign: 'center',
        marginVertical: 10
    },
    textarea: {
        padding: 10,
        marginBottom: 10
    },
    image: {
        width: '100%',
        height: 200,
        marginBottom: 10
    }
})