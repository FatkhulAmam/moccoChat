import React, {useEffect} from 'react';
import {StyleSheet, View, FlatList, StatusBar} from 'react-native';
import {Container, Button, Header, Title, Right} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import {API_URL} from '@env';
import moment from 'moment';
import PushNotification, {Importance} from 'react-native-push-notification';
import io from 'socket.io-client';
import jwt_decode from 'jwt-decode';

import {useNavigation} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';
import {getChatList} from '../redux/action/chat';
import ListChat from '../components/ListChat';
import avatar from '../assets/images/profile.png';
import Firebase from '@react-native-firebase/app';
import {addDeviceToken, addSocketId} from '../redux/action/profile';

const ChatList = (props) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
  const {id} = jwt_decode(token);
  const profileId = useSelector((state) => state.profile.data.id);
  const {dataList} = useSelector((state) => state.chat);

  useEffect(() => {
    const device_token = Firebase.messaging().getToken();
    dispatch(addDeviceToken(token, device_token));
    dispatch(addSocketId(token, props.route.params.socket.id));
    dispatch(getChatList(token));
    const socket = io(`${API_URL}`);
    socket.on(id, ({sender, message}) => {
      PushNotification.localNotification({
        id: sender,
        channelId: 'Mocco-Chat-App',
        message: message,
        title: 'Mocco Chat',
      });
      dispatch(getChatList(token));
    });
    return () => {
      socket.close();
    };
  }, [dispatch, id, token]);

  // const nextPage = async () => {
  //   const {nextLink} = data.pageInfo;
  //   if (nextLink) {
  //     const res = await http(token).get('chat?page=2');
  //     const {results} = res.data;
  //     const newData = {
  //       ...dataNew,
  //       results: [...dataNew.results, ...results],
  //       pageInfo: res.data.pageInfo,
  //     };
  //     console.log(newData);
  //     setDataNew(newData);
  //   }
  // };

  return (
    <>
      <Header style={styles.header} transparent>
        <StatusBar backgroundColor={'#dbc9a0'} barStyle="dark-content" />
        <Button transparent onPress={() => navigation.openDrawer()}>
          <Icon name="bars" size={22} color="#421908" />
        </Button>
        <Title style={styles.title}>Mocco Chat</Title>
        <Right />
        <Button transparent onPress={() => navigation.navigate('Search')}>
          <Icon name="search" size={22} color="#421908" />
        </Button>
      </Header>
      <Container style={styles.parrent}>
        <View
          style={{
            borderBottomColor: '#42190875',
            borderBottomWidth: 2.5,
          }}
        />
        <FlatList
          data={dataList.results}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item, index}) =>
            profileId !== item.recipient ? (
              <ListChat
                name={
                  item.recipientDetail.user_name
                    ? item.recipientDetail.user_name
                    : item.recipientDetail.telphone
                }
                lastMessage={item.message}
                time={moment(item.createdAt).format('LT')}
                avatar={
                  item.recipientDetail.photo
                    ? {uri: `${API_URL}${item.recipientDetail.photo}`}
                    : avatar
                }
                movePageChat={() =>
                  navigation.navigate('ChatDetail', item.recipientDetail.id)
                }
                moveDetailContact={() =>
                  navigation.navigate('ContactProfile', item.recipientDetail.id)
                }
              />
            ) : (
              <ListChat
                name={
                  item.senderDetail.user_name
                    ? item.senderDetail.user_name
                    : item.senderDetail.telphone
                }
                lastMessage={item.message}
                time={moment(item.createdAt).format('LT')}
                avatar={
                  item.senderDetail.photo
                    ? {uri: `${API_URL}${item.senderDetail.photo}`}
                    : avatar
                }
                movePageChat={() =>
                  navigation.navigate('ChatDetail', item.senderDetail.id)
                }
                moveDetailContact={() =>
                  navigation.navigate('ContactProfile', item.senderDetail.id)
                }
              />
            )
          }
          // onEndReached={nextPage}
          // onEndReachedThreshold={0.5}
        />
        <View style={styles.btnCheck}>
          <Button
            style={styles.check}
            onPress={() => navigation.navigate('Contact')}>
            <Icon name="pencil" size={30} color="#dbc9a0" />
          </Button>
        </View>
      </Container>
    </>
  );
};

export default ChatList;

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#dbc9a0',
    alignItems: 'center',
  },
  title: {
    color: '#421908',
    fontSize: 20,
    marginLeft: 25,
  },
  parrent: {
    backgroundColor: '#fff5e7',
  },
  btnCheck: {
    position: 'absolute',
    bottom: 25,
    right: 15,
    flexDirection: 'row',
  },
  renderParent: {
    flexDirection: 'row',
    marginLeft: 10,
    marginTop: 10,
    alignItems: 'center',
  },
  check: {
    width: 60,
    height: 60,
    borderRadius: 50,
    justifyContent: 'center',
    backgroundColor: '#421908',
  },
  pict: {
    width: 55,
    height: 55,
    backgroundColor: '#8e8e8e',
    borderRadius: 50,
  },
  headerChat: {
    flexDirection: 'row',
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  status: {
    fontSize: 17,
  },
  press: {
    borderBottomWidth: 1,
    width: 270,
    marginLeft: 10,
    borderBottomColor: '#e8e8e8',
  },
  mount: {
    backgroundColor: 'lightblue',
    width: 25,
    height: 25,
    borderRadius: 15,
    textAlign: 'center',
  },
});
