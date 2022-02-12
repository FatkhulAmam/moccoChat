import React, {useState} from 'react';
import {StyleSheet, View, StatusBar, Alert} from 'react-native';
import {Button, Text, Form, Item, Input} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useDispatch, useSelector} from 'react-redux';
import {Formik} from 'formik';
import * as yup from 'yup';
import {API_URL} from '@env';

import {makeAccount} from '../redux/action/auth';
import LoadingIndicator from '../components/ModalLoading';

const registerValidationSchema = yup.object().shape({
  phoneNumber: yup
    .string()
    .min(10, 'Minimal karakter no handphone adalah 10')
    .max(12, 'Maksimal karakter no handphone adalah 12')
    .required('No handphone dibutuhkan'),
});

const Register = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  const InputRegister = async (data) => {
    console.log(API_URL, data);
    await dispatch(makeAccount(data));
    if (auth.isError) {
      Alert.alert(auth.message);
    } else {
      Alert.alert(auth.message);
    }
  };

  return (
    <>
      <StatusBar backgroundColor={'#dbc9a0'} barStyle="dark-content" />
      {auth.isLoading === false ? (
        <Formik
          validationSchema={registerValidationSchema}
          initialValues={{
            phoneNumber: '',
          }}
          onSubmit={(values) => InputRegister(values.phoneNumber)}>
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            isValid,
            touched,
          }) => (
            <View style={styles.parrent}>
              <Form>
                <Item>
                  <Input placeholder="Country" />
                </Item>
                <View style={styles.container}>
                  <Item style={styles.code}>
                    <Input value="+62" />
                  </Item>
                  <View style={{width: '90%'}}>
                    <Item style={styles.phone}>
                      <Input
                        name="phoneNumber"
                        placeholder="Masukkan no handphone"
                        style={styles.textInput}
                        onChangeText={handleChange('phoneNumber')}
                        onBlur={handleBlur('phoneNumber')}
                        value={values.phoneNumber}
                        keyboardType={'phone-pad'}
                      />
                    </Item>
                    {touched.phoneNumber && errors.phoneNumber && (
                      <Text style={styles.textError}>{errors.phoneNumber}</Text>
                    )}
                  </View>
                </View>
              </Form>
              <Text style={styles.textBottom} note>
                Please confirm your country code and enter your phone number{' '}
              </Text>
              <View style={styles.btnCheck}>
                <Button
                  style={styles.check}
                  onPress={handleSubmit}
                  disabled={!isValid}>
                  <Icon name="arrow-right" size={30} color="#dbc9a0" />
                </Button>
              </View>
            </View>
          )}
        </Formik>
      ) : (
        <LoadingIndicator />
      )}
    </>
  );
};

export default Register;

const styles = StyleSheet.create({
  parrent: {
    paddingRight: 15,
    flex: 1,
    backgroundColor: '#dbc9a0',
    paddingTop: 25,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  code: {
    width: '10%',
    borderBottomColor: 'blue',
    borderWidth: 1,
    marginTop: 25,
  },
  phone: {
    width: '92.5%',
    borderWidth: 1,
    marginTop: 25,
  },
  textBottom: {
    fontSize: 12,
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
