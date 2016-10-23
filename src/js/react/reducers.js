'use strict';

import { combineReducers } from 'Redux';
import { DOMAINS, ACTIONTYPES } from './constants';

function domain(state = DOMAINS.JOBS, action) {
    switch(action.type){
        case ACTIONTYPES.SHOW_DETAILS:
            return DOMAINS.JOB_DETAILS;
        default:
            return state;
    }
}

function data(state = {}, action){
    switch(action.type){ 
        case ACTIONTYPES.SHOW_DETAILS: 
            return Object.assign({},state,
                    {
                        job: action.job
                    });
        case ACTIONTYPES.SET_JOBS: 
            return Object.assign({},state,
                    {
                        jobs: action.jobs
                    });
        default:
            return state;
    }
}

const reducer = combineReducers({
    domain,
    data
});

export default reducer;
