import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Header } from "../sections/Header";

export class Contact extends React.Component {
   /* we don't have to use Navigation options but this allows us to customise how our components intract with navigation */
    static navigationOptions = { 
         header: null //setting this to null hides the navgation bar
    }

    render() {
        return(
           <View style={styles.container}>
               <Header message = 'Press to Login' />
               <Text style={{flex: 8}}> The contact form will go here</Text>
               <Text style={{flex: 6}}> More contact form will go here</Text>
           </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});