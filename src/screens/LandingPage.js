import React, { useState, useEffect } from 'react'
import { StyleSheet, View, FlatList, TouchableOpacity, Image } from 'react-native'
import { Container, Button, Card, CardItem, Body, Header, Title, Right, Text } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome'
import { useNavigation } from '@react-navigation/native';

class Item extends React.Component {
    render() {
        return (
            <TouchableOpacity onPress={this.props.movePage}>
                <View style={styles.renderParent}>
                    <Image style={styles.pict}/>
                    <View>
                        <Text style={styles.name}>{this.props.name}</Text>
                        <Text style={styles.status}>{this.props.status}</Text>
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
            status: 'online'
        },
        {
            name: 'amam',
            status: 'online'
        },
        {
            name: 'sijo',
            status: 'online'
        },
        {
            name: 'lek',
            status: 'online'
        },
        {
            name: 'lek',
            status: 'online'
        },
        {
            name: 'lek',
            status: 'online'
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
                <Card transparent>
                    <CardItem style={styles.card}>
                        <Body style={styles.cardHeader}>
                            <Text style={styles.welcome}>Selamat Data di Mocco</Text>
                            <Text style={styles.textBanner} note>Mulai Obrolan Dengan mengetuk tombol pensil dipojok kanan bawah</Text>
                        </Body>
                    </CardItem>
                </Card>
                <Text style={styles.kontakTxt}>Kontak anda di Mocco</Text>
                <FlatList
                    style={styles.kontakData}
                    data={data}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item, index }) => (
                        <Item
                            name={item.name}
                            status={item.status}
                        />
                    )}
                />
                <View style={styles.btnCheck}>
                    <Button style={styles.check} onPress={() => navigation.navigate("LandingPage")}>
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
    card: {
        height: 200,
        marginTop: -5,
    },
    cardHeader: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    welcome: {
        fontSize: 25,
        fontWeight: 'bold'
    },
    textBanner: {
        textAlign: 'center',
        fontSize: 18
    },
    kontakTxt: {
        fontSize: 20,
        fontWeight: 'bold',
        color: "#1c3661",
        marginTop: 10,
        backgroundColor: '#ffffff',
        padding: 10
    },
    kontakData:{
        backgroundColor: '#ffffff',
        paddingLeft: 15,
        marginRight: 10
        
    },
    btnCheck: {
        position: 'absolute',
        bottom: 25,
        right: 15,
        flexDirection: 'row'
    },
    renderParent:{
        flexDirection: 'row',
        margin: 5,
        alignItems: 'center',
    },
    check: {
        width: 65,
        height: 65,
        borderRadius: 50,
        justifyContent: 'center',
        backgroundColor: '#1c3661'
    },
    pict:{
        width: 70,
        height: 70,
        backgroundColor: '#8e8e8e',
        borderRadius: 50,
    },
    name:{
        fontSize: 20,
        marginLeft: 10,
        fontWeight: 'bold'
    },
    status:{
        marginLeft: 10,
        color: 'blue',
    }
})
