/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {useState} from 'react';
import {RNCamera} from 'react-native-camera';
import {Image, Text, View, TouchableOpacity} from 'react-native';

const App = () => {
  let camera;
  let [photo, setPhoto] = useState(null);
  const takePicture = async () => {
    let options = {quality: 1, base64: true, skipProcessing: true};
    let pic = await camera.takePictureAsync(options);
    setPhoto(pic);
  };

  const getCameraSection = () => {
    if (photo)
      return <Image source={{uri: photo.uri}} style={{flex: 1}}></Image>;
    else
      return (
        <RNCamera
          type={RNCamera.Constants.Type.front}
          ref={ref => {
            camera = ref;
          }}
          captureAudio={false}
          style={{
            borderColor: 'black',
            borderWidth: 5,
            height: '80%',
            width: '100%',
          }}></RNCamera>
      );
  };

  return (
    <View style={{flex: 1}}>
      {getCameraSection()}

      <TouchableOpacity
        onPress={takePicture}
        style={{
          padding: 15,
          backgroundColor: 'red',
          alignItems: 'center',
          marginTop: 15,
        }}>
        <Text>Sacar foto</Text>
      </TouchableOpacity>
    </View>
  );
};

export default App;
