import React from "react";
import { StyleSheet, TextInput, Text, View, Pressable } from "react-native";

const CustomButton = ({ on_Press, button_text, type = "PRIMARY" }) => {

    return (
        //it shoows if button type is  "primary "or tertiary type , only that jsx property apply on button 

        <Pressable onPress={on_Press}
            style={[styles.container, styles[`container_${type}`]]}>



            <Text
                style={[styles.button_style, styles[`text_${type}`]]}>
                {button_text}</Text>


        </Pressable>
    )
};

//Style sheet for buttons
const styles = StyleSheet.create({
    //style for Button 
    container: {
        flex: 1,
        width: '100%',
        padding: 15,
        marginVertical: 5,
        alignItems: "center",
        borderRadius: 5
    },
    //style for primary type button mean a button with border
    container_PRIMARY: {
        backgroundColor: '#A30000',
     
    },
    // style for  tertiary button mean a button has no border only text type (forget password)
    container_TERTIARY: {
                

        alignItems: "flex-end",
        marginVertical: 1,
        padding: 2,


    },
    //text of button
    button_style: {
        fontWeight: "bold",
        color: "white",
        
    },
    // Text style for  a button without  border 
    text_TERTIARY: {
        color: "white",

    }

});
export default CustomButton;