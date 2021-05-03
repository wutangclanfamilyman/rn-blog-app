import React, {useState} from 'react'
import * as ImagePicker from 'expo-image-picker'
import { View, StyleSheet, Button, Image, Alert} from 'react-native'
import {Camera} from 'expo-camera'


async function askForPermissions() {
    const {status} = await Camera.requestPermissionsAsync()

    if(status !== 'granted') {
        Alert.alert('Error', 'I need roots');
        return false
    }

    return true

}

export const PhotoPicker = ({onPick}) => {

    const [image, setImage] = useState(null)

    const takePhoto = async () => {
        const hasPermission = await askForPermissions()

        if(!hasPermission) {
            return
        }

        const img = await ImagePicker.launchCameraAsync({
            quality: 0.7,
            allowsEditing: false,
            aspect: [16, 9]
        })

        setImage(img.uri)
        onPick(img.uri)

    }

    return <View style={styles.wrapper}>
        <Button title={'Take photo'} onPress={takePhoto} />
        {image && <Image style={styles.image} source={{uri: image}} />}
    </View>
}

const styles = StyleSheet.create({
    wrapper: {
        marginBottom: 10
    },
    image: {
        width: '100%',
        height: 200,
        marginTop: 10
    }
})