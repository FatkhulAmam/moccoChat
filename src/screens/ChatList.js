import React, { useState, useEffect } from 'react'
import { StyleSheet, View, FlatList, TouchableOpacity, Image } from 'react-native'
import { Container, Button, Card, CardItem, Body, Header, Title, Right, Text, Left } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome'

class Item extends React.Component {
    render() {
        return (
            <TouchableOpacity onPress={this.props.movePage}>
                <View style={styles.renderParent}>
                    <Image style={styles.pict} />
                    <View>
                        <View style={styles.headerChat}>
                            <Text style={styles.name}>{this.props.name}</Text>
                            <Text style={styles.date} note>time</Text>
                        </View>
                        <Text style={styles.status} note>{this.props.status}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
}

const ChatList = () => {
    const [data, setData] = useState([
        {
            name: 'ilham',
            status: 'Ok Syapp'
        },
        {
            name: 'amam',
            status: 'jos'
        },
        {
            name: 'sijo',
            status: 'Oraapa'
        },
        {
            name: 'lek',
            status: 'Ngesok Wae'
        },
        {
            name: 'lek',
            status: 'OKOK'
        },
        {
            name: 'lek',
            status: 'Kapan Kui??'
        }
    ]
    )
    return (
        <>
            <Header style={styles.header} transparent>
                <Button transparent onPress={() => navigation.goBack()}>
                    <Icon name='bars' size={22} color="#ffffff" />
                </Button>
                <Title style={styles.title}>Mocco Chat</Title>
                <Right />
                <Button transparent onPress={() => navigation.navigate('')}>
                    <Icon name='search' size={22} color="#ffffff" />
                </Button>
            </Header>
            <Container style={styles.parrent}>
                <FlatList
                    style={styles.kontakData}
                    data={data}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item, index }) => (
                        <Item
                            name={item.name}
                            status={item.status}
                            movePage={() => navigation.navigate("ChatList")}
                        />
                    )}
                />
                <View style={styles.btnCheck}>
                    <Button style={styles.check} onPress={() => navigation.navigate("ChatDetail")}>
                        <Icon name='pencil' size={30} color='#ffffff' />
                    </Button>
                </View>
            </Container>
        </>
    )
}

export default ChatList

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#1c3661',
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
    parrent: {
        flex: 1,
        backgroundColor: "#e8e8e8",
    },
    kontakData: {
        backgroundColor: '#ffffff',
        marginRight: 10

    },
    btnCheck: {
        position: 'absolute',
        bottom: 25,
        right: 15,
        flexDirection: 'row'
    },
    renderParent: {
        flexDirection: 'row',
        margin: 10,
        alignItems: 'center',
    },
    check: {
        width: 65,
        height: 65,
        borderRadius: 50,
        justifyContent: 'center',
        backgroundColor: '#1c3661'
    },
    pict: {
        width: 65,
        height: 65,
        backgroundColor: '#8e8e8e',
        borderRadius: 50,
    },
    headerChat:{
        flexDirection: 'row',
    },
    name: {
        fontSize: 20,
        marginLeft: 10,
        fontWeight: 'bold'
    },
    status: {
        marginLeft: 10,
        fontSize: 17
    },
    date:{
        right: 0,
        backgroundColor: '#000000'
    }
})
