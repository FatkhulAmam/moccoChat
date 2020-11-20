import React from 'react'
import { StyleSheet, Image, View, StatusBar } from 'react-native'
import { Container, Button, Card, CardItem, Body, Header, Title, Right, Text, Left } from 'native-base';
import Icon from 'react-native-ionicons'

import avatar from '../assets/images/profile.png'

const MyProfile = () => {
    return (
        <>
            <StatusBar translucent backgroundColor="transparent" />
            <View>
                <Image style={styles.avatar} source={avatar} color="#000000" />
                <Icon style={styles.back} android="arrow-back" />
                <Icon style={styles.call} android="call" />
                <Text style={styles.name}>Nama Temen</Text>
                <Text style={styles.status}>online</Text>
            </View>
            <View style={styles.div}>
                <Text style={styles.info}>Info</Text>
                <View style={styles.accountInfo}>
                    <Text style={styles.number}>00000000000000</Text>
                    <Text style={styles.note}>ponsel</Text>
                    <Text style={styles.txtbio}>it's ok may boy</Text>
                    <Text style={styles.bio}>bio</Text>
                </View>
                <View style={styles.notifContainer}>
                    <Text style={styles.notif}>Notification</Text>
                    <Text style={styles.notifStatus}>hidup</Text>
                </View>
            </View>
            <View style={styles.btnCheck}>
                <Button style={styles.check} onPress={() => navigation.navigate("LandingPage")}>
                    <Icon name='chatboxes' color='#ffffff' />
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
        fontSize: 40,
        left: 15,
        top: 20
    },
    call: {
        position: 'absolute',
        fontSize: 35,
        right: 24,
        top: 25
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
        padding: 20
    },
    info: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    accountInfo: {
        borderBottomWidth: 1,
        paddingBottom: 20
    },
    number: {
        marginTop: 20,
        fontSize: 20,
    },
    txtbio: {
        marginTop: 20,
        fontSize: 20,
    },
    notif: {
        marginTop: 20,
        fontSize: 20,
    },btnCheck: {
        position: 'absolute',
        bottom: 250,
        right: 15,
        flexDirection: 'row'
    },
    check: {
        width: 65,
        height: 65,
        borderRadius: 50,
        justifyContent: 'center',
        backgroundColor: '#1c3661'
    },
})
