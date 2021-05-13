export const REDUCE_BALANCE = 'REDUCE_BALANCE';
export const ADD_BALANCE = 'ADD_BALANCE';
export const PASS_BALANCE = 'PASS_BALANCE';
export const CLICK = 'CLICK';

export const reduceBalance = (amt) => {

    return {type: REDUCE_BALANCE , deductedAmount: amt};

};
export const addBalance = (amt) => {
    return {type:ADD_BALANCE, addedBalance : amt};
};
export const passBalance = (amt) => {
    return {type:PASS_BALANCE, passedBalance : amt};
};
export const click = () => {
    return {type:CLICK};
};
