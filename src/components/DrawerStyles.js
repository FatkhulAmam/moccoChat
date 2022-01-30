import React, {useEffect} from 'react';
import {View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {Text, Button} from 'native-base';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import {useNavigation} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';
import Icon from 'react-native-ionicons';
import {API_URL} from '@env';

import avatar from '../assets/images/profile.png';
import {getMyProfile} from '../redux/action/profile';
import {logout} from '../redux/action/auth';
import {destroyChat} from '../redux/action/chat';
import {destroyProfile} from '../redux/action/profile';
import {destroyContact} from '../redux/action/contact';

export function DrawerContent(props) {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const myProfile = useSelector((state) => state.profile);
  const token = useSelector((state) => state.auth.token);
  useEffect(() => {
    dispatch(getMyProfile(token));
  }, [dispatch, token]);

  const logoutPres = () => {
    dispatch(logout());
    dispatch(destroyChat());
    dispatch(destroyProfile());
    dispatch(destroyContact());
  };

  return (
    <View style={{flex: 1, backgroundColor: '#dbc9a0', marginTop: -5}}>
      <DrawerContentScrollView {...props}>
        <TouchableOpacity
          style={styles.headDrawer}
          onPress={() => navigation.navigate('MyProfile')}>
          <View style={{borderWidth: 2, borderColor: '#421908', borderRadius: 50}}>
          <Image
            source={
              myProfile.data.photo
                ? {uri: `${API_URL}${myProfile.data.photo}`}
                : avatar
            }
            style={styles.ava}
          /></View>
          <View>
            <Text style={styles.name}>{myProfile.data.user_name}</Text>
            <Text style={styles.number}>{myProfile.data.telphone}</Text>
          </View>
        </TouchableOpacity>
        <View
          style={{
            marginHorizontal: 10,
            borderBottomColor: "#42190825",
            borderBottomWidth: 5,
            borderRadius: 10
          }}
        />
        <View>
          <TouchableOpacity
            onPress={() => navigation.navigate('contact')}
            style={styles.contact}>
            <Icon name="contacts" color='#421908' />
            <Text style={styles.TxtDrawer}>Kontak</Text>
          </TouchableOpacity>
        <View
          style={{
            marginLeft: 10,
            marginRight: 170,
            borderBottomColor: "#42190825",
            borderBottomWidth: 2,
            borderRadius: 10
          }}
        />
          <TouchableOpacity
            onPress={() => navigation.navigate('CallLog')}
            style={styles.call}>
            <Icon name="call" color='#421908'/>
            <Text style={styles.TxtDrawer}>Riwayat panggilan</Text>
          </TouchableOpacity>
        <View
          style={{
            marginLeft: 10,
            marginRight: 95,
            borderBottomColor: "#42190825",
            borderBottomWidth: 2,
            borderRadius: 10
          }}
        />
        </View>
      </DrawerContentScrollView>
      <TouchableOpacity style={styles.bottomDrawer} onPress={logoutPres}>
        <Text style={styles.sign}>Sign out</Text>
        <Icon name="log-out" size={25} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  headDrawer: {
    backgroundColor: '#dbc9a0',
    flexDirection: 'row',
    padding: 20,
    alignItems: 'center',
  },
  ava: {
    height: 65,
    width: 65,
    borderRadius: 50,
    margin: 2
  },
  name: {
    marginLeft: 10,
    fontSize: 22.5,
    color: '#421908',
    fontWeight: 'bold',
  },
  number: {
    fontSize: 13,
    marginLeft: 10,
    color: 'gray',
  },
  contact: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
  },
  TxtDrawer: {
    color: '#421908',
    fontSize: 16,
    marginLeft: 15,
  },
  call: {
    color: '#421908',
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
  },
  bottomDrawer: {
    bottom: 20,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  sign: {
    fontSize: 18,
    marginRight: 5,
  },
});
