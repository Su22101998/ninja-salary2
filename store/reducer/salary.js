import { ADD_BALANCE, PASS_BALANCE, REDUCE_BALANCE } from "../actions/salary";

const initialState = {
    balance :0,
    balanceSheet :[],
}

const salaryReducer = (state = initialState, action) => {
    switch(action.type){
        case REDUCE_BALANCE:
            
            return{...state, balance: state.balance - action.deductedAmount};
        default:
            return state;
        case ADD_BALANCE:
            return { ...state, balanceSheet: state.balanceSheet.concat({bal:action.addedBalance, leftBal:state.balance,key:Math.random().toString()})};
        case PASS_BALANCE:
        
            return{...state, balance: state.balance + action.passedBalance}
    }

    return state;
}
export default salaryReducer;