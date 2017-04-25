import React, { Component, PropTypes } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} from 'react-native'
import { Loop, Stage } from 'react-game-kit/native'; 

class ChildComponent extends Component {
  static contextTypes = {
    loop: PropTypes.object,
  };
  
  render() {
    return (<View
              style={{
                flex: 1,
                justifyContent: 'flex-start',
                alignItems: 'stretch',
                backgroundColor: "rgba(74,144,226,1)",
              }}>
            </View>);
  }
  
  update = () => {
    
  };
	
  componentDidMount() {
    this.context.loop.subscribe(this.update);
  }
	
  componentWillUnmount() {
    this.context.loop.unsubscribe(this.update);
  }

}

export default class UnitedColors extends Component {
  render() {
    return (
        <Loop>
          <ChildComponent></ChildComponent>
        </Loop>
    );
  }
}

AppRegistry.registerComponent('UnitedColors', () => UnitedColors);
