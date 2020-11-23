import React, {useState, useEffect} from 'react'
import { StyleSheet, View, TouchableOpacity, TextInput, StatusBar } from 'react-native'
import { Container, Button, Text, Form, Header, Title, Right } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome'
import { useNavigation } from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux'

import {verifAction} from '../redux/action/verification'

const Register = () => {
    const navigation = useNavigation()
    const verification = useSelector(state => state.verification)
    const dispatch = useDispatch()
    const [CodeOne, setCode] = useState('')
    const [CodeTwo, setCodeTwo] = useState('')
    const [CodeThree, setCodeThree] = useState('')
    const [CodeFour, setCodeFour] = useState('')

    const enterCode = () => {
        dispatch(verifAction(CodeOne, CodeTwo, CodeThree, CodeFour))
        navigation.navigate('LandingPage')
    }

    return (
        <>
            <Header style={styles.header} transparent>
                <StatusBar backgroundColor={'#421908'}/>
                <Button transparent onPress={() => navigation.goBack()}>
                    <Icon name='arrow-left' size={22} color="#ffffff"/>
                </Button>
                <Title style={styles.title}>Mocco Chat</Title>
                <Right/>
            </Header>
            <Container style={styles.parrent}>
                <Text style={styles.enterTxt}>Enter Code</Text>
                <Text style={styles.sms} note>Kode aktifasi sudah dikirim via SMS ke</Text>
                <Text styles={styles.no}>Nomor</Text>
                <Form style={styles.container}>
                    <TextInput name='code' value={CodeOne} style={styles.txtInput} onChangeText={CodeOne=>setCode(CodeOne)}/>
                    <TextInput name='code' value={CodeTwo} style={styles.txtInput} onChangeText={CodeTwo=>setCodeTwo(CodeTwo)}/>
                    <TextInput name='code' value={CodeThree} style={styles.txtInput} onChangeText={CodeThree=>setCodeThree(CodeThree)}/>
                    <TextInput name='code' value={CodeFour} style={styles.txtInput} onChangeText={CodeFour=>setCodeFour(CodeFour)}/>
                </Form>
            </Container>
            <View style={styles.btnCheck}>
                <Button style={styles.check} onPress={enterCode}>
                    <Icon name='arrow-right' size={30} color='#ffffff' />
                </Button>
            </View>
        </>
    )
}

export default Register

const styles = StyleSheet.create({
    header:{
        backgroundColor: '#421908'
    },
    title: {
        fontSize: 25,
        marginLeft: 25,
        marginTop: 15
    },
    parrent: {
        paddingRight: 15,
        flex: 1,
        backgroundColor: "#fff5e7",
        paddingTop: 25,
        alignItems: 'center'
    },
    enterTxt: {
        fontSize: 25,
        fontWeight: 'bold'
    },
    sms: {
        fontSize: 18,
        marginTop: 15
    },
    no: {
        fontSize: 18
    },
    container: {
        flexDirection: 'row',
    },
    txtInput: {
        borderBottomColor: '#421908',
        borderBottomWidth: 2,
        textAlign: 'center',
        margin: 5,
    },
    btnCheck: {
        position: 'absolute',
        bottom: 25,
        right: 15,
        flexDirection: 'row'
    },
    check: {
        width: 65,
        height: 65,
        borderRadius: 50,
        justifyContent: 'center',
        backgroundColor: '#421908'
    },
})
