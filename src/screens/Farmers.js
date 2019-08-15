import React, { Component } from 'react';
import { View, Text, ScrollView, RefreshControl,Image, StatusBar } from 'react-native';
import { Container, Header, Button, Separator, Icon, Left, Body, Title, Right, Content, List, ListItem, Thumbnail, Drawer,Card, CardItem, } from 'native-base';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import ajax from '../components/fetchShops.js';
export class Shops extends Component {
    state = {
        shops:[], 
    }

    async componentDidMount() {
        const shops = await ajax.fetchShops();
        console.log(shops);
        this.setState({shops});
    }
    static navigationOptions = ({navigation}) => ({
        title:'Netmall Shops',
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
                {/* <Header noShadow>
                    <Body>
                        <Title>Netmall Shops</Title>
                    </Body>
                    <Right>
                        <Button transparent>
                            <Icon name="ios-book" />
                        </Button>
                    </Right>
                </Header>     */}
                <List>
                    <FlatList data={this.state.shops}
                                    onRefresh={() => this.onRefresh()}
                                    renderItem={({ item }) => (
                                       
                                <Card style={{ elevation: 3 }}>
                                <CardItem>
                                    <Left>
                                        <Body>
                                            <Text >{item.shop_name}</Text>
                                            
                                        </Body>
                                    </Left>
                                </CardItem>
                                
                                <CardItem cardBody button onPress = {() =>this.props.navigation.navigate
                                            ('ShopProducts',{
                                                id:item.id,
                                                name:item.shop_name,
                                                title:item.shop_name,
                                                },

                                                )}>
                                    <Image style={{ height: 180,width:200, flex: 1 }} source={{ uri: item.shop_logo }}   />
                                </CardItem>
                                <CardItem>
                                   
                                </CardItem>
                            </Card>
                                    )}
                                    keyExtractor={item => item.shop_name}
                                        />
                                        </List>
                                        
                    </View>
                </Content>
                                   
            </Container>              
        )
    }
}

export default Shops;