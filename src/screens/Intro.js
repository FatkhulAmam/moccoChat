import React from 'react';
import { StyleSheet, View, Text, StatusBar } from 'react-native';
import LinearGradient from 'react-native-linear-gradient'
import AppIntroSlider from 'react-native-app-intro-slider';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native';

const slides = [
    {
        key: 'somethun',
        title: 'Quick setup, good defaults',
        text: 'React-native-app-intro-slider is easy to setup with a small footprint and no dependencies. And it comes with good default layouts!',
        icon: 'stopwatch-outline',
        colors: ['#1c3661', '#ffffff'],
    },
    {
        key: 'somethun1',
        title: 'Super-Faster Chat App',
        text: 'The component is also super customizable, so you can adapt it to cover your needs and wants.',
        icon: 'flash-sharp',
        colors: ['#1c3661', '#ffffff'],
    },
    {
        key: 'somethun2',
        title: 'No need to buy me beer',
        text: 'Usage is all free',
        icon: 'ios-beer',
        colors: ['#1c3661', '#ffffff'],
    },
]

const Intro = props => {
    const navigation = useNavigation()
    const renderItem = ({ item, dimension }) => (
        <LinearGradient
            style={[
                styles.mainContent,
                dimension
            ]}
            colors={item.colors}
            start={{ x: 0, y: 0.1 }}
            end={{ x: 0.1, y: 1 }}
        >
            <Ionicons
                style={{ backgroundColor: 'transparent' }}
                name={item.icon}
                size={200}
                color="white"
            />
            <View>
                <Text style={styles.text}>{item.text}</Text>
                <Text style={styles.title}>{item.title}</Text>
            </View>
        </LinearGradient>
    )

    return (
        <>
        <StatusBar backgroundColor={'#1c3661'}/>
        <AppIntroSlider data={slides} renderItem={renderItem} bottomButton onDone={()=>navigation.navigate('Register')}/>
        </>
    )
}

export default Intro
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
        paddingVertical: 50,
    },
    title: {
        fontSize: 22,
        color: 'white',
        backgroundColor: 'transparent',
        textAlign: 'center',
        marginBottom: 80,
    },
});
