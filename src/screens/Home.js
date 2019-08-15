import React, { Component } from 'react';
import ajax from '../components/fetchHomeComponents.js';

import { View, Text, ScrollView, RefreshControl, Image, SectionList, StatusBar } from 'react-native';
import { Container, Header, Button, Separator, Icon, Left, Body, Title, Right, Content, List, ListItem, Thumbnail, Drawer, Card, CardItem, H1 } from 'native-base';
import { FlatList } from 'react-native-gesture-handler';
import SingleProduct from './SingleProduct'
import index from '@babel/template';

export class Home extends Component {
    state = {
        items:[],
        categories:[],
    }

    async componentDidMount() {
       
        const items = await ajax.fetchTrendingItems();
        console.log(items);
        this.setState({items});

        const categories = await ajax.fetchCategories();
        console.log(categories);
        this.setState({categories});
    }
    static navigationOptions = ({navigation}) => ({
        title:'Mobile Market',
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
                       
                    <FlatList data={this.state.categories}
                    horizontal ={true}
                                    onRefresh={() => this.onRefresh()}
                                    renderItem={({ item }) =>                
                                    (   
                            <Card style={{ elevation: 1,borderRadius:4,margin:9, }}>
                                <CardItem>
                                    <Left>
                                    <Thumbnail source={{ uri: item.image }} />
                                        <Body>
                                            <Text style = {{fontWeight:'bold',fontSize:24}} >{item.category}</Text>                                          
                                            <Text>12 {item.category}</Text>                                          
                                        </Body>
                                    </Left>
                                </CardItem>
                                <CardItem cardBody >
                                </CardItem>
                                <CardItem>
                                </CardItem>
                            </Card>
                                    )}
                                    keyExtractor={item => item.category}
                                        />
                                        </List>
                    

                                        <List>
                    <FlatList data={this.state.items}
                    
                                    onRefresh={() => this.onRefresh()}
                                    renderItem={({ item }) => (
                                        <Card style={{ elevation: 3 }}>
                                <CardItem >
                                    <Left>
                                    
                                        <Body>
                                            <Text >{item.item_name}</Text>
                                            <Text>MWK {item.price}</Text>
                                            
                                            <Text note>@ - {item.shop_name}</Text>
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
                                    keyExtractor={item => item.item_name}
                                        />
                                        </List>
                            
                        </View>

                </Content>

            </Container>   
               
        )
    }
}

export default Home;