import { ADD_BALANCE, CLICK, PASS_BALANCE, REDUCE_BALANCE } from "../actions/salary";

const initialState = {
    balance :0,
    balanceSheet :[],
    clickable:(false),
}

const salaryReducer = (state = initialState, action) => {
    switch(action.type){
        case REDUCE_BALANCE:
            
            return{...state, balance: state.balance - action.deductedAmount};
        default:
            return state;
        case ADD_BALANCE:
            var date = new Date().getDate()
            var month = new Date().getMonth()
            const year = new Date().getFullYear()
            var hour = new Date().getHours()
            var min = new Date().getMinutes()
            var sec = new Date().getSeconds()
            if (date < 10) {
                date = '0' + date;
              }
              if (month < 10) {
                month = '0' + month;
              }
              if (hour < 10) {
                hour = '0' + hour;
              }
              if (min < 10) {
                min = '0' + min;
              }
              if (sec < 10) {
                sec = '0' + sec;
              }
            return { ...state, balanceSheet: state.balanceSheet.concat({bal:action.addedBalance, leftBal:state.balance,key:Math.random().toString(),date:date+'/'+month+'/'+year+"  "+hour+":"+min+":"+sec}).reverse()};
        case PASS_BALANCE:
        
            return{...state, balance: state.balance + action.passedBalance};
        case CLICK:
            if(state.balance ==0){
                return{...state, clickable:true}
            }
    }

    return state;
}
export default salaryReducer;
