import ActionTypes from '../constant/constant';

const INITIAL_STATE = {
    userName: 'Aarif',
    currentUser:'',
    users: [],
    messages: {},
    recipientID: ''
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ActionTypes.USERNAME:
            return ({
                ...state,
                userName: action.payload
            })
        case ActionTypes.LOGIN:
            return ({
                ...state,
                currentUser: action.payload
            })   
        default:
            return state;
    }

}