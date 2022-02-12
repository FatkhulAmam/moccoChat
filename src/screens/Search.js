import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  TouchableOpacity,
  Image,
  StatusBar,
  TextInput,
} from 'react-native';
import {Container, Button, Header, Body, Text} from 'native-base';
import Icon from 'react-native-ionicons';
import {useNavigation} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';
import {API_URL} from '@env';

import {getContactAction, searchContact} from '../redux/action/contact';

class Item extends React.Component {
  render() {
    return (
      <TouchableOpacity onPress={this.props.movePage}>
        <View style={styles.renderParent} source={this.props.avatar}>
          <Image style={styles.pict} />
          <View>
            <Text style={styles.name}>{this.props.name}</Text>
            <Text style={styles.status}>{this.props.phone}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

const Landing = (props) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
  // const verification = useSelector((state) => state.vericication);
  // const contactData = useSelector((state) => state.contact);
  const searchResult = useSelector((state) => state.search);
  const [searchValues, setSearchValues] = useState('');

  useEffect(() => {
    console.log(dispatch(getContactAction(token)));
    console.log(API_URL);
  }, [dispatch, token]);

  const submitSearch = () => {
    dispatch(searchContact(token, searchValues));
  };

  return (
    <>
      <Header style={styles.header} transparent>
        <StatusBar backgroundColor={'#dbc9a0'} />
        <Button transparent onPress={() => props.navigation.goBack()}>
          <Icon name="arrow-back" size={30} color="#421908" />
        </Button>
        <Body>
          <View style={styles.searchContainer}>
            <TextInput
              style={styles.search}
              placeholder="Search"
              onChangeText={() => setSearchValues(searchValues)}
            />
            <TouchableOpacity style={styles.icon} onPress={submitSearch}>
              <Icon name="search" size={30} color="#421908" />
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
          renderItem={({item, index}) => (
            <Item
              name={item.user_name ? item.user_name : item.telphone}
              phone={item.telphone}
              avatar={{uri: `${API_URL}${item.photo}`}}
              movePage={() => navigation.navigate('ChatDetail', item.id)}
            />
          )}
        />
      </Container>
    </>
  );
};

export default Landing;

const styles = StyleSheet.create({
  search: {
    width: '100%',
    height: 40,
    borderBottomWidth: 1,
    borderColor: '#421908',
    fontSize: 16,
    marginLeft: 13,
    marginTop: 5,
    color: '#421908',
  },
  searchContainer: {
    width: '95%',
  },
  icon: {
    position: 'absolute',
    top: 10,
    right: 15,
  },
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
  },
  kontakTxt: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#421908',
    backgroundColor: '#fff5e7',
    padding: 10,
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
    fontWeight: 'bold',
  },
  status: {
    marginLeft: 10,
    color: '#a7bfd0',
  },
});
