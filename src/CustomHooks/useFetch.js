
import React, { useEffect, useReducer } from "react";
import axios from "axios";
const intialstate = {
    metaData: [],
    resultData: [],
    loading: true,
    error: false
}
const ACTIONS = {
    API_REQUEST: 'api-request',
    FETCH_DATA: 'fetch-data',
    ERR: 'error'
}
function reducer(state, action) {
    switch (action.type) {
        case ACTIONS.API_REQUEST:
            return { ...state, resultData: state.resultData, metaData: [], loading: true }
        case ACTIONS.FETCH_DATA:
            let combinePaymentList = state.resultData.concat(action.payload.results)
           
            return {
                ...state,
                resultData: combinePaymentList,
                metaData: action.payload.metaDatal,
                loading: false
            }
        case ACTIONS.ERR:
            return { ...state, resultData: [], error: true ,loading:false }

        default: return state
    }
}
function useFetch(url) {
    const [state, dispatch] = useReducer(reducer, intialstate);

    useEffect(() => {
        let isApiSubscribed = true;
        dispatch({ type: ACTIONS.API_REQUEST, payload: [] });
        
        axios.get(url)
            .then((response) => {
                if (isApiSubscribed ) {
                dispatch({ type: ACTIONS.FETCH_DATA, payload: response.data })
                }
            }).catch((err) => {
                console.log(error)
                dispatch({ type: ACTIONS.ERR, payload: err })
            });
        return () => {
            console.log("clean up running..,cancel the subscription")
            isApiSubscribed = false;
        }
    }, [url])
    return state
}
export default useFetch;