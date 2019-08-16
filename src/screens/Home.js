import React, { Component } from 'react';
import ajax from '../components/fetchHomeComponents.js';

import { View, Text, ScrollView, RefreshControl, Image, SectionList, StatusBar } from 'react-native';
import { Container, Header, Button, Separator, Icon, Left, Body, Title, Right, Content, List, ListItem, Thumbnail, Drawer, Card, CardItem, H1 } from 'native-base';
import { FlatList } from 'react-native-gesture-handler';

import index from '@babel/template';

export class Home extends Component {
    state = {
        farmers:[],
        products:[],
    }

    async componentDidMount() {
       
        const farmers = await ajax.fetchFarmers();
        console.log(farmers);
        this.setState({farmers});

        const products = await ajax.fetchProducts();
        console.log(products);
        this.setState({products});
    }
    static navigationOptions = ({navigation}) => ({
        title:'Msika4Farmers',
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
                       
                    <FlatList data={this.state.products}
                    horizontal ={true}
                                    onRefresh={() => this.onRefresh()}
                                    renderItem={({ item }) =>                
                                    (   
                            <Card style={{ elevation: 1,borderRadius:4,margin:9, }}>
                                <CardItem>
                                    <Left>
                                    <Thumbnail source={{ uri: item.image }} />
                                        <Body>
                                            <Text style = {{fontWeight:'bold',fontSize:24}} >{item.product_name}</Text>                                          
                                            <Text>12 {item.product_name}</Text>                                          
                                        </Body>
                                    </Left>
                                </CardItem>
                                <CardItem cardBody >
                                </CardItem>
                                <CardItem>
                                </CardItem>
                            </Card>
                                    )}
                                    keyExtractor={item => item.product_name}
                                        />
                                        </List>
                    

                                        <List>
                    <FlatList data={this.state.farmers}
                    
                                    onRefresh={() => this.onRefresh()}
                                    renderItem={({ item }) => (
                                        <Card style={{ elevation: 3 }}>
                                <CardItem >
                                    <Left>
                                    
                                        <Body>
                                            <Text >{item.first_name} {item.last_name}</Text>
                                            <Text>Number: {item.phone_number}</Text>
                                            
                                            <Text note>@ - {item.location}</Text>
                                        </Body>
                                    </Left>
                                </CardItem>
                                <CardItem cardBody button >
                                    <Image  style={{ height: 180,width:200, flex: 1 }} source={{ uri: item.image }}  />
                                </CardItem>
                                <CardItem>
                                    
                                    <Text>This is</Text>
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

export default Home;