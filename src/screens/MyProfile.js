import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Image,
  View,
  StatusBar,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';
import {Button, Text} from 'native-base';
import {useNavigation} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';
import {API_URL} from '@env';
import Icon from 'react-native-ionicons';
import ImagePicker from 'react-native-image-picker';
import LinearGradient from 'react-native-linear-gradient';

import avatar from '../assets/images/profile.png';
import {getMyProfile, editAvatar} from '../redux/action/profile';

const options = {
  title: 'my picture',
  takePhotoButtonTitle: 'Take Photo',
  chooseFromLibraryButtonTitle: 'Choose Photo',
};

const showToastImg = () => {
  ToastAndroid.showWithGravity(
    'Not an image (jpg/jpeg/png)',
    ToastAndroid.LONG,
    ToastAndroid.CENTER,
  );
};

const showToastSize = () => {
  ToastAndroid.showWithGravity(
    'image to large(under 1 mb)',
    ToastAndroid.LONG,
    ToastAndroid.CENTER,
  );
};

const setImageFullfilled = () => {
  ToastAndroid.showWithGravity(
    'updated!!!',
    ToastAndroid.LONG,
    ToastAndroid.CENTER,
  );
};

const MyProfile = (props) => {
  // const [isEnabled, setIsEnabled] = useState(false);
  // const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const myProfile = useSelector((state) => state.profile.data);
  const [AvatarSource, setAvatarSource] = useState(
    myProfile.photo ? {uri: `${API_URL}${myProfile.photo}`} : avatar,
  );
  const token = useSelector((state) => state.auth.token);
  useEffect(() => {
    dispatch(getMyProfile(token));
  }, [dispatch, token]);

  const takePictures = () => {
    ImagePicker.showImagePicker(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        if (response.fileSize <= 1024 * 1024) {
          if (
            `${response.type}` === 'image/jpg' ||
            'image/jpeg' ||
            'image/png'
          ) {
            setAvatarSource({uri: response.uri});
            const form = new FormData();
            form.append('pictures', {
              uri: response.uri,
              name: response.fileName,
              type: response.type,
            });
            dispatch(editAvatar(token, form));
            setImageFullfilled();
            return dispatch(getMyProfile(token));
          } else {
            showToastImg();
          }
        } else {
          showToastSize();
        }
      }
    });
  };

  return (
    <>
      <StatusBar translucent backgroundColor="transparent" />
      <View style={{height: '50%'}}>
        <Image style={styles.avatar} source={AvatarSource} />
        <TouchableOpacity style={styles.back} onPress={()=>props.navigation.goBack()}>
        <Icon
          android="arrow-back"
          size={35}
          color="#421908"
        />
        </TouchableOpacity>
        <LinearGradient
        colors={['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 0.3)']}
        style={{
          width: '100%',
          height: '25%', 
          position: 'absolute',
          bottom: 0
        }}/>
        <Icon style={styles.call} android="more" size={35} color="#421908" />
        <View style={{position: 'absolute', bottom: 10}}>
        <Text style={styles.name}>
          {myProfile.user_name ? myProfile.user_name : myProfile.telphone}
        </Text>
        <Text style={styles.status}>online</Text>
        </View>
      </View>
      <View style={styles.div}>
        <Text style={styles.info}>Akun</Text>
        <View style={styles.border}>
          <Text style={styles.text}>{myProfile.telphone}</Text>
          <Text style={styles.tag}>Phone</Text>
        </View>
        <TouchableOpacity
          style={styles.border}
          onPress={() => navigation.navigate('EditName')}>
          <Text style={styles.text}>
            {myProfile.user_name ? myProfile.user_name : 'user name'}
          </Text>
          <Text style={styles.tag}>name for your contact</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.border}
          onPress={() => navigation.navigate('EditBio')}>
          <Text style={styles.text}>
            {myProfile.bio ? myProfile.bio : 'Bio'}
          </Text>
          <Text style={styles.tag}>tambahkan beberapa tentang anda</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.btnCheck}>
        <Button style={styles.check} onPress={takePictures}>
          <Icon name="camera" color="#ffffff" />
        </Button>
      </View>
    </>
  );
};

export default MyProfile;

const styles = StyleSheet.create({
  avatar: {
    width: 'auto',
    height: '100%',
  },
  back: {
    position: 'absolute',
    left: 15,
    top: 30,
  },
  call: {
    position: 'absolute',
    right: 25,
    top: 30,
  },
  name: {
    fontSize: 25,
    fontWeight: 'bold',
    marginLeft: 20,
    color: '#ffffff',
  },
  status: {
    fontSize: 16,
    marginLeft: 20,
  },
  div: {
    height: '50%',
    padding: 20,
    backgroundColor: '#dbc9a0',
  },
  info: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#421908',
  },
  btnCheck: {
    position: 'absolute',
    top: '46%',
    right: 15,
    flexDirection: 'row',
    borderRadius: 50,
  },
  check: {
    width: 65,
    height: 65,
    borderRadius: 50,
    justifyContent: 'center',
    backgroundColor: '#421908',
  },
  border: {
    borderBottomWidth: 1,
    paddingBottom: 15,
    paddingTop: 15,
  },
  text: {
    fontSize: 18,
    color: '#421908',
  },
  tag: {
    color: '#fff5e7',
    fontSize: 14
  },
});
