import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

export default class TodoDetailScreen extends Component {
    constructor(props){
        super(props)
        this.state={

        }
    }
    
    render() {
        const {navigation} = this.props;
        //khai báo ra cái biến todoItem để lấy param từ bên TodoScreen truyền qua
        const todoItem = navigation.getParam('data');
        const {status, body} = todoItem;
        return (
            <View style={StyleSheet.container}>
                <Text> status:{status} </Text>
                <Text> body:{body} </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#FF0099'
    }
});
