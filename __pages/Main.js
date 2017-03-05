import React, {Component} from 'react';
import Friends from './Friends';
import Timeline from './Timeline';
import Chats from './Chats';
import More from './More';
import {FooterTab, 
  Tab, 
  Tabs, 
  Toast, 
  Container, 
  Button, 
  Header, 
  Left, 
  Right, 
  Icon, 
  Body, 
  Title, 
  Content, 
  Footer, 
  Text
} from 'native-base';

export default class Main extends Component{

    constructor(props){
        super(props);
        this.state = {
        friendsTab: false,
        chatsTab: true,
        timeTab: false,
        moreTab: false,
        activeTab: "chats",
        activePage: <Chats onForward = {() => {
            this.goToLogin();
        }}/>
        }
  }

  goToLogin(){
      this.props.navigator.push({
          name: 'Login'
      })
  }

  onButtonPressed(name){
    switch(name){
      case "people" : this.clearState();this.setState({friendsTab: true, activeTab: "people", activePage: <Friends/>}); break;
      case "chats" : this.clearState(); this.setState({chatsTab: true, activeTab: "chats", activePage: <Chats onForward = {() => {
            this.goToLogin();
        }}/>}); break;
      case "time" : this.clearState(); this.setState({timeTab: true, activeTab: "time", activePage: <Timeline/>}); break;
      case "more" : this.clearState(); this.setState({moreTab: true, activeTab: "more", activePage: <More/>}); break;
    }
  }

  clearState(){
    this.setState({
      friendsTab: false,
      chatsTab: false,
      timeTab: false,
      moreTab: false
    });
  }
    
    render(){
        let headerTitle;
        switch (this.state.activeTab){
            case "people" : headerTitle = "Friends"; break;
            case "chats" : headerTitle = "Chats"; break;
            case "time" : headerTitle = "Timeline"; break;
            case "more" : headerTitle = "More"; break;
    }
        return(
        <Container>
        <Header>
          <Left>
            <Button small light rounded>
              <Text>Edit</Text>
            </Button>
          </Left>
          <Body>
            <Title>{headerTitle}</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name = "chatboxes"></Icon>
            </Button>
          </Right>
        </Header>
        <Content>{this.state.activePage}</Content>
        <Footer>
          <FooterTab>
            <Button active = {this.state.friendsTab} onPress={() => this.onButtonPressed("people")}>
              <Icon active = {this.state.friendsTab} name="people"/>
            </Button>
            <Button active = {this.state.chatsTab} onPress={() => this.onButtonPressed("chats")}>
              <Icon active = {this.state.chatsTab} name="chatbubbles"/>
            </Button>
            <Button active = {this.state.timeTab} onPress={() => this.onButtonPressed("time")}>
              <Icon active = {this.state.timeTab} name="time"/>
            </Button>
            <Button active = {this.state.moreTab} onPress={() => this.onButtonPressed("more")}>
              <Icon active = {this.state.moreTab} name="more" />
            </Button>
          </FooterTab>
        </Footer>
      </Container>
        )
    }
}