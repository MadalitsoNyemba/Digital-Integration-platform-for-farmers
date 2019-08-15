import React, { Component } from 'react';
import { View, Text, ScrollView, RefreshControl,Image } from 'react-native';
import { Container, Header, Button, Separator, Icon, Left, Body, Title, Right, Content, List, ListItem, Thumbnail, Drawer,Card, CardItem, } from 'native-base';
import { FlatList } from 'react-native-gesture-handler';
import ajax from '../components/fetchShopProducts.js';

export class Products extends Component {
    state = {
        items:[],
        
    }

    async componentDidMount() {
       
        const items = await ajax.fetchShopProducts(this.props.navigation.state.params.id);
        console.log(items);
        this.setState({items});

        
    }
    render(){
        return (
            <Container>
           
                <Header noShadow>
                    
                    <Body>
                        <Title>Netmall Products</Title>
                    </Body>
                   
                </Header> 
                <Content>
                <List>
                    <FlatList data={this.state.items}
                    
                                    onRefresh={() => this.onRefresh()}
                                    renderItem={({ item }) => (
                                        <Card style={{ elevation: 3 }}>
                                <CardItem >
                                    <Left>
                                    
                                        <Body>
                                            <Text onPress = {() =>this.props.navigation.navigate
                                            ('SingleProduct',{
                                                name:item.item_name,
                                                price:item.price,
                                                shop_name:item.shop_name,
                                                quantity:item.quantity,
                                                item_number:item.item_number,
                                                image:item.image,
                                                id:item.id,
    
                                                })}>{item.item_name}</Text>
                                            <Text>MWK {item.price}</Text>
                                            
                                            <Text note>@ - {item.shop_name}</Text>
                                        </Body>
                                    </Left>
                                </CardItem>
                                <CardItem cardBody>
                                    <Image  style={{ height: 180,width:200, flex: 1 }} source={{ uri: item.image }}  />
                                </CardItem>
                                <CardItem>
                                    
                                    <Text  onPress = {() =>this.props.navigation.navigate('SingleProduct')}>This is</Text>
                                </CardItem>
                            </Card>
                                    )}
                                    keyExtractor={item => item.item_name}
                                        />
                                        </List>
                            
                             
                            </Content>        
            </Container>       
        )
    }
}

export default Products;