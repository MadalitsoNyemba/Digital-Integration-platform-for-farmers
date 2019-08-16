import React, { Component } from 'react';
import { View, Text, ScrollView, RefreshControl,Image, StatusBar } from 'react-native';
import { Container, Header, Button, Separator, Icon, Left, Body, Title, Right, Content, List, ListItem, Thumbnail, Drawer,Card, CardItem, } from 'native-base';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import ajax from '../components/fetchFarmers.js';
export class Farmers extends Component {
    state = {
        farmers:[], 
    }

    async componentDidMount() {
        const farmers = await ajax.fetchFarmers();
        console.log(farmers);
        this.setState({farmers});
    }
    static navigationOptions = ({navigation}) => ({
        title:'Farmers',
        headerTintColor:'#fff',            
        headerTitleStyle : {textAlign: 'center', alignSelf: 'center'},
        headerStyle:{backgroundColor:'#f4511e'},
});
    render(){
        return (
            <Container>
                                <StatusBar backgroundColor="#f4511e" />

                <Content>
                    <View>          
                
                    <List>
                    <FlatList data={this.state.farmers}
                        onRefresh={() => this.onRefresh()}
                        renderItem={({ item }) => (
                            <Card style={{ elevation: 3 }}>
                                <CardItem cardBody button >
                                    <Image  style={{  flex: 1 ,height: null,width:null}} source={{ uri: item.image }}  />
                                </CardItem>
                                <CardItem  button onPress = {() =>this.props.navigation.navigate('singleFarmer',{
                                    name:item.first_name + ' ' + item.last_name,
                                    id:item.id
                                            })
                                            }>
                                    <Left>
                                        <Body>
                                            <Text >{item.first_name} {item.last_name}</Text>
                                            <Text>Number: {item.phone_number}</Text>
                                            <Text note>@ - {item.location}</Text>
                                        </Body>
                                    </Left>
                                    <Right>
                                        <Body>
                                            <Text>Ratings</Text>    
                                            <Text>(20 reviews)</Text>    
                                        </Body>
                                    </Right>
                                </CardItem>
                            </Card>
                        )}
                        keyExtractor={item => item.national_id}
                    />
                </List>
                                        
                    </View>
                </Content>
                                   
            </Container>              
        )
    }
}

export default Farmers;