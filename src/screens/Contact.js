import React, {useEffect} from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  TouchableOpacity,
  Image,
  StatusBar,
} from 'react-native';
import {Container, Button, Header, Title, Right, Text} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';
import {API_URL} from '@env';

import {getContactAction} from '../redux/action/contact';
import avatar from '../assets/images/profile.png';

class Item extends React.Component {
  render() {
    return (
      <TouchableOpacity onPress={this.props.movePage}>
        <View style={styles.renderParent}>
          <Image style={styles.pict} source={this.props.avatar} />
          <View>
            <Text style={styles.name}>{this.props.name}</Text>
            <Text style={styles.status} note>{this.props.phone}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

const ContactScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
  // const verification = useSelector((state) => state.vericication);
  const contactData = useSelector((state) => state.contact);

  useEffect(() => {
    console.log(dispatch(getContactAction(token)));
    console.log(API_URL);
  }, [dispatch, token]);

  return (
    <>
      <Header style={styles.header} transparent>
        <StatusBar backgroundColor={'#dbc9a0'} />
        <Icon
          name="bars"
          size={22}
          color="#421908"
          onPress={() => navigation.openDrawer()}
        />
        <Title style={styles.title}>MocContact</Title>
        <Right />
        <Button transparent onPress={() => navigation.navigate('Search')}>
          <Icon name="search" size={22} color="#421908" />
        </Button>
      </Header>
      <Container style={styles.parrent}>
        <FlatList
          style={styles.kontakData}
          data={contactData.data}
          keyExtractor={(item, index) => index.toString()}
          scrollEnabled={false}
          renderItem={({item, index}) => (
            <Item
              name={item.user_name ? item.user_name : item.telphone}
              phone={item.telphone}
              avatar={item.photo ? {uri: `${API_URL}${item.photo}`} : avatar}
              movePage={() => navigation.navigate('ChatDetail', item.id)}
            />
          )}
        />
      </Container>
    </>
  );
};

export default ContactScreen;

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#dbc9a0',
    alignItems: 'center',
  },
  parrent: {
    flex: 1,
    backgroundColor: '#e8e8e8',
  },
  title: {
    fontSize: 25,
    marginLeft: 25,
    color: '#421908'
  },
  kontakTxt: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1c3661',
    backgroundColor: '#dbc9a0',
    padding: 10,
  },
  kontakData: {
    backgroundColor: '#fff5e7',
    paddingLeft: 10,
  },
  renderParent: {
    flexDirection: 'row',
    margin: 5,
    alignItems: 'center',
  },
  btnCheck: {
    position: 'absolute',
    bottom: 25,
    right: 15,
    flexDirection: 'row',
  },
  check: {
    width: 65,
    height: 65,
    borderRadius: 50,
    justifyContent: 'center',
    backgroundColor: '#421908',
  },
  pict: {
    width: 50,
    height: 50,
    backgroundColor: '#8e8e8e',
    borderRadius: 50,
  },
  name: {
    fontSize: 18,
    marginLeft: 10,
    fontWeight: 'bold',
  },
  status: {
    marginLeft: 10,
    fontSize: 14
  },
});
