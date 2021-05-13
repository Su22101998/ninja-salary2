import React from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';
import Header from "../components/Header";
import {useSelector} from 'react-redux';

const History = () => {
    //getting array of deductions from store
    const availableBalance = useSelector(state => state.balance.balanceSheet);  


  return (
    

    <View style = {styles.container}>
        <Header />
        <View style={styles.historyContainer}>            
            <FlatList
            keyExtractor = {(item,index)=> item.key}
            data = {availableBalance}
            renderItem={itemData =>(
                <View style={{flexDirection:'row'}}>

                <View style={styles.card1}>
                    <Text style= {styles.text}>
                         Dated:{itemData.item.date} 
                    </Text>
                </View>
                <View style={styles.card}>
                <Text style= {styles.text}>
                     Rs : {itemData.item.bal} has been deducted from your main Balance. You have Rs : {itemData.item.leftBal} left in your account. 
                </Text>
            </View> 
            </View>)}
            />
        </View>
    </View>
    
);}
 const styles = StyleSheet.create({
     container:{
        flex:1,
        alignItems: 'center',
        width:"100%",   
        backgroundColor:'#e5e5e5',

     },
     historyContainer:{
         flex:7.5, 
         flexDirection:'column-reverse',
           
     },
     card:{
         height:90,
         margin:5,
         marginTop:10,
         backgroundColor:'#7e5ea7',
         borderRadius:10,
         justifyContent:'center',
         width:250
     },
     card1:{
        height:90,
        margin:5,
        marginTop:10,
        backgroundColor:'#7e5ea7',
        borderRadius:10,
        justifyContent:'center',
        width:120
    },
     text:{
         color:"#fff",
         fontSize : 15,
         margin:10
     }

 })
export default History;
