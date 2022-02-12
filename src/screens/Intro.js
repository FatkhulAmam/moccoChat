import React, {useEffect} from 'react';
import {StyleSheet, View, Text, StatusBar, SafeAreaView} from 'react-native';
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

const Intro = () => {
  const navigation = useNavigation();
  const renderItem = ({item, dimension}) => (
    <SafeAreaView style={[styles.mainContent, dimension]}>
      <Icon
        style={{backgroundColor: 'transparent'}}
        name={item.icon}
        size={200}
        color="#421908"
      />
      <View style={{marginHorizontal: 100}}>
        <Text style={styles.text}>{item.text}</Text>
        <Text style={styles.title}>{item.title}</Text>
      </View>
    </SafeAreaView>
  );

  const _renderDoneButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <Icon name="md-checkmark" color="rgba(255, 255, 255, .9)" size={24} />
      </View>
    );
  };

  const _renderNextButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <Icon
          name="md-arrow-round-forward"
          color="rgba(255, 255, 255, .9)"
          size={24}
        />
      </View>
    );
  };

  return (
    <>
      <StatusBar backgroundColor={'#dbc9a0'} barStyle="dark-content" />
      <AppIntroSlider
        data={slides}
        renderItem={renderItem}
        activeDotStyle={{backgroundColor: '#421908'}}
        onDone={() => navigation.navigate('Register')}
        renderDoneButton={_renderDoneButton}
        renderNextButton={_renderNextButton}
      />
    </>
  );
};

export default Intro;
const styles = StyleSheet.create({
  mainContent: {
    backgroundColor: '#dbc9a0',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  image: {
    width: 320,
    height: 320,
  },
  text: {
    color: '#421908',
    backgroundColor: 'transparent',
    textAlign: 'center',
    padding: 10,
    marginBottom: 250,
  },
  title: {
    fontSize: 22,
    color: '#421908',
    backgroundColor: 'transparent',
    textAlign: 'center',
    bottom: 100,
  },
  buttonCircle: {
    width: 40,
    height: 40,
    backgroundColor: 'rgba(0, 0, 0, .2)',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
