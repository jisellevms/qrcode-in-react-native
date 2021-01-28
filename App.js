'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  ToastAndroid
} from 'react-native';

import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';

class App extends Component {
  onSuccess = e => {
    if (Platform.OS === 'android') {
      ToastAndroid.show(e.data, ToastAndroid.SHORT)
    } else {
      AlertIOS.alert(e.data);
    }
  };

  render() {
    return (
      <QRCodeScanner
        onRead={this.onSuccess}
        flashMode={RNCamera.Constants.FlashMode.off}
        fadeIn={true}
      />
    );
  }
}

const styles = StyleSheet.create({
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777'
  },
  textBold: {
    fontWeight: '500',
    color: '#000'
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)'
  },
  buttonTouchable: {
    padding: 16
  }
});

//AppRegistry.registerComponent('default', () => ScanScreen);
export default App;
