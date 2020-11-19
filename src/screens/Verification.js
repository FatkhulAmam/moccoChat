import React from 'react'
import { StyleSheet, View, TouchableOpacity, TextInput } from 'react-native'
import { Container, Button, Text, Form, Header } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome'
import { useNavigation } from '@react-navigation/native';

const Register = () => {
    const navigation = useNavigation()
    return (
        <>
            <Header style={styles.header} transparent>
                <Button transparent onPress={() => navigation.goBack()}>
                    <Icon name='arrow-left' size={22} />
                </Button>
            </Header>
            <Container style={styles.parrent}>
                <Text style={styles.enterTxt}>Enter Code</Text>
                <Text style={styles.sms} note>Kode aktifasi sudah dikirim via SMS ke</Text>
                <Text styles={styles.no}>Nomor</Text>
                <Form style={styles.container}>
                    <TextInput style={styles.txtInput}></TextInput>
                    <TextInput style={styles.txtInput}></TextInput>
                    <TextInput style={styles.txtInput}></TextInput>
                    <TextInput style={styles.txtInput}></TextInput>
                    <TextInput style={styles.txtInput}></TextInput>
                </Form>
            </Container>
            <View style={styles.btnCheck}>
                <Button style={styles.check} onPress={() => navigation.navigate('Verification')}>
                    <Icon name='arrow-right' size={30} color='#ffffff' />
                </Button>
            </View>
        </>
    )
}

export default Register

const styles = StyleSheet.create({
    parrent: {
        paddingRight: 15,
        flex: 1,
        backgroundColor: "#fffef2",
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
        borderBottomColor: 'darkblue',
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
        backgroundColor: '#1c3661'
    },
})
