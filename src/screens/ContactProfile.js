import React, { useState, useEffect } from 'react'
import { StyleSheet, Image, View, StatusBar, Switch } from 'react-native'
import { Button, Text } from 'native-base';
import Icon from 'react-native-ionicons'
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux'

import avatar from '../assets/images/profile.png'
import {getContactDetail} from '../redux/action/contact'

const MyProfile = ({route}) => {
    const navigation = useNavigation()
    const dispatch = useDispatch()
    const token = useSelector(state => state.auth.token)
    const dataContact = useSelector(state => state.detailContact.data)
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    
    useEffect(() => {
        dispatch(getContactDetail(token, route.params))
        console.log(route.params);
    },[dispatch, token, route.params])

    return (
        <>
            <StatusBar translucent backgroundColor="transparent" />
            <View>
                <Image style={styles.avatar} source={avatar} color="#000000" />
                <Icon style={styles.back} android="arrow-back" size={35} color="#ffffff" />
                <Icon style={styles.call} android="call" size={30} color="#ffffff" />
                <Text style={styles.name}>{dataContact.user_name ? dataContact.user_name : detailContact.telphone}</Text>
                <Text style={styles.status}>online</Text>
            </View>
            <View style={styles.div}>
                <Text style={styles.info}>Info</Text>
                <View style={styles.accountInfo}>
                    <Text style={styles.number}>{dataContact.telphone}</Text>
                    <Text style={styles.note}>ponsel</Text>
                    <Text style={styles.txtbio}>{dataContact.bio ? dataContact.bio : "contact Bio "}</Text>
                    <Text style={styles.bio}>bio</Text>
                </View>
                <View style={styles.notifContainer}>
                    <View style={styles.labelNotif}>
                        <Text style={styles.notif}>Notification</Text>
                        <Text style={styles.notifStatus}>hidup</Text>
                    </View>
                    <View style={styles.containerSwitch}>
                        <Switch
                            trackColor={{ false: "#767577", true: "#fff5e7" }}
                            thumbColor={isEnabled ? "#ce8b5c" : "#f4f3f4"}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={toggleSwitch}
                            value={isEnabled}
                        />
                    </View>
                </View>
            </View>
            <View style={styles.btnCheck}>
                <Button style={styles.check} onPress={() => navigation.navigate("ChatDetail", dataContact.id)}>
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
    accountInfo: {
        borderBottomWidth: 1,
        paddingBottom: 20,
    },
    number: {
        marginTop: 20,
        fontSize: 20,
        color: '#ecccb4'
    },
    txtbio: {
        marginTop: 20,
        fontSize: 20,
        color: '#ecccb4'
    },
    notif: {
        fontSize: 20,
        color: '#ecccb4'
    }, 
    btnCheck: {
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
        backgroundColor: '#ecccb4'
    },
    note: {
        color: '#fff5e7'
    },
    bio: {
        color: '#fff5e7'
    },
    labelNotif:{
        borderRightWidth: 1,
        width: 250,
    },
    notifStatus: {
        color: '#fff5e7'
    },
    notifContainer: {
        height: 70,
        flexDirection: 'row',
        alignItems: 'center',
        top: 0
    },
    containerSwitch:{
        flex: 1,
        justifyContent: 'center'
    }
})
