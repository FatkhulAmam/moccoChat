import React, { useState, useEffect } from 'react'
import { StyleSheet, View, FlatList, TouchableOpacity, Image, TextInput } from 'react-native'
import { Container, Button, Card, CardItem, Body, Header, Left, Right, Text, Row } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome'
import { useNavigation } from '@react-navigation/native';

const ChatDetail = () => {
    return (
        <>
            <TouchableOpacity>
                <Header style={styles.header} transparent>
                    <Button transparent onPress={() => navigation.goBack()}>
                        <Icon name='arrow-left' size={22} color="#ffffff" />
                    </Button>
                    <Image style={styles.pict} />
                    <View style={styles.identitiy}>
                        <Text style={styles.name}>NAMA SAYA ADALAH</Text>
                        <Text style={styles.status}>Status</Text>
                    </View>
                    <Right />
                    <Button transparent onPress={() => navigation.navigate('')}>
                        <Icon name='ellipsis-v' size={22} color="#ffffff" />
                    </Button>
                </Header>
            </TouchableOpacity>
            <View style={styles.parrent}>

            </View>
            <Card style={styles.inputChat} transparent>
                <Body style={styles.write}>
                    <Icon name='smile-o' size={30} color='#8e8e8e'/>
                    <TextInput style={styles.textInput} placeholder="Pesan" />
                    <Icon name='folder-open-o' size={30} color='#8e8e8e' style={{marginRight: 30}}/>
                    <Icon name='microphone' size={30} color='#8e8e8e'/>
                </Body>
            </Card>
        </>
    )
}

export default ChatDetail

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#1c3661',
        alignItems: 'center',
        height: 100
    },
    parrent: {
        flex: 1,
        backgroundColor: "#8e8e8e",
    },
    title: {
        fontSize: 25,
        marginLeft: 25
    },
    pict: {
        width: 55,
        height: 55,
        backgroundColor: '#8e8e8e',
        borderRadius: 50,
        marginLeft: 20
    },
    identitiy: {
        marginLeft: 10
    },
    name: {
        color: '#ffffff',
        fontSize: 20,
        fontWeight: 'bold'
    },
    name: {
        color: '#ffffff',
        fontSize: 20,
        fontWeight: 'bold'
    },
    name: {
        color: '#ffffff',
        fontSize: 20,
        fontWeight: 'bold'
    },
    status: {
        color: '#ffffff',
        fontSize: 18
    },
    inputChat: {
        flexDirection: 'row',
        position: 'absolute',
        padding: 10,
        bottom: -4,
        backgroundColor: '#ffffff'
    },
    textInput: {
        width: 225,
        fontSize: 20,
        marginLeft: 5
    },
    write: {
        flexDirection: 'row'
    }
})
