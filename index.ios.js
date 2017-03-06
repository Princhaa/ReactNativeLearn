import React, { Component } from 'react';
import {AppRegistry, View, Image, Navigator} from 'react-native';
import Main from './__pages/Main';
import Login from './__pages/Login';
import Register from './__pages/Register';


class AwesomeProject extends Component {

  renderScene(route, navigator){
      if (route.name == 'Main'){
        return <Main navigator={navigator} />
      }
      if (route.name == 'Login'){
        return <Login navigator={navigator} />
      }
      if(route.name == 'Register'){
        return <Register navigator={navigator} />
      }
    }

  render(){
    return(
      <Navigator
        initialRoute={{ name: 'Main'}}
        renderScene = {this.renderScene}/> 
    )
  }
}


AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
