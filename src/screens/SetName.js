import React, {useEffect, useState} from 'react';
import {StyleSheet, View, StatusBar} from 'react-native';
import {
  Container,
  Button,
  Text,
  Form,
  Item,
  Input,
  Header,
  Title,
  Right,
} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';
import {Formik} from 'formik';
import * as yup from 'yup';

import {editMyName} from '../redux/action/profile';
const registerValidationSchema = yup.object().shape({
  user_name: yup.string().required('nama pengguna dibutuhkan'),
});

import {getMyProfile} from '../redux/action/profile';
import LoadingIndicator from '../components/ModalLoading';

const ChangeName = () => {
  const navigation = useNavigation();
  const token = useSelector((state) => state.auth.token);
  const profile = useSelector((state) => state.profile);
  const dispatch = useDispatch();

  const InputName = async (data) => {
    await dispatch(editMyName(token, data));
    await dispatch(getMyProfile(token));
    navigation.navigate('LandingPage');
  };

  return (
    <>
      <Header style={styles.header} transparent>
        <StatusBar backgroundColor={'#421908'} />
        <Title style={styles.title}>Your Name</Title>
        <Right />
      </Header>
      {profile.isLoading === false ? (
        <Formik
          validationSchema={registerValidationSchema}
          initialValues={{
            user_name: '',
          }}
          onSubmit={(values) => InputName(values.user_name)}>
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            isValid,
            touched,
          }) => (
            <Container style={styles.parrent}>
              <Form>
                <Item style={styles.name}>
                  <Input
                    placeholder="user name"
                    value={values.user_name}
                    onChangeText={handleChange('user_name')}
                    onBlur={handleBlur('user_name')}
                  />
                </Item>
                {touched.user_name && errors.user_name && (
                  <Text style={styles.textError}>{errors.user_name}</Text>
                )}
              </Form>
              <Text style={styles.textBottom} note>
                please tell your name{' '}
              </Text>
              <View style={styles.btnCheck}>
                <Button
                  style={styles.check}
                  onPress={handleSubmit}
                  disabled={!isValid}>
                  <Icon name="check" size={30} color="#ffffff" />
                </Button>
              </View>
            </Container>
          )}
        </Formik>
      ) : (
        <LoadingIndicator />
      )}
    </>
  );
};

export default ChangeName;

const styles = StyleSheet.create({
  parrent: {
    paddingRight: 1,
    flex: 1,
    backgroundColor: '#fff5e7',
  },
  header: {
    backgroundColor: '#421908',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    marginLeft: 10,
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
  textError: {
    fontSize: 10,
    color: 'red',
    fontStyle: 'italic',
    marginLeft: 20,
  },
});
