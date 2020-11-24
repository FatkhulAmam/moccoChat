import React, {useEffect} from 'react'
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { Text, Button } from 'native-base'
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux'
import Icon from 'react-native-ionicons'
import { API_URL } from '@env'

import avatar from '../assets/images/profile.png'
import {getMyProfile} from '../redux/action/myProfile'

export function DrawerContent(props) {
    const navigation = useNavigation()
    const dispatch = useDispatch()
    const myProfile = useSelector(state => state.myProfile)
    const token = useSelector(state => state.auth.token)
    useEffect(() => {
        dispatch(getMyProfile(token))
    }, [dispatch, token])

    return (
        <View style={{ flex: 1, backgroundColor: '#fff5e7', marginTop: -5 }}>
            <DrawerContentScrollView {...props} >
                <TouchableOpacity style={styles.headDrawer} onPress={() => navigation.navigate('MyProfile')}>
                    <Image source={{uri: `${API_URL}${myProfile.data.photo}`}} style={styles.ava} />
                    <View >
                        <Text style={styles.name}>{myProfile.data.user_name}</Text>
                        <Text style={styles.number}>{myProfile.data.telphone}</Text>
                    </View>
                </TouchableOpacity>
                <View>
                    <TouchableOpacity onPress={() => navigation.navigate('ChatList')} style={styles.contact}>
                        <Icon name="contacts"/>
                        <Text style={styles.TxtDrawer}>Kontak</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('CallLog')} style={styles.call}>
                        <Icon name="call"/>
                        <Text style={styles.TxtDrawer}>Riwayat panggilan</Text>
                    </TouchableOpacity>
                </View>
            </DrawerContentScrollView>
            <TouchableOpacity style={styles.bottomDrawer} onPress={() => dispatch({ type: 'LOGOUT' })}>
                <Text style={styles.sign}>Sign out</Text>
                <Icon name='log-out' size={25}/>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    headDrawer:{
        backgroundColor: '#421908',
        flexDirection: 'row',
        padding: 20,
        alignItems: 'center'
    },
    ava:{
        height: 75,
        width: 75,
        borderRadius: 50
    },
    name:{
        marginLeft: 10,
        fontSize: 20,
        color: '#ffffff',
        fontWeight: 'bold'
    },
    number:{
        marginLeft: 10,
        color: 'gray',
    },
    contact:{
        flexDirection: 'row',
        alignItems: 'center',
        margin: 10,
    },
    TxtDrawer:{
        fontSize: 18,
        marginLeft: 15
    },
    call:{
        flexDirection: 'row',
        alignItems: 'center',
        margin: 10,
    },
    bottomDrawer:{
        bottom: 20,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    sign:{
        fontSize: 20,
        marginRight: 5,
    }
})

