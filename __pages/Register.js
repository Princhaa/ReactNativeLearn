import React, {Component} from 'react';
import {
    Form,
    Item,
    Button,
    Header,
    Left,
    Body,
    Right,
    Container,
    Content,
    Icon,
    Title,
    Label,
    Input,
    Text
} from 'native-base';

export default class Register extends Component{
    constructor(props){
        super(props);
        this.onBackPressed = this.onBackPressed.bind(this);
    }

    onBackPressed(){
        this.props.navigator.pop();
    }

    render(){
        return(
        <Container>
            <Header>
                <Left>
                    <Button transparent onPress={this.onBackPressed}>
                        <Icon name="arrow-back"/>
                    </Button>
                </Left>
                <Body>
                    <Title>Register</Title>
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
                        <Label>Email</Label>
                        <Input />
                    </Item>
                    <Item floatingLabel>
                        <Label>Password</Label>
                        <Input secureTextEntry={true} />
                    </Item>
                </Form>
                <Button full style={{marginTop: 10}} onPress={this.onBackPressed}>
                    <Text>Register</Text>
                </Button>
            </Content>
        </Container>
        )
        
    }
}