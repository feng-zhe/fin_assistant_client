'use strict';

import { ACTIONTYPES } from './constants';

export function showJobDetail(job){
    return {
        type: ACTIONTYPES.SHOW_DETAILS,
        job: job
    };
}

export function setJobs(jobs){
    return {
        type: ACTIONTYPES.SET_JOBS,
        jobs: jobs
    };
}
