import React, { useState, useEffect } from 'react'
import { StyleSheet, View, FlatList, TouchableOpacity, Image, TextInput, StatusBar } from 'react-native'
import { Container, Button, Card, CardItem, Body, Header, Left, Right, Text, Row } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-ionicons'

import MessageBubble from '../components/bubbleChat'

const ChatDetail = () => {
    const navigation = useNavigation()

    return (
        <>
            <TouchableOpacity onPress={() => navigation.navigate('ContactProfile')}>
                <Header style={styles.header} transparent>
                    <StatusBar backgroundColor={'#421908'} />
                    <Button transparent onPress={() => navigation.goBack()}>
                        <Icon name='arrow-back' size={30} color="#ffffff" />
                    </Button>
                    <Image style={styles.pict} />
                    <View style={styles.identitiy}>
                        <Text style={styles.name}>NAMA SAYA ADALAH</Text>
                        <Text style={styles.status}>Status</Text>
                    </View>
                    <Right />
                    <Button transparent onPress={() => navigation.navigate('')}>
                        <Icon name='more' size={35} color="#ffffff" />
                    </Button>
                </Header>
            </TouchableOpacity>
            <View style={styles.parrent}>
                <MessageBubble 
                    mine
                    text="hello every body"
                />
                <MessageBubble
                    text="hello whats up"
                />
            </View>
            <Card style={styles.inputChat} transparent>
                <Body style={styles.write}>
                    <Icon name='happy' size={30} color='#8e8e8e' />
                    <TextInput style={styles.textInput} placeholder="Pesan" />
                    <Icon name='attach' size={30} color='#8e8e8e' style={{ marginRight: 30 }} />
                    <Icon name='mic' size={30} color='#8e8e8e' />
                </Body>
            </Card>
        </>
    )
}

export default ChatDetail

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#421908',
        alignItems: 'center',
        height: 100,
    },
    parrent: {
        flex: 1,
        backgroundColor: "#fff5e7",
    },
    title: {
        fontSize: 25,
        marginLeft: 25
    },
    pict: {
        width: 50,
        height: 50,
        backgroundColor: '#e8e8e8',
        borderRadius: 50,
        marginLeft: 20
    },
    identitiy: {
        marginLeft: 10
    },
    name: {
        color: '#ffffff',
        fontSize: 18,
        fontWeight: 'bold'
    },
    status: {
        color: '#ffffff',
    },
    inputChat: {
        flexDirection: 'row',
        position: 'absolute',
        padding: 10,
        bottom: -4,
        height: 50,
        width: 359,
        backgroundColor: '#ecccb4',
        borderRadius: 25
    },
    textInput: {
        width: 230,
        height: 50,
        fontSize: 18,
        marginLeft: 8
    },
    write: {
        flexDirection: 'row'
    },
})
