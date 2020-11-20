import React, { useState, useEffect } from 'react'
import { StyleSheet, View, FlatList, TouchableOpacity, Image, StatusBar } from 'react-native'
import { Container, Button, Card, CardItem, Body, Header, Title, Right, Text, Left } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome'
import { useNavigation } from '@react-navigation/native';

class Item extends React.Component {
    render() {
        return (
            <>
                <View style={styles.renderParent}>
                    <TouchableOpacity>
                        <Image style={styles.pict} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.props.movePage}>
                        <View>
                            <Card style={styles.card} transparent>
                                <View style={styles.headerChat}>
                                    <Text style={styles.name}>{this.props.name}</Text>
                                    <Right />
                                    <Icon name="check"/>
                                    <Text style={styles.date} note>time</Text>
                                </View>
                                <View style={styles.headerChat}>
                                    <Text style={styles.status} note>{this.props.status}</Text>
                                    <Right />
                                    <Text style={styles.mount}>{this.props.mount}</Text>
                                </View>
                            </Card>
                        </View>
                    </TouchableOpacity>
                </View>
            </>
        )
    }
}

const ChatList = () => {
    const navigation = useNavigation()
    const [data, setData] = useState([
        {
            name: 'ilham',
            status: 'Ok Syapp',
            mount: '2'
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
            <StatusBar backgroundColor={'#1c3661'}/>
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
                    data={data}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item, index }) => (
                        <Item
                            name={item.name}
                            status={item.status}
                            mount={item.mount}
                            movePage={() => navigation.navigate("ChatDetail")}
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
    title: {
        fontSize: 25,
        marginLeft: 25
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
    headerChat: {
        flexDirection: 'row',
    },
    name: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    status: {
        fontSize: 17
    },
    card: {
        borderBottomWidth: 1,
        width: 270,
        padding: 12
    },
    mount:{
        backgroundColor: 'lightblue',
        width: 25,
        height: 25,
        borderRadius: 15,
        textAlign: 'center',
    }
})
