import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {useSelector} from 'react-redux';
import {createDrawerNavigator} from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

//import screens
import Intro from '../screens/Intro';
import Register from '../screens/Register';
import Verification from '../screens/Verification';
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

import {DrawerContent} from '../components/DrawerStyles';

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
      <Drawer.Screen name="Home" component={LandingPage} />
      <Drawer.Screen name="Chat" component={ChatList} />
    </Drawer.Navigator>
  );
};

const Route = () => {
  const isRegister = useSelector((state) => state.auth.isRegistry);

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
                backgroundColor: '#421908',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}
          />
          {/* stack verif screen */}
          <Stack.Screen
            name="SetName"
            component={SetName}
            options={{headerShown: false}}
          />
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
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default Route;
