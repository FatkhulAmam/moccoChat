import React, { useEffect, useState } from 'react'
import { StyleSheet, View, TouchableOpacity, StatusBar } from 'react-native'
import { Container, Button, Text, Form, Item, Input } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome'
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux'

import { makeAccount } from '../redux/action/auth'

const Register = () => {
    const navigation = useNavigation()
    const auth = useSelector(state => state.auth)
    const [Phone, setPhone] = useState('')
    const dispatch = useDispatch()

    useEffect(() => {
        console.log(Phone);
    })

    const InputRegister = async () => {
        await dispatch(makeAccount(Phone))
    }

    return (
        <>
            <StatusBar backgroundColor={'#421908'} />
            <Container style={styles.parrent}>
                <Form>
                    <Item style={styles.bio}>
                        <Input placeholder="Bio" value={Phone} onChangeText={Phone => setPhone(Phone)} />
                    </Item>
                </Form>
                <Text style={styles.textBottom} note>please tell your contact about you, or your activities </Text>
            </Container>
            <View style={styles.btnCheck}>
                <Button style={styles.check} onPress={InputRegister}>
                    <Icon name='check' size={30} color='#ffffff' />
                </Button>
            </View>
        </>
    )
}

export default Register

const styles = StyleSheet.create({
    parrent: {
        paddingRight: 1,
        flex: 1,
        backgroundColor: "#fff5e7",
        paddingTop: 25
    },
    bio: {
        width: 325,
        borderWidth: 1,
        marginTop: 25
    },
    textBottom: {
        fontSize: 17,
        marginLeft: 15,
        marginTop: 20
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
