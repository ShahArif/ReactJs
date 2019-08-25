import ActionTypes from '../constant/constant';
import history from '../../History';
// import createBrowserHistory from 'history/createBrowserHistory'

// import createBrowserHistory from 'history/createBrowserHistory';
// const history = createBrowserHistory()

// const hsitory = createBrowserHistory()

export function changeUserName() {
    return dispatch => {
        dispatch({ 
            type: ActionTypes.USERNAME,
            payload: 'Shah' 
        })
    }
}

export function login(data){
    return dispatch => {
       dispatch({
            type: ActionTypes.LOGIN,
            payload: data
       })
    }
}

