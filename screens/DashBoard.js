import React,{useState,useEffect} from 'react';
import { Text, View , Image, StyleSheet, ActivityIndicator,ScrollView} from 'react-native';

import Header from '../components/Header';
import Amount from '../components/Amount';
import Footer from '../components/Footer';
import {useSelector,useDispatch} from 'react-redux';
import { passBalance } from '../store/actions/salary';



// API url
const dataURL = "https://beta.api.ninjasalary.com/get-dummy-dashboard-data/"

const DashBoard = ({navigation}) => {
    const[isLoading, setIsLoading] = useState(true);
    const[data,setData] = useState([]);
    const[name,setName] = useState([]);
    
    
    const dispatch = useDispatch();
    // setting balance in store
    const passBalanceHandler = initialBal => {
        dispatch(passBalance(initialBal))
    }
    
    //getting balance from store
    const availableBalance =useSelector(state => state.balance.balance);


    useEffect(()=>{
        fetch(dataURL)
        .then((response) => response.json())
        .then((json) =>{ 
            setData(json.data.balance_details);
            setName(json.data)            
            passBalanceHandler(json.data.balance_details.available_balance_in_paisa/100)
        
        })
        .catch((error) => {alert(error)})
        .finally(() => setIsLoading(false));
        },[]);

const mysalary = data.monthly_salary_in_paisa/100
if(isLoading){
   return (<View style = {{flex:1,alignItems:'center',justifyContent:'center'}}>
       <ActivityIndicator size="large" color="#7e5ea7" />
   </View>)
}
return(
   <ScrollView>

    <View style={styles.profileContainer}>

        <Header />
        

        <View style={styles.profileImageContainer}>
            <Image  
            style={styles.profileImage} 
            source={require('../assets/images/profile.png')}
            />
        </View>
        <View>
            <Text 
            style={styles.textIntro}>
                Hello,
            </Text>
        </View>
        <View>
            <Text 
            style={styles.textName}>
                {name.first_name} {name.middle_name} {name.last_name}
            </Text>
        </View>
        <View style={styles.textMainContainer}>
            <Text 
            style={styles.textMain}>
                You've earned Rs {mysalary} this month. {`\n`}
                You can withdraw Rs {availableBalance}
            </Text>
        </View>
        <Amount   />       

        <Footer />    

    </View>
   </ScrollView> 
);}

const styles = StyleSheet.create({
    profileContainer:{
        alignItems: 'center',
        width:"100%",   
        backgroundColor:'#e5e5e5'     
    },
    profileImageContainer:{
        marginTop:80,
        marginBottom:40,
    },
    profileImage:{
        width:120,
        height:120,
    },
    textIntro:{
        color:"#fdc66c",
        fontFamily:'Roboto-Bold',
        fontSize:28,
    },
    textName:{
        color:"#7e5ea7",
        fontFamily:'Roboto-Bold',
        fontSize:25,
    },
    textMainContainer:{
        marginTop:20,
        marginBottom:40,        
    },
    textMain:{
        color:"#9b9eaa",
        fontSize:20,
        textAlign:'center',
    },
   
})
export default DashBoard;