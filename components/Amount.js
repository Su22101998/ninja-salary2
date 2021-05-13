import React, {useEffect, useState} from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Alert,Button} from 'react-native';
import { useDispatch,useSelector } from 'react-redux';
import {reduceBalance} from '../store/actions/salary';
import {addBalance,click} from '../store/actions/salary';
import Icon from 'react-native-vector-icons/Ionicons';
import LottieView from 'lottie-react-native';

import {useNavigation} from '@react-navigation/native'


const Amount = () =>{
    const navigation = useNavigation();
    //state to check if percent keys were pressed
    const[pressed,setPressed]= useState(false)

    // state to change the percentage to be associated with each percent key
    const[percentage,setPercentage] = useState(0)

    //state to take independent text input
    const[text,SetText] =useState('')
    

    const textHandler = (enteredText) => {SetText(enteredText.replace(/[^0-9]/g, '')) ;setPressed(false)}
    
    // getting balance from store
    const amountPased = useSelector(state => state.balance.balance);
    const isClickable = useSelector(state => state.balance.clickable)


    const dispatch = useDispatch();
    // separate dispatch for user inputed values and values from percentage buttons
    const reduceBalanceHandler = () => {
        dispatch(reduceBalance(parseInt(text)))
    }
    const addBalanceHandler = () => {
        dispatch(addBalance(parseInt(text)))
    }

    const reduceBalanceHandler_2 = () => {
        dispatch(reduceBalance(percent(percentage,amountPased)))
    }
    const addBalanceHandler_2 = () => {
        dispatch(addBalance(percent(percentage,amountPased)))
    }
    const clickableHandler = () => {
        dispatch(click())
    }


    //Alert message
    const twoButtonAlert = () =>{
        if (parseInt(text) > amountPased){
            Alert.alert(
                "Invalid Amount",
                " You cannot withdraw more than Rs."+amountPased,
                  [
                      { text: "OK", onPress: () => {
                          SetText('') ;
                           setPressed(false)},
                            style:'destructive' }
                  ]
              )
        }
        else if (parseInt(text) <= amountPased){

            Alert.alert(
                "Withdraw Amount",
                "Do You want to withdraw Rs."+text ,
                  [
                      {text: "Cancel",onPress: () => {
                          SetText('') ; 
                          setPressed(false)} },
                      { text: "OK", onPress: () => {
                       reduceBalanceHandler();
                       addBalanceHandler();
                       clickableHandler();
                       Alert.alert("Withdraw Successful","Amount withdrawn successfully",
                       [
                        { text: "OK", onPress: () => {
                            SetText('') ;
                             setPressed(false);
                             
                             navigation.navigate('History');
                             },
                              style:'destructive' }
                    ])} }
                  ]
              )

        }
        else{ 
            Alert.alert(
                "Withdraw Amount",
                "Do You want to withdraw Rs."+percent(percentage,amountPased),
                    [
                        {text: "Cancel",onPress: () => {
                            SetText('') ;
                         setPressed(false)} },
                        { text: "OK", onPress: () => {
                             reduceBalanceHandler_2();
                             addBalanceHandler_2();
                             clickableHandler();
                             Alert.alert("Withdraw Successful","Amount withdrawn successfully",
                             [
                              { text: "OK", onPress: () => {
                                  SetText('') ;
                                   setPressed(false);
                                   
                                   navigation.navigate('History')},
                                    style:'destructive' }
                          ])} }
                    ]
                )
};}
 
    // performs percent calculation
    function percent(x,z) {
        var y = Math.round(x*z)
        return y
    }

    // individual components to fix too many re renders
    function twentyfive(){
        setPercentage(0.25)
        setPressed(true)
    }
    function fifty(){
        setPercentage(0.50)
        setPressed(true)
    }
    function seventyfive(){
        setPercentage(0.75)
        setPressed(true)
    }
    function hundred(){
        setPercentage(1)
        setPressed(true)
    }
    
   return(
    <View style={styles.amountContainer}>
        <View style={styles.amountHeadingContainer}>
            <Text style={styles.amountHeading}>Enter amount to withdraw (Rs.)</Text>
        </View>
        <View style={styles.inputContainer}>
            <TextInput style={styles.input} 
            placeholder = '0'
            keyboardType = 'numeric' 
            placeholderTextColor ='#9b9eaa'
            underlineColorAndroid = '#9b9eaa'
            onChangeText = {textHandler}
            value = {pressed ? percent(percentage,amountPased).toString() : text}/>
        </View>
        

            <View style={styles.percentContainer}>
                <TouchableOpacity onPress={twentyfive}>
                    <Text style={styles.amountHeading}>
                        25%
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={fifty}>
                    <Text style={styles.amountHeading}>
                        50%
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={seventyfive}>
                    <Text style={styles.amountHeading}>
                        75%
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={hundred}>
                    <Text style={styles.amountHeading}>
                        100%
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.buttonContainer}>

                <TouchableOpacity onPress ={()=>twoButtonAlert() } disabled={isClickable}>
                    <View style={styles.button}><Text style={isClickable?styles.text1:styles.text}>WITHDRAW</Text></View>
                </TouchableOpacity>
        
            </View>
            
    </View>
)};

const styles = StyleSheet.create({
    amountContainer:{
        width:"100%",
        height:300,
        backgroundColor:"#fff",
        borderTopLeftRadius:50,
        alignItems:'center',
    },
    amountHeadingContainer:{
        marginTop:50,
        marginBottom:10
    },
    amountHeading:{
        color:"#7e5ea7",
        fontFamily:'Roboto-Bold',
        fontSize:20,
    }, 
    inputContainer:{
        width:"80%",       
    },
    input:{
        fontSize:20, 
        color:"#555"       
    },
    percentContainer:{
        flexDirection:'row',
        justifyContent:'space-evenly',
        backgroundColor:"#fff",
        height:30,
        width:"100%"
    },  
    buttonContainer:{
        width:"100%",
        backgroundColor:"#fff",
        alignItems:'center',
        paddingTop:30,
        
    },
    button:{
        backgroundColor:"#7e5ea7",
        height:50,
        width: 250,
        borderRadius:50,
        alignItems:'center',
        justifyContent:'center'
    },
    text:{
        color:"#fff",
        fontFamily:'Roboto-Bold',
        fontSize:20,
    },   
    text1:{
        color:"#aaa",
        fontFamily:'Roboto-Bold',
        fontSize:20,
    }
})
export default Amount;
