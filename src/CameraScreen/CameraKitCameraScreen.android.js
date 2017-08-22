import React, { Component } from 'react';
import {View} from 'react-native';
import CameraScreenBase from './CameraKitCameraScreenBase';
const {width, height} = Dimensions.get('window')
export default class CameraScreen extends CameraScreenBase {

  renderGap() {
    return (
      <View style={{width: width, height: width, flexDirection: 'column'}}/>
    );
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'transparent' }} {...this.props}>
        {this.renderCamera()}
        {this.renderGap()}
        {this.renderBottomButtons()}
      </View>
    );
  }
}


