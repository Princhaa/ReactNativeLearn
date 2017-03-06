import React, { Component } from 'react';
import {Text,
    Icon,
    Fab,
    View,
    Button,
    Container,
    Content    
} from 'native-base';

export default class More extends Component{

    constructor(props){
        super(props);
        this.state = {
            fabStatus: true
        }
    }

    render(){
        return(
            <Container>
                <Text>More Page</Text>                
            </Container>
        )
    }
}