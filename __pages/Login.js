import React, {Component} from 'react';
import {
    Container,
    Content,
    Form,
    Item,
    Label,
    Input,
    Button,
    Text,
    Header,
    Left,
    Right,
    Body,
    Title,
    Icon
} from 'native-base';


export default class Login extends Component{

    constructor(props){
        super(props);
        this.onBackPressed = this.onBackPressed.bind(this);
        this.registerButton = this.registerButton.bind(this);
    }

    onBackPressed(){
        this.props.navigator.pop();
    }

    registerButton(){
        this.props.navigator.push({
            name: 'Register'
        })
    }

    render(){
        return(
            <Container>
                <Header>
                    <Left>
                        <Button transparent onPress = {this.onBackPressed}>
                            <Icon name='arrow-back' />
                        </Button>
                    </Left>
                    <Body>
                        <Title>Login</Title>
                    </Body>
                    <Right />
                </Header>
                <Content>
                    <Form>
                        <Item floatingLabel>
                            <Label>Username</Label>
                            <Input />
                        </Item>
                        <Item floatingLabel>
                            <Label>Password</Label>
                            <Input secureTextEntry={true}/>
                        </Item>
                    </Form>
                    <Button full style={{marginTop: 15}} onPress = {this.onBackPressed}>
                        <Text>Login</Text>
                    </Button>
                    <Text onPress = {this.registerButton}>
                        Don't have account? Register
                    </Text>
                </Content>
            </Container>
        )
    }

}