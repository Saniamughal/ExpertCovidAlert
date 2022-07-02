 import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import Icon from 'react-native-ionicons';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class Cards extends Component {
    render() {
        return (
            <View style={{
                ...styles.container,
                backgroundColor: this.props.bg
            }}>
                <View style={styles.col}>
                    <Icon
                        name={this.props.icon}
                        size={0}
                        color={this.props.bg == "#D93B4A" ? "#fff" : "red"}
                    />
                </View>
                <Text style={styles.title}>{this.props.title}</Text>
                <Text styles={{
                    ...styles.number,
                    color: this.props.bg == "#D93B4A" ? "#FFF" : "#000",
                    
                }}>
                    {this.props.number}
                </Text>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        height: 130,
        width: 130,
        borderRadius: 30,
        padding: 15,
        marginLeft: 20
    },
    col: {
        flexDirection: "row",
        paddingTop:5,
        
    },
    title: {
        marginTop: 22,
        color: '#b8a8aa',
        fontWeight: "bold",
        flexShrink: 12,
        fontSize: 16
    },
    number: {
        fontWeight: "bold",
        color: '#black',
        margin:20,
        fontSize: 30,
        fontWeight: "bold",
    }
})