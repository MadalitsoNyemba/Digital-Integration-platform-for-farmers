import React, { Component } from 'react';
import { View, Text, ScrollView, RefreshControl,Image } from 'react-native';
import { Container, Header, Button, Separator, Icon, Left, Body, Title, Right, Content, List, ListItem, Thumbnail, Drawer,Card, CardItem, Item} from 'native-base';
import { FlatList } from 'react-native-gesture-handler';
import ajax from '../components/fetchProducts.js';

export class Products extends Component {
    state = {
        products:[],
        
    }

    async componentDidMount() {
        const products = await ajax.fetchProducts();
        console.log(products);
        this.setState({products});
    }
    static navigationOptions = ({navigation}) => ({
        title:navigation.state.params.name,
        headerTintColor:'#fff',            
        headerTitleStyle : {textAlign: 'center', alignSelf: 'center'},
        headerStyle:{backgroundColor:'#f4511e'},
});
    render(){
        return (
            <Container>
           
                <Content>
                <Item style={{margin:20}}>
                <Left>
                    <Text style = {{fontWeight:'bold',fontSize:22}}>Products for  {this.props.navigation.state.params.name}</Text>
                </Left>
                </Item>
                <List>
                <FlatList data={this.state.products}
                                    onRefresh={() => this.onRefresh()}
                                    renderItem={({ item }) =>                
                                    (   
                            <Card style={{ elevation: 1,borderRadius:4,margin:1, }}>
                            <Text></Text>
                                <CardItem button onPress = {() =>this.props.navigation.navigate('Products',{
                                    name:item.product_name
                                            })
                                            }>
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
                            
                             
                            </Content>        
            </Container>       
        )
    }
}

export default Products;