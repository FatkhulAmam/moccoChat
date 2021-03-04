import React from 'react';
import {StyleSheet, View, Text, StatusBar} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import AppIntroSlider from 'react-native-app-intro-slider';
import Icon from 'react-native-ionicons';
import {useNavigation} from '@react-navigation/native';

const slides = [
  {
    key: 'somethun',
    title: 'MOCCO CHAT',
    text: 'MOCCO CHAT is newest chatting aplication with beautiful experience',
    icon: 'send',
    colors: ['#421908', '#ecccb4'],
  },
  {
    key: 'somethun2',
    title: 'Connecting To All',
    text: 'To connet your heart with all of your conection contact',
    icon: 'chatbubbles',
    colors: ['#421908', '#ecccb4'],
  },
  {
    key: 'somethun1',
    title: 'Super-Faster Chat App',
    text: 'The App give you fast experience to connect with your colleague',
    icon: 'time',
    colors: ['#421908', '#ecccb4'],
  },
];

const Intro = (props) => {
  const navigation = useNavigation();
  const renderItem = ({item, dimension}) => (
    <LinearGradient
      style={[styles.mainContent, dimension]}
      colors={item.colors}
      start={{x: 0, y: 0.1}}
      end={{x: 0.1, y: 1}}>
      <Icon
        style={{backgroundColor: 'transparent'}}
        name={item.icon}
        size={200}
        color="white"
      />
      <View>
        <Text style={styles.text}>{item.text}</Text>
        <Text style={styles.title}>{item.title}</Text>
      </View>
    </LinearGradient>
  );

  return (
    <>
      <StatusBar backgroundColor={'#421908'} />
      <AppIntroSlider
        data={slides}
        renderItem={renderItem}
        bottomButton
        onDone={() => navigation.navigate('Register')}
      />
    </>
  );
};

export default Intro;
const styles = StyleSheet.create({
  mainContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  image: {
    width: 320,
    height: 320,
  },
  text: {
    color: 'rgba(255, 255, 255, 0.8)',
    backgroundColor: 'transparent',
    textAlign: 'center',
    padding: 10,
    marginBottom: 250,
  },
  title: {
    fontSize: 22,
    color: 'white',
    backgroundColor: 'transparent',
    textAlign: 'center',
    bottom: 100,
  },
});
