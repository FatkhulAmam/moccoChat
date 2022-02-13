import React, {useEffect, useState, useRef} from 'react';
import {View, Text, SafeAreaView, StatusBar, Dimensions, TouchableOpacity} from 'react-native';
import {
  RTCPeerConnection,
  RTCIceCandidate,
  RTCSessionDescription,
  RTCView,
  MediaStream,
  MediaStreamTrack,
  mediaDevices,
  registerGlobals,
} from 'react-native-webrtc';
import Icon from 'react-native-ionicons';

const {width, height} = Dimensions.get('window');
const configuration = {iceServers: [{url: 'stun:stun.l.google.com:19302'}]};

const VideoCall = () => {
  const [myVideo, setMyVideo] = useState(null);
  const [partnerVideo, setPartnerVideo] = useState(null);

  const myStream = useRef();
  const pc = new RTCPeerConnection(configuration);

  useEffect(() => {
    const isFront = true;
    mediaDevices.enumerateDevices().then((sourceInfos) => {
      let videoSourceId;
      for (let i = 0; i < sourceInfos.length; i++) {
        const sourceInfo = sourceInfos[i];
        if (
          sourceInfo.kind == 'videoinput' &&
          sourceInfo.facing == (isFront ? 'front' : 'environment')
        ) {
          videoSourceId = sourceInfo.deviceId;
        }
      }
      mediaDevices
        .getUserMedia({
          audio: true,
          video: {
            width: 640,
            height: 480,
            frameRate: 30,
            facingMode: isFront ? 'user' : 'environment',
            deviceId: videoSourceId,
          },
        })
        .then((stream) => {
          console.log('stream', stream);
          setMyVideo(stream);
          myStream.current = stream;
        })
        .catch((error) => {
          console.log('Media Error: ', error);
        });
    });
  }, []);

  return (
    <SafeAreaView>
      <StatusBar translucent hidden />
      <View>
        <RTCView
          streamURL={myVideo?.toURL()}
          style={{width: width, height: height}}
          objectFit={'cover'}
          mirror={true}
        />
        <RTCView
          streamURL={myVideo?.toURL()}
          style={{width: width/3.5, height: height/5, position: 'absolute', bottom: 100, right: 20}}
          objectFit={'cover'}
        />
      </View>
      <View style={{position: 'absolute', bottom: 25, alignSelf: 'center'}}>
        <TouchableOpacity style={{width: 50, height: 50, justifyContent: 'center', alignItems: 'center', backgroundColor: 'red', borderRadius: 25}}>
            <Icon name="call" size={25} color="#ffffff"/>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default VideoCall;
