import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  TouchableOpacity,
  Image,
  TextInput,
  StatusBar,
} from 'react-native';
import {Button, Header, Right, Text} from 'native-base';
import {useNavigation} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';
import Icon from 'react-native-ionicons';
import jwt_decode from 'jwt-decode';
import io from 'socket.io-client';
import {API_URL} from '@env';

import MessageBubble from '../components/bubbleChat';
import {sendChatAction, getChatDetail, destroyChat} from '../redux/action/chat';
import {getContactDetail} from '../redux/action/contact';
import avatar from '../assets/images/profile.png';

const ChatDetail = ({route}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
  const {id} = jwt_decode(token);
  const {dataDetail} = useSelector((state) => state.chat);
  const dataContact = useSelector((state) => state.detailContact.data);

  const [recipient, setRecipient] = useState(route.params);
  const [messages, setMessages] = useState(''); 

  useEffect(() => {
    const socket = io(`${API_URL}`);
    socket.on(id, (value) => {
      dispatch(getChatDetail(token, route.params));
    })
    dispatch(getChatDetail(token, route.params));
    dispatch(getContactDetail(token, route.params));
  }, [dispatch, token, route.params]);

  const sendMessages = async () => {
    await dispatch(sendChatAction(token, messages, recipient));
    // await dispatch(destroyChat());
    return dispatch(getChatDetail(token, route.params));
  };

  // const nextPage = async () => {
  //   const {nextLink} = data.pageInfo;
  //   if (nextLink) {
  //     const res = axios.get(nextLink);
  //     const {results} = res.data;
  //     const newData = {
  //       ...chat,
  //       results: [...chat.results, ...results],
  //       pageInfo: res.data.pageInfo,
  //     };
  //     setChat(newData);
  //   }
  // };

  return (
    <>
      <TouchableOpacity
        onPress={() => navigation.navigate('ContactProfile', dataContact.id)}>
        <Header style={styles.header} transparent>
          <StatusBar
            backgroundColor={'#dbc9a0'} 
            barStyle="dark-content"
          />
          <Button transparent onPress={() => navigation.navigate('Chat')}>
            <Icon name="arrow-back" size={30} color="#421908" />
          </Button>
          <Image
            style={styles.avatar}
            source={
              dataContact.photo
                ? {uri: `${API_URL}${dataContact.photo}`}
                : avatar
            }
            color="#000000"
          />
          <View style={styles.identitiy}>
            <Text style={styles.name}>
              {dataContact.user_name
                ? dataContact.user_name
                : dataContact.telphone}
            </Text>
            <Text style={styles.status}>Online</Text>
          </View>
          <Right />
          <Button transparent onPress={() => navigation.navigate('')}>
            <Icon name="more" size={35} color="#421908" />
          </Button>
        </Header>
      </TouchableOpacity>
      <View style={styles.parrent}>
        <FlatList
          data={dataDetail}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item, index}) => (
            <MessageBubble
              mine={item.sender === route.params ? true : false}
              text={item.message}
            />
          )}
          inverted
        />
        <View style={styles.inputChat}>
            <Icon name="happy" size={30} color="#8e8e8e" />
            <TextInput
              style={styles.textInput}
              placeholder="Pesan"
              value={messages}
              multiline={true}    
              onChangeText={(messages) => setMessages(messages)}
            />
            <TouchableOpacity transparent onPress={sendMessages}>
              <Icon name="send" color="#8e8e8e" style={{marginLeft: 5}} />
            </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default ChatDetail;

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#dbc9a0',
    alignItems: 'center',
    height: 100,
  },
  parrent: {
    flex: 1,
    backgroundColor: '#e8e8e8',
    paddingBottom: 50,
  },
  title: {
    fontSize: 25,
    marginLeft: 25,
  },
  avatar: {
    width: 50,
    height: 50,
    backgroundColor: '#e8e8e8',
    borderRadius: 50,
    marginLeft: 20,
  },
  identitiy: {
    marginLeft: 10,
  },
  name: {
    color: '#421908',
    fontSize: 20,
    fontWeight: 'bold',
  },
  status: {
    color: '#210D04',
  },
  inputChat: {
    flexDirection: 'row',
    position: 'absolute',
    paddingVertical: 2,
    paddingHorizontal: 15,
    bottom: 5,
    width: '100%',
    backgroundColor: '#ecccb4',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  textInput: {
    width: '85%',
    fontSize: 16,
    marginLeft: 5,
  },
  write: {
    flexDirection: 'row',
    width: 230,
  },
});
