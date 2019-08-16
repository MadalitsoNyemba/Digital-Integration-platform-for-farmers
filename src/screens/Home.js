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
                       <Left>
                           <Text>Products</Text>
                       </Left>
                    <FlatList data={this.state.products}
                    horizontal ={true}
                                    onRefresh={() => this.onRefresh()}
                                    renderItem={({ item }) =>                
                                    (   
                            <Card style={{ elevation: 1,borderRadius:4,margin:1, }}>
                            <Text></Text>
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
                    <Text></Text>
                    <Text></Text>
                <Left>
                    <Text>Popular farmers</Text>
                </Left>
                <Right>
                    <Text>View all</Text>
                </Right>
                <List>
                    <FlatList data={this.state.farmers}
                        onRefresh={() => this.onRefresh()}
                        renderItem={({ item }) => (
                            <Card style={{ elevation: 3 }}>
                                <CardItem cardBody button >
                                    <Image  style={{  flex: 1 ,height: null,width:null}} source={{ uri: item.image }}  />
                                </CardItem>
                                <CardItem>
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

export default Home;