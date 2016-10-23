'use strict';

export const DOMAINS = {
    LOGIN: 'LOGIN',
    JOBS: 'JOBS',
    JOB_DETAILS: 'JOB_DETAILS'
};

// the actions in the domain
const ACTIONTYPES_JOBS = {
    SHOW_DETAILS: 'SHOW_DETAILS',
    SET_JOBS: 'SET_JOBS'
};

export const ACTIONTYPES = Object.assign({}, ACTIONTYPES_JOBS, {
    LOGOUT: 'LOGOUT'
});
