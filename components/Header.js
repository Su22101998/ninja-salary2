import React from 'react';
import { Text, View , Image, StyleSheet} from 'react-native';

const Header = () =>{
   return(
    <View style={styles.headerContainer}>
        <Image style={styles.headerImage} source={require('../assets/images/ninjasalaryicon.png')} />
        <Image style={styles.headerImageIcon} source={require('../assets/images/128text.png')} />
    </View>
)};

const styles = StyleSheet.create({
    headerContainer:{
        height:80,
        width:'100%',
        backgroundColor: '#2e2b5a',
        flexDirection:'row',
        flex:1
    },
    headerImage:{
        height:55,
        width:55,
        marginLeft:20,
        marginTop:10

    },
    headerImageIcon:{
        height:25,
        width:130,
        marginTop:40,
        right:18,

    },
})
export default Header;
