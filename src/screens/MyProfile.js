import React, { useState } from 'react'
import { StyleSheet, Image, View, StatusBar, Switch } from 'react-native'
import { Button, Text } from 'native-base';
import Icon from 'react-native-ionicons'
import ImagePicker from 'react-native-image-picker';

import avatar from '../assets/images/profile.png'

const options = {
    title: 'my picture',
    takePhotoButtonTitle: 'Take Photo',
    chooseFromLibraryButtonTitle: 'Choose Photo'
}

const MyProfile = () => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    const {AvatarSource, setAvatarSource} = useState(null)

    const takePictures = () => {
        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);
           
            if (response.didCancel) {
              console.log('User cancelled image picker');
            } else if (response.error) {
              console.log('ImagePicker Error: ', response.error);
            } else {
              const source = { uri: response.uri };
              setAvatarSource({AvatarSource: source})
            }
          });
    }

    return (
        <>
            <StatusBar translucent backgroundColor="transparent" />
            <View>
                <Image style={styles.avatar} source={AvatarSource} color="#000000" />
                <Icon style={styles.back} android="arrow-back" size={35} color="#ffffff" />
                <Icon style={styles.call} android="more" size={35} color="#ffffff" />
                <Text style={styles.name}>Nama Gue</Text>
                <Text style={styles.status}>online</Text>
            </View>
            <View style={styles.div}>
                <Text style={styles.info}>Akun</Text>
                <View style={styles.border}>
                    <Text style={styles.text}>0976543234567890</Text>
                    <Text style={styles.tag}>Phone</Text>
                </View>
                <View style={styles.border}>
                    <Text style={styles.text}>User name</Text>
                    <Text style={styles.tag}>tidak diseting</Text>
                </View>
                <View style={styles.border}>
                    <Text style={styles.text}>Bio</Text>
                    <Text style={styles.tag}>tambahkan beberapa tentang anda</Text>
                </View>
            </View>
            <View style={styles.btnCheck}>
                <Button style={styles.check} onPress={takePictures}>
                    <Icon name='camera' color='#ffffff' />
                </Button>
            </View>
        </>
    )
}

export default MyProfile

const styles = StyleSheet.create({
    avatar: {
        width: 360,
        height: 360
    },
    back: {
        position: 'absolute',
        left: 15,
        top: 30
    },
    call: {
        position: 'absolute',
        right: 25,
        top: 30
    },
    name: {
        position: 'absolute',
        bottom: 40,
        fontSize: 45,
        fontWeight: 'bold',
        marginLeft: 20,
        color: '#ffffff',
    },
    status: {
        position: 'absolute',
        bottom: 20,
        fontSize: 20,
        marginLeft: 20
    },
    div: {
        padding: 20,
        backgroundColor: '#421908'
    },
    info: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#ecccb4'
    },
    btnCheck: {
        position: 'absolute',
        bottom: 250,
        right: 15,
        flexDirection: 'row',
        borderRadius: 50,
    },
    check: {
        width: 65,
        height: 65,
        borderRadius: 50,
        justifyContent: 'center',
        backgroundColor: '#ecccb4'
    },
    border: {
        borderBottomWidth: 1,
        paddingBottom: 15,
        paddingTop: 15
    },
    text: {
        fontSize: 20,
        color: '#ecccb4'
    },
    tag: {
        color: '#fff5e7'
    }
})
