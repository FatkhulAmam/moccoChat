import React, { useState, useEffect } from 'react'
import { StyleSheet, View, FlatList, TouchableOpacity, Image, StatusBar, TextInput } from 'react-native'
import { Container, Button, Header, Body, Right, Text } from 'native-base';
import Icon from 'react-native-ionicons'
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux'
import { API_URL } from '@env'

import { getContactAction, searchContact } from '../redux/action/contact';

class Item extends React.Component {
    render() {
        return (
            <TouchableOpacity onPress={this.props.movePage}>
                <StatusBar backgroundColor={'#421908'} />
                <View style={styles.renderParent} source={this.props.avatar}>
                    <Image style={styles.pict} />
                    <View>
                        <Text style={styles.name}>{this.props.name}</Text>
                        <Text style={styles.status}>{this.props.phone}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
}

const Landing = () => {
    const navigation = useNavigation()
    const dispatch = useDispatch()
    const token = useSelector(state => state.auth.token)
    const verification = useSelector(state => state.vericication)
    const contactData = useSelector(state => state.contact)
    const searchResult = useSelector(state => state.search)
    const [searchValues, setSearchValues] = useState('')

    useEffect(() => {
        console.log(dispatch(getContactAction(token)));
        console.log(API_URL)
    }, [dispatch, token])

    const submitSearch = () => {
        dispatch(searchContact(token, searchValues))
    }

    return (
        <>
            <Header style={styles.header} transparent>
                <Button transparent onPress={() => this.props.navigation.goBack()}>
                    <Icon name='arrow-back' size={30} color="#ffffff" />
                </Button>
                <Body>
                    <View style={{ position: 'relative' }}>
                        <TextInput style={styles.search} placeholder="Search" onChangeText={searchValues => setSearchValues(searchValues)} />
                        <TouchableOpacity style={styles.icon} onPress={submitSearch}>
                            <Icon name="search" size={30} color="#ffffff"/>
                        </TouchableOpacity>
                    </View>
                </Body>
            </Header>
            <Container style={styles.parrent}>
                <Text style={styles.kontakTxt}>Cari nama kontak anda di Mocco</Text>
                <FlatList
                    style={styles.kontakData}
                    data={searchResult.data}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item, index }) => (
                        <Item
                            name={(item.user_name ? item.user_name : item.telphone)}
                            phone={item.telphone}
                            avatar={{ uri: `${API_URL}${item.photo}` }}
                            movePage={() => navigation.navigate("ChatDetail", item.id)}
                        />
                    )}
                />
            </Container>
        </>
    )
}

export default Landing

const styles = StyleSheet.create({
    search: {
        width: 300,
        height: 40,
        borderWidth: 1,
        borderColor: "#C8C8C8",
        borderRadius: 50,
        paddingLeft: 15,
        fontSize: 20,
        marginLeft: 13,
        marginTop: 5,
        color: '#ffffff'
    },
    icon: {
        position: 'absolute',
        top: 10,
        right: 15,
    },
    header: {
        backgroundColor: '#421908',
        alignItems: 'center'
    },
    parrent: {
        flex: 1,
        backgroundColor: "#e8e8e8",
    },
    title: {
        fontSize: 25,
        marginLeft: 25
    },
    kontakTxt: {
        fontSize: 20,
        fontWeight: 'bold',
        color: "#1c3661",
        backgroundColor: '#fff5e7',
        padding: 10
    },
    kontakData: {
        backgroundColor: '#fff5e7',
        paddingLeft: 15,

    },
    renderParent: {
        flexDirection: 'row',
        margin: 5,
        alignItems: 'center',
    },
    pict: {
        width: 65,
        height: 65,
        backgroundColor: '#8e8e8e',
        borderRadius: 50,
    },
    name: {
        fontSize: 20,
        marginLeft: 10,
        fontWeight: 'bold'
    },
    status: {
        marginLeft: 10,
        color: '#a7bfd0',
    }
})
