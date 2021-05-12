import React from 'react';
import { Text, View , Image, StyleSheet} from 'react-native';

const Footer = () =>{
   return(
    <View style={styles.headerContainer}>
        <Text style={styles.text}>{'\u00A9'} Copyrights 2021 NinjaSalary All rights reserved</Text>
    </View>
)};

const styles = StyleSheet.create({
    headerContainer:{
        height:80,
        width:'100%',
        backgroundColor: '#2e2b5a',
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    text:{
        color:"#fff",
        fontSize:15,
    },
})
export default Footer;
