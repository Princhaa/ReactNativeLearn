import React, { Component } from 'react';
import {View, Image} from 'react-native';
import {
    Text,
    Container,
    Content,
    Card,
    CardItem,
    Body,
    Icon,
    Left,
    Right,
    Input,
    Label,
    Form,
    Item,
    Button,
    Thumbnail
} from 'native-base';

export default class Timeline extends Component{
    render(){
        return(
            <Container>
                <Content>
                    <Form>
                        <Item last>
                            <Input placeholder = "What's new?" />
                        </Item>
                    </Form> 

                    <Card style={{marginTop: 10}}>
                        <CardItem bordered>
                            <Left>
                                <Thumbnail source={require('../_assets/OAPict.png')}/>
                                <Body>
                                    <Text>DOTA2Humor</Text>
                                    <Text note>1 hour ago</Text>
                                </Body>
                            </Left>
                        </CardItem>
                        <CardItem content>
                            <Text>sc : dailyesport</Text>
                        </CardItem>
                        <CardItem cardBody>
                            <Image source={require('../_assets/PostPic.png')} style = {{resizeMode: 'contain', height: 300, width: 300}}/>
                        </CardItem>
                    </Card>
                </Content>
            </Container>
        )
    }
}