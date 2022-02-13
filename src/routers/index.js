import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {useSelector} from 'react-redux';
import {createDrawerNavigator} from '@react-navigation/drawer';
import NavigationBar from 'react-native-navbar-color';
import Firebase from '@react-native-firebase/app';
import PushNotification, {Importance} from 'react-native-push-notification';
import io from 'socket.io-client';
import {API_URL} from '@env';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

//import screens
import Intro from '../screens/Intro';
import Register from '../screens/Register';
// import Verification from '../screens/Verification';
import LandingPage from '../screens/LandingPage';
import ChatList from '../screens/ChatList';
import ChatDetail from '../screens/ChatDetail';
import MyProfile from '../screens/MyProfile';
import ContactProfile from '../screens/ContactProfile';
import EditName from '../screens/EditName';
import EditBio from '../screens/EditBio';
import SetName from '../screens/SetName';
import Search from '../screens/Search';
import Contact from '../screens/Contact';
import VideoCall from '../screens/VideoCall.js';

import {DrawerContent} from '../components/DrawerStyles';

const socket = io(API_URL);

const DrawerNavigator = () => {
  const haveChat = useSelector((state) => state.chat.dataList.results);
  return (
    <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
      {haveChat === [] ? (
        <Drawer.Screen
          name="Home"
          component={LandingPage}
          options={{headerShown: false}}
        />
      ) : (
        <Drawer.Screen
          name="Chat"
          component={VideoCall}
          options={{headerShown: false}}
          initialParams={{socket: socket}}
        />
      )}
    </Drawer.Navigator>
  );
};

const configurationOptions = {
  debug: true,
  promptOnMissingPlayServices: true,
};

const Route = () => {
  useEffect(() => {
    NavigationBar.setColor('#dbc9a0');
    PushNotification.createChannel(
      {
        channelId: 'Mocco-Chat-App',
        channelName: 'Mocco-Chat-Channel',
        channelDescription: 'A channel to categorise your notifications',
        playSound: false,
        soundName: 'default',
        importance: Importance.HIGH,
        vibrate: true,
      },
      (created) => console.log(`createChannel returned '${created}'`),
    );
    Firebase.initializeApp(configurationOptions);
    PushNotification.configure({
      onRegister: function (token) {
        console.log('TOKEN:', token);
      },
      onNotification: function (notification) {
        PushNotification.localNotification({
          channelId: 'Mocco-Chat-App',
          message: notification.message,
          title: notification.title,
        });
      },
      onRegistrationError: function (err) {
        console.error(err.message, err);
      },
      popInitialNotification: true,
      requestPermissions: true,
    });
  }, []);

  const isRegister = useSelector((state) => state.auth.isRegistry);
  const haveName = useSelector((state) => state.profile.data.user_name);

  return (
    <NavigationContainer>
      {!isRegister ? (
        <Stack.Navigator>
          <Stack.Screen
            name="Intro"
            component={Intro}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Register"
            component={Register}
            options={{
              title: 'Your Phone',
              headerStyle: {
                backgroundColor: '#dbc9a0',
              },
              headerTintColor: '#421908',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}
          />
          {/* stack verif screen */}
        </Stack.Navigator>
      ) : haveName === null ? (
        <Stack.Navigator>
          {haveName === null ? (
            <Stack.Screen
              name="SetName"
              component={SetName}
              options={{headerShown: false}}
            />
          ) : (
            <Stack.Screen
              name="LandingPage"
              component={DrawerNavigator}
              options={{headerShown: false}}
            />
          )}
        </Stack.Navigator>
      ) : (
        <Stack.Navigator>
          <Stack.Screen
            name="LandingPage"
            component={DrawerNavigator}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="ChatList"
            component={DrawerNavigator}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="ChatDetail"
            component={ChatDetail}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="MyProfile"
            component={MyProfile}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="ContactProfile"
            component={ContactProfile}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="EditName"
            component={EditName}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="EditBio"
            component={EditBio}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Search"
            component={Search}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Contact"
            component={Contact}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="VideoCall"
            component={VideoCall}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default Route;
