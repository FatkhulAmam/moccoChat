import React, {useEffect, useState} from 'react';
import {StyleSheet, View, TouchableOpacity, StatusBar} from 'react-native';
import {Container, Button, Text, Form, Item, Input} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';

import {editMyName} from '../redux/action/profile';

const ChangeName = () => {
  const navigation = useNavigation();
  const token = useSelector((state) => state.auth.token);
  const [user_name, setName] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(user_name);
  });

  const InputName = async () => {
    await dispatch(editMyName(token, user_name));
  };

  return (
    <>
      <StatusBar backgroundColor={'#421908'} />
      <Container style={styles.parrent}>
        <Form>
          <Item style={styles.name}>
            <Input
              placeholder="user name"
              value={user_name}
              onChangeText={(user_name) => setName(user_name)}
            />
          </Item>
        </Form>
        <Text style={styles.textBottom} note>
          please tell your name{' '}
        </Text>
      </Container>
      <View style={styles.btnCheck}>
        <Button style={styles.check} onPress={InputName}>
          <Icon name="check" size={30} color="#ffffff" />
        </Button>
      </View>
    </>
  );
};

export default ChangeName;

const styles = StyleSheet.create({
  parrent: {
    paddingRight: 1,
    flex: 1,
    backgroundColor: '#fff5e7',
    paddingTop: 25,
  },
  name: {
    width: 325,
    borderWidth: 1,
    marginTop: 25,
  },
  textBottom: {
    fontSize: 17,
    marginLeft: 15,
    marginTop: 20,
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
});
