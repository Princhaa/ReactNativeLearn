import React, { Component } from 'react';
import {Text, Button} from 'native-base';

export default class Chats extends Component{
    render(){
        return(
            <Button onPress={this.props.onForward}>
                <Text>Login</Text>
            </Button>
        )
    }
}